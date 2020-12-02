const yamlFront = require('yaml-front-matter')
const MarkdownIt = require('markdown-it')
const mdfm = require('markdown-it-front-matter')

function parseFrontMatter (data) {
  const { __content, ...fm } = yamlFront.loadFront(`---\n${data}\n---`)
  return fm
}

/**
 * Extracts metadata from frontmatter and returns an object with metadata and converted markdown
 * @param {string} markdown
 * @returns {object} { html, metadata }
 */

function parseMarkdown (markdown) {
  let metadata = {}
  const md = new MarkdownIt({
    html: true,
    xhtmlOut: true
  }).use(mdfm, meta => {
    metadata = parseFrontMatter(meta)
  })

  const html = md.render(markdown).trim()
  return {
    metadata,
    html
  }
}

module.exports = parseMarkdown
