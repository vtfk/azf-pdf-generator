const { isoDate, prettyDate, lowercase, join, uppercase, variable, eq, ne, lt, gt, lte, gte, and, or, multiple, replace, capitalize, uppercaseFirst, objectContains } = require('../../lib/helpers')

describe('Test helper - logic', () => {
  const options = {}

  it('eq / ===', () => {
    expect(eq('Hei', 'Hade')).toBe(false)
    expect(eq('Hei', 'Hei')).toBe(true)
  })

  it('ne / !==', () => {
    expect(ne('Hei', 'Hade')).toBe(true)
    expect(ne('Hei', 'Hei')).toBe(false)
  })

  it('lt / <', () => {
    expect(lt(3, 10)).toBe(true)
    expect(lt(42, 4)).toBe(false)
  })

  it('gt / >', () => {
    expect(gt(3, 10)).toBe(false)
    expect(gt(42, 4)).toBe(true)
  })

  it('lte / <=', () => {
    expect(lte(10, 10)).toBe(true)
    expect(lte(4, 42)).toBe(true)
    expect(lte(6, 5)).toBe(false)
  })

  it('gte / >=', () => {
    expect(gte(10, 10)).toBe(true)
    expect(gte(6, 5)).toBe(true)
    expect(gte(4, 42)).toBe(false)
  })

  it('and / &&', () => {
    expect(and(true, 'hei', options)).toBe(true)
    expect(and(false, '', options)).toBe(false)
    expect(and(true, false, false, true, options)).toBe(false)
  })

  it('or / ||', () => {
    expect(or('', 'hei', options)).toBe(true)
    expect(or(false, '', options)).toBe(false)
    expect(or(false, false, false, true, options)).toBe(true)
  })
})

describe('Test helper - variable', () => {
  it('assigns handlebars variable', () => {
    const options = { data: { root: {} } }
    variable('VAR', 'Er no tull!', options)
    expect(options.data.root.VAR).toBe('Er no tull!')
  })
})

describe('Test helper - multiple', () => {
  it('returns false on no value', () => {
    expect(multiple()).toBe(false)
  })

  it('returns false on empty array', () => {
    expect(multiple([])).toBe(false)
  })

  it('returns false on array with empty object', () => {
    expect(multiple([{}])).toBe(false)
  })

  it('returns false on single value', () => {
    expect(multiple(['Gro'])).toBe(false)
  })

  it('returns true on multiple values', () => {
    expect(multiple(['Gro', 'Kåre'])).toBe(true)
  })
})

describe('Test helper - replace', () => {
  it('returns correctly replaced value', () => {
    expect(replace('hei', 'hade', 'hei på deg')).toBe('hade på deg')
  })

  it('returns input if nothing was replaced', () => {
    expect(replace('hei', 'hade', 'god helg')).toBe('god helg')
  })

  it('returns nothing if nothing is to be replaced', () => {
    expect(replace('hei', 'hade')).toBe('')
  })
})

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

describe('Test helper - capitalize', () => {
  it('returns capitalized data', () => {
    expect(capitalize('heLlo')).toBe('Hello')
  })

  it('returns empty string if input is an empty string', () => {
    expect(capitalize('')).toBe('')
  })

  it('returns empty string if input isn\'t a string', () => {
    expect(capitalize({})).toBe('')
  })
})

describe('Test helper - uppercaseFirst', () => {
  it('returns large first character data', () => {
    expect(uppercaseFirst('heLlo')).toBe('HeLlo')
  })

  it('returns empty string if input is an empty string', () => {
    expect(uppercaseFirst('')).toBe('')
  })

  it('returns empty string if input isn\'t a string', () => {
    expect(uppercaseFirst({})).toBe('')
  })
})

describe('Test helper - uppercase', () => {
  it('returns uppercase date', () => {
    expect(uppercase('heLlo')).toBe('HELLO')
  })

  it('returns empty string if input isn\'t a string', () => {
    expect(uppercase({})).toBe('')
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

describe('Test helper - join', () => {
  it('returns empty string on no input', () => {
    expect(join()).toBe('')
  })

  it('returns empty string if input isn\'t a string', () => {
    expect(join(true)).toBe('')
  })

  it('returns empty string on empty array', () => {
    expect(join([])).toBe('')
  })

  it('returns simple value on one input', () => {
    expect(join(['Ape'])).toBe('Ape')
  })

  it('returns joined value on two inputs', () => {
    expect(join(['Ape', 'Banan'])).toBe('Ape og Banan')
  })

  it('returns joined value with comma on three or more inputs', () => {
    expect(join(['Ape', 'Banan', 'Kake'])).toBe('Ape, Banan og Kake')
    expect(join(['Ape', 'Banan', 'Kake', 'Marsipan'])).toBe('Ape, Banan, Kake og Marsipan')
  })

  it('returns value joined with custom last part', () => {
    expect(join(['Ape', 'Banan'], 'eller')).toBe('Ape eller Banan')
  })

  it('filters out empty values', () => {
    expect(join(['Ape', '', 'Banan', '', ''])).toBe('Ape og Banan')
  })
})

describe('Test helper - objectContains', () => {
  const obj = {
    "id": 1,
    "nb": "Du har manglende vurderingsgrunnlag",
    "nn": "Du har manglande vurderingsgrunnlag",
    "en": "You have a lack of assessments"
  }

  it('returns false on no input', () => {
    expect(objectContains()).toBe(false)
  })

  it('returns true on empty input', () => {
    expect(objectContains([])).toBe(true)
  })

  it('returns true on valid input and text found', () => {
    expect(objectContains(obj, "vurderingsgrunnlag")).toBe(true)
  })

  it('returns false on valid input and text not found', () => {
    expect(objectContains(obj, "heihei")).toBe(false)
  })
})
