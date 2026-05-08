import type { ExampleSectionContent } from '../content/site'
import { Section } from './Section'

type ExamplesProps = {
  content: ExampleSectionContent
}

export function Examples({ content }: ExamplesProps) {
  return (
    <Section id="examples" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <div class="card-grid card-grid--compact">
        {content.items.map((item) => (
          <article class="feature-card feature-card--link" key={item.title}>
            <p class="feature-card__meta">{item.meta}</p>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <a href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined}>
              {item.linkLabel ?? 'Open resource'}
            </a>
          </article>
        ))}
      </div>
    </Section>
  )
}
