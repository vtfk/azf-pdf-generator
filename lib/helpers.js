module.exports = {
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
  join: (input, lastPart = 'og') => {
    if (!Array.isArray(input)) return ''
    if (input.length === 0) return ''
    if (input.length === 1) return input[0]

    const arr = [...input].filter(inp => !!inp)
    const last = arr.pop()
    return arr.join(', ') + ` ${lastPart} ` + last
  }
}
