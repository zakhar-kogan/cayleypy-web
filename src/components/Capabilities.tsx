import type { Capability } from '../content/site'
import { Section } from './Section'

type CapabilitiesProps = {
  items: Capability[]
}

export function Capabilities({ items }: CapabilitiesProps) {
  return (
    <Section
      id="capabilities"
      eyebrow="Capabilities"
      title="Search, sample, benchmark, and learn on top of graph structure."
      intro="The library is opinionated about the kinds of problems it serves: generator-defined graphs, large state spaces, and workflows that need more than one-off scripts."
    >
      <div class="card-grid">
        {items.map((item) => (
          <article class="feature-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
