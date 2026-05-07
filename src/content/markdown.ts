import { marked } from 'marked'
import { parse as parseYaml } from 'yaml'

marked.setOptions({
  gfm: true,
})

const FRONTMATTER_DELIMITER = '---'

export type MarkdownDocument<T> = {
  data: T
  html: string
}

export function renderMarkdown(source: string) {
  const normalized = source.trim()
  return normalized ? (marked.parse(normalized) as string) : ''
}

function splitFrontmatter(source: string) {
  if (!source.startsWith(`${FRONTMATTER_DELIMITER}\n`)) {
    return {
      frontmatter: '',
      content: source,
    }
  }

  const closingDelimiter = `\n${FRONTMATTER_DELIMITER}\n`
  const closingIndex = source.indexOf(closingDelimiter, FRONTMATTER_DELIMITER.length + 1)

  if (closingIndex === -1) {
    throw new Error('Invalid markdown document: missing closing frontmatter delimiter.')
  }

  return {
    frontmatter: source.slice(FRONTMATTER_DELIMITER.length + 1, closingIndex),
    content: source.slice(closingIndex + closingDelimiter.length),
  }
}

export function parseMarkdownDocument<T>(source: string): MarkdownDocument<T> {
  const { frontmatter, content } = splitFrontmatter(source)

  return {
    data: (frontmatter ? parseYaml(frontmatter) : {}) as T,
    html: renderMarkdown(content),
  }
}
