const defaultLanguage = 'nb'

/**
 * Returns function for selected document definition and override html styles (for html-to-pdfmake)
 * @param {string} id The id for document definition
 * @param {string} language The language for the definition in ISO 639-1 format.
 * @returns {[Function, {}]} definition, overrideStyles
 */
function getDocumentDefinition (id, language = defaultLanguage) {
  const definition = `./definitions/${id}-${language}`
  const fallback = `./definitions/${id}-${defaultLanguage}`
  const { htmlStyles } = require('./shared/style')

  try {
    return [require(definition), htmlStyles]
  } catch (error) {
    console.warn(`Could not find ${definition}. Trying fallback.`)
    return [require(fallback), htmlStyles]
  }
}

module.exports = getDocumentDefinition
