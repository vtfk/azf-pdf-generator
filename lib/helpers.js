module.exports = {
  isoDate: (date) => {
    try {
      return new Date(date).toISOString()
    } catch (error) {
      return date
    }
  },
  lowercase: (text) => {
    if (typeof text !== 'string') return ''
    return text.toLowerCase()
  }
}
