const { isoDate, prettyDate, lowercase } = require('../../lib/helpers')

describe('Test helper - isoDate', () => {
  it('returns correct ISO-date from timestamp', () => {
    const date = new Date()
    expect(isoDate(date.getTime())).toBe(date.toISOString())
  })

  it('returns input if passed string isn\'t a valid date', () => {
    expect(isoDate('test')).toBe('test')
  })
})

describe('Test helper - prettyDate', () => {
  it('returns correctly formatted date from timestamp', () => {
    expect(prettyDate(1610036019845)).toBe('07.01.2021')
  })

  it('returns input if passed string isn\'t a valid date', () => {
    expect(prettyDate('test')).toBe('test')
  })
})

describe('Test helper - lowercase', () => {
  it('returns lowercased date', () => {
    expect(lowercase('HELLO')).toBe('hello')
  })

  it('returns empty string if input isn\'t a string', () => {
    expect(lowercase({})).toBe('')
  })
})