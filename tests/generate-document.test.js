const generateDocumentFunc = require('../GenerateDocument')
const { writeFile } = require('fs').promises
const { join } = require('path')

const testDocumentsTypes = ['varsel-fag', 'yff-bekreftelse', 'yff-bekreftelse-bedrift', 'yff-laereplan', 'yff-tilbakemelding']
const context = { log: console.log, invocationId: 'testing' }

describe('GenerateDocument function test', () => {
  it('returns 400 when no body was provided', async () => {
    await expect(generateDocumentFunc(context, {})).resolves
      .toMatchObject({
        status: 400,
        body: { error: { message: 'No request body received!' } }
      })
  })

  it('returns 400 if schema validation fails', async () => {
    await expect(generateDocumentFunc(context, { body: {} })).resolves
      .toMatchObject({
        status: 400,
        body: { error: { message: 'Invalid request body' } }
      })
  })

  it('returns 404 if template wasn\'t found', async () => {
    await expect(generateDocumentFunc(context, { body: { system: 'minelev', template: 'not-found' } })).resolves
      .toMatchObject({
        status: 404,
        body: { error: { message: 'Template not found!' } }
      })
  })

  testDocumentsTypes.forEach(type => {
    const testDocument = require(`./data/${type}.json`)
    it(`${type} :: can parse and write returned base64 to .pdf file correctly`, async () => {
      const document = await generateDocumentFunc(context, { body: testDocument })
      const { base64 } = document.body.data
      await expect(typeof base64).toBe('string')

      const buffer = Buffer.from(base64, 'base64')
      await expect(buffer.byteLength).toBeGreaterThan(50000)

      await writeFile(join(__dirname, `./data/${type}.pdf`), buffer)
    })
  })
})
