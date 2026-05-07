import { parseMarkdownDocument } from './markdown'
import feedSource from './sections/feed.md?raw'

export type FeedKind = 'research' | 'docs' | 'notebook' | 'benchmark' | 'competition'

export type FeedItem = {
  meta: string
  kind: FeedKind
  title: string
  summary: string
  href: string
}

export type FeedContent = {
  eyebrow: string
  title: string
  items: FeedItem[]
}

const feedDocument = parseMarkdownDocument<FeedContent>(feedSource)

export const feed = feedDocument.data
export const feedItems = feed.items
