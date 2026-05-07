import { useState } from 'preact/hooks'
import type { FeedContent } from '../content/feed'
import { Section } from './Section'

type FeedProps = {
  content: FeedContent
}

const COLLAPSED_COUNT = 5

export function Feed({ content }: FeedProps) {
  const [expanded, setExpanded] = useState(false)
  const items = expanded ? content.items : content.items.slice(0, COLLAPSED_COUNT)
  const hasMore = content.items.length > COLLAPSED_COUNT

  return (
    <Section id="research" eyebrow={content.eyebrow} title={content.title} className="section--feed">
      <ol class="feed-list">
        {items.map((item) => (
          <li class="feed-item" key={`${item.kind}-${item.title}`}>
            <div class="feed-item__meta">
              <p class="feed-item__stamp">{item.meta}</p>
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
      {hasMore && (
        <button type="button" class="feed-toggle" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
          {expanded ? 'Show less' : `Show all ${content.items.length} items`}
        </button>
      )}
    </Section>
  )
}
