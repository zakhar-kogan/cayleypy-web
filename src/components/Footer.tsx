import type { ResourceLink } from '../content/site'

type FooterProps = {
  eyebrow: string
  note: string
  links: ResourceLink[]
}

export function Footer({ eyebrow, note, links }: FooterProps) {
  return (
    <footer class="site-footer">
      <div>
        <p class="section__eyebrow">{eyebrow}</p>
        <p class="site-footer__note">{note}</p>
      </div>
      <ul class="site-footer__links">
        {links.map((link) => (
          <li key={link.title}>
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span>{link.title}</span>
              <small>{link.summary}</small>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
