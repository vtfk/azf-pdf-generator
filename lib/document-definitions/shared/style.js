const style = {
  heading: {
    fontFamily: 'Nunito',
    fontSize: 16,
    bold: true,
    margin: [0, 30, 0, 8]
  },
  subheading: {
    fontFamily: 'Nunito',
    fontSize: 13,
    bold: true,
    margin: [0, 8, 0, 5]
  },
  body: {
    fontFamily: 'Nunito Sans',
    fontSize: 11.5,
    margin: [0, 5, 0, 10]
  },
  url: {
    bold: true,
    textColor: '#005260'
  },
  address: {
    fontFamily: 'Nunito Sans',
    fontSize: 11.5
  },
  info: {
    fontFamily: 'Nunito Sans',
    fontSize: 10,
    alignment: 'right'
  },
  footer: {
    font: 'Nunito Sans',
    fontSize: 8
  },
  pagenumber: {
    font: 'Nunito Sans',
    fontSize: 9,
    bold: true,
    alignment: 'right'
  },
  noteTitle: {
    fontFamily: 'Nunito Sans',
    fontSize: 18,
    bold: true
  },
  noteRecipient: {
    fontFamily: 'Nunito Sans',
    fontSize: 10
  }
}

module.exports = {
  styles: {
    ...style
  },
  defaultStyles: {
    font: 'Nunito Sans',
    fontSize: 11.5
  },
  htmlStyles: {
    p: style.body,
    a: style.url,
    h1: style.heading,
    h2: style.subheading,
    h3: style.subheading,
    h4: style.subheading,
    h5: style.subheading,
    h6: style.subheading
  }
}
