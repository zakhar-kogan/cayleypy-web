import type { Example } from '../content/site'
import { Section } from './Section'

type ExamplesProps = {
  items: Example[]
}

export function Examples({ items }: ExamplesProps) {
  return (
    <Section
      id="examples"
      eyebrow="Examples"
      title="A small set of notebooks is enough to see the library's shape."
      intro="CayleyPy already has a strong examples footprint. These notebooks are the fastest way to understand the package without absorbing the full codebase at once."
    >
      <div class="card-grid card-grid--compact">
        {items.map((item) => (
          <article class="feature-card feature-card--link" key={item.title}>
            <p class="feature-card__meta">{item.meta}</p>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <a href={item.href} target="_blank" rel="noreferrer">
              Open notebook
            </a>
          </article>
        ))}
      </div>
    </Section>
  )
}
