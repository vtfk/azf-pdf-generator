const parseMarkdown = require('../../lib/parse-markdown')

const frontmatter = `---
hello: World
complex-things:
  level: 1000
  difficulty: hard
---`
const frontmatterObject = {
  hello: 'World',
  'complex-things': {
    level: 1000,
    difficulty: 'hard'
  }
}

const markdown = '# Hi!\n\nWhats up?'
const markdownHtml = '<h1>Hi!</h1>\n<p>Whats up?</p>'

describe('Parse markdown', () => {
  it('doesn\' throw when parsing valid markdown', () => {
    expect(() => parseMarkdown(markdown)).not.toThrow()
  })

  it('parses markdown to correct html', () => {
    const { html } = parseMarkdown(markdown)
    expect(html).toMatch(markdownHtml)
  })

  it('parses frontmatter yaml to correct ocject', () => {
    const { metadata } = parseMarkdown(frontmatter)
    expect(metadata).toEqual(frontmatterObject)
  })

  it('parses returns correct data when metadata and frontmatter is passed together', () => {
    const { html, metadata } = parseMarkdown(`${frontmatter}\n${markdown}`)
    expect(html).toEqual(markdownHtml)
    expect(metadata).toEqual(frontmatterObject)
  })
})
