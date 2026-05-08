import type { VisualizationSectionContent } from '../content/site'
import { Section } from './Section'

type VisualizationsProps = {
  content: VisualizationSectionContent
}

export function Visualizations({ content }: VisualizationsProps) {
  return (
    <Section id="visualizations" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <div class="resource-list resource-list--three-up">
        {content.items.map((item) => (
          <article class="resource-card" key={item.title}>
            <p class="feature-card__meta">{item.meta}</p>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <a href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined}>
              {item.linkLabel}
            </a>
          </article>
        ))}
      </div>
    </Section>
  )
}
