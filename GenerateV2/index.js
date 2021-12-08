/*
  Import dependencies
*/
const PDFGenerator = require('@vtfk/pdf-generator')
const { decodeBase64 } = require('@vtfk/utilities')
const getDocumentDefinition = require('@vtfk/document-definitions')
const { logConfig, logger } = require('@vtfk/logger')
const HTTPError = require('../lib/http-error')
const Sjablong = require('sjablong')
const merge = require('lodash.merge')
const fs = require('fs')

/*
  Function
*/
module.exports = async function (context, req) {
  // Setup logger
  logConfig({ azure: { context }, prefix: 'generate-document' })
  logger('info', 'start')
  try {
    // Input validation
    if (!req || !req.body) throw new HTTPError(400, 'Request is empty')
    // Determine what template text to use
    let template
    // If a template has been received in the request, decode it
    if (req.body.template) {
      template = decodeBase64(req.body.template)
    } else if (req.body.templateId) {
      // Validate that other required fields are present
      if (!req.body.system) throw new HTTPError(400, 'When providing a templateid, system must also be provided')

      // Define some candidates of templates to look for
      const defaultLanguage = 'nb'
      const templateId = req.body.templateId
      const system = req.body.system
      const language = req.body.language || 'nb'

      const candidates = []
      if (system) {
        if (language && language !== defaultLanguage) candidates.push(`templates/${system}/${templateId}-${language}.md`)
        candidates.push(`templates/${system}/${templateId}-${defaultLanguage}.md`)
      }
      if (language && language !== defaultLanguage) candidates.push(`templates/${templateId}-${language}.md`)
      candidates.push(`templates/${templateId}-${defaultLanguage}.md`)
      candidates.push(`templates/${templateId}.md`)

      // Search for the template in the candidates
      candidates.forEach((candidate) => {
        // If template has been found, just return
        if (template) { return }
        // Search for templates
        if (fs.existsSync(candidate)) {
          try {
            const tmp = fs.readFileSync(candidate, 'utf-8')
            if (tmp) template = tmp
          } catch {
            throw new HTTPError(500, `The content template ${candidate} was found, but we were unable to read it`)
          }
        }
      })

      // If no templates was found, throw an error
      if (!template) throw new HTTPError(404, 'Could not find the requested local template')
    } else {
      // No template was received through the request
      throw new HTTPError(400, 'You have to provide templateid or template to generate PDF', 'No template is provided')
    }

    // CombinedMetadata - this will be a combination of req.body.data, schemaDefaults and markdownContent.metadata
    let combinedMetadata = {}

    // Generate schema and extract any default values from it
    const schema = Sjablong.generateSchema(template)
    const schemaDefaults = Sjablong.createObjectFromSchema(schema, true, req.body.preview)
    if (schemaDefaults) {
      combinedMetadata = schemaDefaults
    }

    // Combine tha schema default data with req.body.data if applicable
    if (req.body.data) combinedMetadata = merge(combinedMetadata, req.body.data)

    // Validate the data against the schema
    if (!req.body.preview) Sjablong.validateData(schema, combinedMetadata)
    // Replace all placeholder values in the template
    const replaced = Sjablong.replacePlaceholders(template, combinedMetadata, { preview: req.body.preview })

    // Convert the template to HTML
    const markdownContent = Sjablong.getHTMLandMetadataFromMarkdown(replaced)

    // Combine the metadata again if applicable
    if (markdownContent && markdownContent.metadata) combinedMetadata = merge(markdownContent.metadata, combinedMetadata)

    // Attempt to get the document template definition
    const documentDefinitionId = req.body.documentDefinitionId || combinedMetadata.documentDefinitionId || combinedMetadata.definition
    let documentDefinition
    let documentStyles
    if (documentDefinitionId) {
      const [definition, defaultStyles] = getDocumentDefinition(documentDefinitionId, combinedMetadata.language || 'nb')

      if (!definition) {
        throw new HTTPError(404, `Could not find document definition '${documentDefinitionId}'`)
      } else if (!defaultStyles) {
        throw new HTTPError(404, `Could not find styles for document definition '${documentDefinitionId}'`)
      }

      documentDefinition = definition
      documentStyles = defaultStyles
    }

    // Generate the PDF
    const pdfBase64 = await PDFGenerator.GeneratePDFfromHTML(markdownContent.html, documentDefinition, documentStyles, combinedMetadata)

    /*
      Respond
    */
    context.res = {
      // status: 200, /* Defaults to 200 */
      body: {
        data: combinedMetadata,
        base64: pdfBase64
      }
    }
  } catch (error) {
    if (error instanceof HTTPError) context.res = error.toJSON()
    else context.res = new HTTPError(500, error.message || 'An unknown error occured', error).toJSON()
  }
}
