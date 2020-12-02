const buildDocument = require('../../lib/generate-document')

const testTemplate = '---\ndefinition: brevmal\nlanguage: nb\n---\n# Hello, {{ name }}!'
const testData = { name: 'Kjell' }

describe('Build document', () => {
  const build = () => buildDocument({ template: testTemplate, data: testData })

  it('doesn\'t throw when building document', () => {
    expect(build).not.toThrow()
  })

  const document = build()

  it('returned document is an object', () => {
    expect(typeof document).toBe('object')
  })

  it('returned document can be converted to JSON', () => {
    expect(() => JSON.stringify(document)).not.toThrow()
  })

  it('returned document contains \'Logo Vestfold og Telemark fylkeskommune!\', so we know that the template is applied', () => {
    expect(JSON.stringify(document)).toContain('Logo Vestfold og Telemark fylkeskommune')
  })

  it('returned document contains \'Hello, Kjell!\', so we know that handlebars did it\'s job', () => {
    expect(JSON.stringify(document)).toContain('Hello, Kjell!')
  })
})
