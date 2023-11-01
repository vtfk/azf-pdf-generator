const formatDate = require('../lib/format-date')
const style = require('../shared/style')
const header = require('../shared/header')
const helpers = require('../shared/helpers')
const watermark = require('../shared/watermark')

module.exports = ({ metadata, content }) => {
  const document = metadata.document || {}
  const info = metadata.info || {}

  const infoFields = []
  const appendInfo = (field, title, parseField) => {
    if (field) {
      infoFields.push({
        title,
        field: (parseField && typeof (parseField) === 'function' ? parseField(field) : field)
      })
    }
  }

  appendInfo(info['our-date'] || new Date(), 'Vår dato', formatDate)
  appendInfo(info['your-date'], 'Dykkar dato', formatDate)
  appendInfo(info['our-reference'], 'Vår referanse')
  appendInfo(info['your-reference'], 'Dykkar referanse')
  appendInfo(info['our-caseworker'], 'Vår saksbehandlar')
  appendInfo(info.paragraph, 'Unnateke offentlegheit')

  const defintion = {
    pageSize: 'A4',
    pageOrientation: 'portrait',
    pageMargins: [65, 175, 65, 70],
    info: {
      title: document.title,
      author: document.author,
      subject: document.subject,
      keywords: document.keywords
    },
    watermark: watermark(metadata, 'Førehandsvisning'),
    header: { ...header[0], margin: [0, 42, 0, 0], alignment: 'center' },
    content: [
      {
        table: {
          widths: ['50%', '*'],
          body: [
            [
              { text: 'Notat', style: 'noteTitle' },
              { text: `${info.sector || ''}`, style: 'info', bold: true, marginTop: 10 }
            ],
            [
              { text: `${metadata.to ? `Til: ${metadata.to}` : ''}\n${metadata.from ? `Frå: ${metadata.from}` : ''}`, style: 'noteRecipient', marginTop: 15 },
              infoFields.map(info => ({ text: `${info.title}: ${info.field}`, style: 'info' }))
            ]
          ]
        },
        layout: {
          defaultBorder: false,
          paddingLeft: () => 0,
          paddingRight: () => 0,
          paddingTop: () => 0,
          paddingBottom: () => 0
        }
      },
      {
        text: '', marginTop: 80
      },
      content
    ],
    ...style,
    ...helpers
  }

  return defintion
}
