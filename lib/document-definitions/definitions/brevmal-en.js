const formatDate = require('../lib/format-date')
const style = require('../shared/style')
const header = require('../shared/header')
const helpers = require('../shared/helpers')
const watermark = require('../shared/watermark')

module.exports = ({ metadata, content }) => {
  const address = metadata.address || {}
  const document = metadata.document || {}
  const info = metadata.info || {}
  const footer = metadata.footer || {}

  const infoFields = []
  const appendInfo = (field, title, parseField) => {
    if (field) {
      infoFields.push({
        title,
        field: (parseField && typeof (parseField) === 'function' ? parseField(field) : field)
      })
    }
  }

  appendInfo(info['our-date'] || new Date(), 'Our date', formatDate)
  appendInfo(info['your-date'], 'Your date', formatDate)
  appendInfo(info['our-reference'], 'Our reference')
  appendInfo(info['your-reference'], 'Your reference')
  appendInfo(info['our-caseworker'], 'Our caseworker')
  appendInfo(info.paragraph, 'Exempted from public disclosure')

  const defintion = {
    pageSize: 'A4',
    pageOrientation: 'portrait',
    pageMargins: [65, 120, 65, 70],
    info: {
      title: document.title,
      author: document.author,
      subject: document.subject,
      keywords: document.keywords
    },
    watermark: watermark(metadata, 'Preview'),
    header,
    content: [
      {
        table: {
          widths: ['50%', '*', '*'],
          body: [
            [
              { text: [address.name, address.street, address.city].filter(text => !!text).join('\n'), style: 'address', rowSpan: 2 },
              { text: `${info.sector || ''}`, style: 'info', bold: true, colSpan: 2, marginTop: 30 },
              ''
            ],
            [
              '',
              infoFields.map(info => ({ text: `${info.title}:`, style: 'info' })),
              infoFields.map(info => ({ text: info.field, style: 'info' }))
            ]
          ]
        },
        layout: {
          defaultBorder: false,
          paddingLeft: () => 0,
          paddingRight: () => 0,
          paddingTop: () => 0,
          paddingBottom: () => 5
        }
      },
      content
    ],
    footer: (page) => ({
      table: {
        widths: [93, 138, 97, 52, 70, 29],
        body: [
          [
            [
              { text: 'Postal address:', style: 'footer', bold: true },
              { text: `${footer['postal-address'] || 'Postboks 2844\n2702 Skien'}`, style: 'footer' }
            ],
            [
              { text: 'Visiting address:', style: 'footer', bold: true },
              { text: `${footer['visiting-address'] || 'Torggata 18, Skien\nSvend Foyns gate 9, Tønsberg'}`, style: 'footer' }
            ],
            [
              { text: 'Contact:', style: 'footer', bold: true },
              { text: `${footer.phone || '35 91 70 00'}`, style: 'footer' },
              { text: `${footer.email || 'post@vtfk.no'}`, style: 'footer' }
            ],
            [
              { text: 'Org. no.:', style: 'footer', bold: true },
              { text: `${footer.orgnr || '821 227 062'}`, style: 'footer' }
            ],
            [
              { text: `${footer.url || 'vtfk.no'}`, style: 'footer', bold: true, alignment: 'right', fontSize: 10 }
            ],
            [
              { text: footer['page-numbers'] === false ? '' : page, style: 'pagenumber' }
            ]
          ]
        ]
      },
      layout: {
        defaultBorder: false,
        paddingLeft: () => 0,
        paddingRight: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0
      },
      margin: [65, 5, 65, 0]
    }),
    ...style,
    ...helpers
  }

  return defintion
}
