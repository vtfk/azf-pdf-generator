/**
 * Takes an input and returns it in proper date format
 * @param {Date|string} date The date that should be parsed
 * @returns {string} formatted date with format: dd.mm.yyyy
 */
module.exports = (date) => {
  if (typeof (date) === 'string') {
    date = new Date(`${date}${date.endsWith('Z') ? '' : 'Z'}`)
  }
  const split = date.toISOString().split('T')
  const dateSplit = split[0].split('-')

  const yyyy = dateSplit[0]
  const mm = dateSplit[1]
  const dd = dateSplit[2]

  return `${dd}.${mm}.${yyyy}`
}
