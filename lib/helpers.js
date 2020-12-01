module.exports = {
  isoDate: (date) => {
    return new Date(date).toISOString()
  },
  lowercase: (text) => {
    return text.toLowerCase()
  }
}
