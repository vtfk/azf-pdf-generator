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
  template: 'varsel/fag',
  type: '',
  version: ''
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
      .toEqual(['Property undefined should be of type string'])
  })

  it('returns language \'nb\', empty data object, type \'\' and version \'\' when it isn\'t passed', () => {
    expect(validateSchema(validSchema)).toEqual({ ...validSchema, language: 'nb', data: {} })
  })

  it('returns language \'nb\', empty data object, type \'2\' and version \'B\' when it is passed', () => {
    expect(validateSchema({ ...validSchema, type: '2', version: 'B' })).toEqual({ ...validSchema, language: 'nb', data: {}, type: '2', version: 'B' })
  })
})
