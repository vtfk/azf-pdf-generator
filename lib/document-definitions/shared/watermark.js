/**
 * Returns a watermark object
 * @param {Object} content The document content
 * @param {String} defaultText Default watermark text
 */
module.exports = (content, defaultText = '') => {
  if (!content || !content.watermark) return undefined

  return {
    text: content.watermark.text || (typeof (content.watermark) === 'string' ? content.watermark : defaultText),
    angle: content.watermark.angle || -45,
    color: content.watermark.color || '#EB8380', // Mørk nype
    opacity: content.watermark.opacity || 0.3,
    bold: content.watermark.bold || false,
    italics: content.watermark.italic || false,
    fontSize: content.watermark.fontSize || undefined,
    font: content.watermark.font || 'Nunito'
  }
}
