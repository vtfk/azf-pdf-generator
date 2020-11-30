const { logger } = require('@vtfk/logger')
const { readFile } = require('fs').promises
const HTTPError = require('./http-error')

const defaultLanguage = 'nb'

/**
 * Returns the template from the given system and template name
 *
 * @param {Object} templateObject An object with system, template and language
 */
async function getTemplate ({ system, template, language = defaultLanguage }) {
  const tempName = `templates/${system}/${template}-${language}.md`
  const fallback = `templates/${system}/${template}-${defaultLanguage}.md`
  try {
    return await readFile(tempName, 'utf-8')
  } catch (error) {
    logger('warn', ['get-template', `Could not find ${tempName}. Will try fallback`])

    try {
      return await readFile(fallback, 'utf-8')
    } catch (error) {
      logger('warn', ['get-template', `Could not find fallback template ${fallback} either!`])
      throw new HTTPError(404, 'Template not found!', { system, template, language })
    }
  }
}

module.exports = getTemplate
