import type { CallToAction, Signal } from '../content/site'

type HeroProps = {
  eyebrow: string
  title: string
  summary: string
  supportingText: string
  ctas: CallToAction[]
  signals: Signal[]
}

export function Hero({ eyebrow, title, summary, supportingText, ctas, signals }: HeroProps) {
  return (
    <section class="hero" id="top">
      <div class="hero__content">
        <p class="section__eyebrow">{eyebrow}</p>
        <h1 class="hero__title">{title}</h1>
        <p class="hero__summary">{summary}</p>
        <p class="hero__supporting">{supportingText}</p>
        <div class="hero__actions">
          {ctas.map((cta) => (
            <a
              class={`button button--${cta.emphasis}`}
              href={cta.href}
              target={cta.external ? '_blank' : undefined}
              rel={cta.external ? 'noreferrer' : undefined}
              key={cta.label}
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
      <div class="signal-grid" aria-label="Project highlights">
        {signals.map((signal) => (
          <article class="signal-card" key={signal.label}>
            <p class="signal-card__label">{signal.label}</p>
            <p class="signal-card__value">{signal.value}</p>
            <p>{signal.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
