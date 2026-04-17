import type { FeedItem } from '../content/feed'
import { Section } from './Section'

type FeedProps = {
  items: FeedItem[]
}

export function Feed({ items }: FeedProps) {
  return (
    <Section
      id="research"
      eyebrow="Research / News"
      title="A manual feed for papers, docs, benchmarks, and notable notebooks."
      intro="Version one keeps the feed simple: a curated list of links in the repo, ordered on purpose rather than scraped automatically."
      className="section--feed"
    >
      <ol class="feed-list">
        {items.map((item) => (
          <li class="feed-item" key={`${item.date}-${item.title}`}>
            <div class="feed-item__meta">
              <p class="feed-item__date">{item.date}</p>
              <span class="feed-item__kind">{item.kind}</span>
            </div>
            <div class="feed-item__body">
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <a href={item.href} target="_blank" rel="noreferrer">
                Read more
              </a>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
