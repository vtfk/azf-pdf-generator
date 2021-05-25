module.exports = ({ type, version }) => {
  const options = {
    type,
    version
  }

  if (!options.type || !options.version) return undefined

  return options
}
