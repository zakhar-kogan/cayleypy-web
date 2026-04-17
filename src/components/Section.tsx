import type { ComponentChildren } from 'preact'

type SectionProps = {
  id?: string
  eyebrow?: string
  title: string
  intro?: string
  className?: string
  children: ComponentChildren
}

export function Section({ id, eyebrow, title, intro, className, children }: SectionProps) {
  return (
    <section id={id} class={className ? `section ${className}` : 'section'}>
      <div class="section__header">
        {eyebrow ? <p class="section__eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {intro ? <p class="section__intro">{intro}</p> : null}
      </div>
      {children}
    </section>
  )
}
