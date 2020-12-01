const Handlebars = require('handlebars')
const htmlToPdfMake = require('html-to-pdfmake')
const jsdom = require('jsdom')
const getDefinition = require('@vtfk/document-definitions')
const { JSDOM } = jsdom
const { window } = new JSDOM('')
const parseMarkdown = require('./parse-markdown')
const helpers = require('./helpers')

/**
 * Generates document from template and data
 * @param {object} elements
 * @param {string} elements.template String of handlebars template
 * @param {object} elements.data Dataobject
 * @returns {object} Documentdefinition ready for pdfMake
 */

function buildDocument (elements) {
  const { template, data } = elements

  Handlebars.registerHelper(helpers)
  const templateGenerator = Handlebars.compile(template)
  const markdown = templateGenerator(data)

  const { html, metadata } = parseMarkdown(markdown)
  const [definition, defaultStyles] = getDefinition(metadata.definition, metadata.language)
  const content = htmlToPdfMake(html, { window: window, defaultStyles })
  const document = definition({ metadata, data, content })
  return document
}

module.exports = buildDocument
