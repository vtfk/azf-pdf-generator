module.exports = {
  eq: (v1, v2) => v1 === v2,
  ne: (v1, v2) => v1 !== v2,
  lt: (v1, v2) => v1 < v2,
  gt: (v1, v2) => v1 > v2,
  lte: (v1, v2) => v1 <= v2,
  gte: (v1, v2) => v1 >= v2,
  and: (...args) => Array.prototype.slice.call(args, 0, args.length - 1).every(val => !!val),
  or: (...args) => Array.prototype.slice.call(args, 0, args.length - 1).some(val => !!val),
  variable: (varName, varValue, options) => {
    options.data.root[varName] = varValue
  },
  multiple: (array) => {
    if (!Array.isArray(array)) return false
    return array.length > 1
  },
  replace: (from, to, value = '') => value.toString().replace(from, to),
  isoDate: (date) => {
    try {
      return new Date(date).toISOString()
    } catch (error) {
      return date
    }
  },
  prettyDate: (date) => {
    try {
      const iso = new Date(date).toISOString()
      const dato = iso.split('T')[0].split('-')

      // Return in format dd.MM.yyyy
      return `${dato[2]}.${dato[1]}.${dato[0]}`
    } catch (error) {
      return date
    }
  },
  lowercase: (text) => {
    if (typeof text !== 'string') return ''
    return text.toLowerCase()
  },
  uppercase: (text) => {
    if (typeof text !== 'string') return ''
    return text.toUpperCase()
  },
  uppercaseFirst: (text) => {
    if (typeof text !== 'string') return ''
    return text.charAt(0).toUpperCase() + text.slice(1)
  },
  capitalize: (text) => {
    if (typeof text !== 'string') return ''
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
  },
  join: (input, lastPart = 'og') => {
    if (!Array.isArray(input)) return ''
    if (input.length === 0) return ''
    if (input.length === 1) return input[0]

    const arr = [...input].filter(inp => !!inp)
    const last = arr.pop()
    return arr.join(', ') + ` ${lastPart} ` + last
  },
  objectContains: (obj, text) => {
    if (!obj) return false
    const regex = new RegExp(text, 'i')
    return regex.test(JSON.stringify(obj))
  },
  classIdentifier: (lang, name) => {
    if (lang) return lang
    return name
  }
}
