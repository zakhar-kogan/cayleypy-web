import type { ResourceLink } from '../content/site'

type FooterProps = {
  links: ResourceLink[]
}

export function Footer({ links }: FooterProps) {
  return (
    <footer class="site-footer">
      <div>
        <p class="section__eyebrow">CayleyPy</p>
        <p class="site-footer__note">
          Content on this site is curated from the CayleyPy repository, public API docs, linked notebooks,
          and cited research references.
        </p>
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
