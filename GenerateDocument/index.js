const { logConfig, logger } = require('@vtfk/logger')
const pdfmake = require('@alheimsins/pdf-make')
const prettyBytes = require('pretty-bytes')
const HTTPError = require('../lib/http-error')
const validateSchema = require('../lib/validate-schema')
const getResponseObject = require('../lib/get-response-object')
const getTemplate = require('../lib/get-template')
const generateDocument = require('../lib/generate-document')
const getPdfmakeOptions = require('../lib/get-pdfmake-options')

module.exports = async function (context, req) {
  logConfig({ azure: { context }, prefix: 'generate-document' })
  logger('info', 'start')

  try {
    const { data, ...payload } = validateSchema(req.body) // Throws error if schema isn't valid, and returns payload if valid
    const template = await getTemplate(payload)
    const document = generateDocument({ template, data })
    const options = getPdfmakeOptions(payload)
    const documentBuffer = await pdfmake(document, options)

    logger('info', ['returning document', 'size', prettyBytes(Buffer.byteLength(documentBuffer))])
    return getResponseObject({ ...payload, data, base64: documentBuffer.toString('base64') })
  } catch (error) {
    if (error instanceof HTTPError) return error.toJSON()
    return new HTTPError(500, error.message || 'An unknown error occured', error).toJSON()
  }
}
