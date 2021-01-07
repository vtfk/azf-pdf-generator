const HTTPError = require('../../lib/http-error')
const validateSchema = require('../../lib/validate-schema')

const getValidationInnerError = (data, schema) => {
  try {
    const validation = validateSchema(data, schema)
    return validation
  } catch (error) {
    return error.innerError
  }
}

const validSchema = {
  system: 'minelev',
  template: 'varsel/fag'
}

describe('Validate document schema', () => {
  it('throws when nothing is passed', () => {
    expect(() => validateSchema()).toThrowError(HTTPError)
  })

  it('throws when null is passed', () => {
    expect(() => validateSchema(null)).toThrowError(HTTPError)
  })

  it('throws when template isn\'t found', () => {
    expect(() => validateSchema(validSchema, 'not-found')).toThrow()
  })

  it('fails on validation when system is missing', () => {
    expect(getValidationInnerError({ template: 'sak' }).summary)
      .toEqual(["Missing required property 'system'"])
  })

  it('fails on validation when template is missing', () => {
    expect(getValidationInnerError({ system: 'ting' }).summary)
      .toEqual(["Missing required property 'template'"])
  })

  it('fails on validation when wrong type is passed', () => {
    expect(getValidationInnerError({ system: 'sak', template: true }).summary)
      .toEqual(['Property /template should be of type string'])
  })

  it('returns language \'nb\' and empty data object when it isn\'t passed', () => {
    expect(validateSchema(validSchema)).toEqual({ ...validSchema, language: 'nb', data: {} })
  })
})
