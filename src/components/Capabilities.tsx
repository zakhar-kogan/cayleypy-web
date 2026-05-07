import type { CapabilitySectionContent } from '../content/site'
import { Section } from './Section'

type CapabilitiesProps = {
  content: CapabilitySectionContent
}

export function Capabilities({ content }: CapabilitiesProps) {
  return (
    <Section id="capabilities" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <div class="card-grid">
        {content.items.map((item) => (
          <article class="feature-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
