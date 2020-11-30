const { logger } = require('@vtfk/logger')
const HTTPError = require('./http-error')

const Ajv = require('ajv')
const ajv = new Ajv({ allErrors: true, jsonPointers: true, useDefaults: true })

const repackAjvError = (error) => {
  const { keyword, params, dataPath, message } = error

  if (keyword === 'required') return `Missing required property '${params.missingProperty}'`
  if (keyword === 'type') return `Property ${dataPath} should be of type ${params.type}`
  return message
}

module.exports = (body = {}, schemaName = 'document') => {
  const schema = require(`../models/${schemaName}.json`)
  const validate = ajv.compile(schema)
  const valid = validate(body)

  if (!valid) {
    logger('warn', ['validate-schema', 'schema validation failed', validate.errors.map(repackAjvError)])
    throw new HTTPError(400, 'Invalid request body', { summary: validate.errors.map(repackAjvError), schemaErrors: validate.errors })
  }

  return body
}
