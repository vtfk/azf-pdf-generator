const getTemplate = require('../../lib/get-template')

describe('Get template', () => {
  it('throws when system isn\'t found', async () => {
    await expect(getTemplate({ system: 'not-found', template: 'not-found' })).rejects
      .toThrow('Template not found!')
  })

  it('throws when template isn\'t found', async () => {
    await expect(getTemplate({ system: 'minelev', template: 'not-found' })).rejects
      .toThrow('Template not found!')
  })

  it('fallbacks to \'nb\' when template for language isn\'t found', async () => {
    await expect(getTemplate({ system: 'minelev', template: 'varsel/fag', language: 'en' })).resolves
      .toContain('language: nb')
  })

  it('returns template', async () => {
    await expect(getTemplate({ system: 'minelev', template: 'varsel/fag' })).resolves
      .toContain('definition: brevmal')
  })
})
