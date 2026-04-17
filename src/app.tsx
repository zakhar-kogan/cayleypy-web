import { Capabilities } from './components/Capabilities'
import { Examples } from './components/Examples'
import { Feed } from './components/Feed'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Section } from './components/Section'
import { feedItems } from './content/feed'
import {
  about,
  capabilities,
  communityLinks,
  docsLinks,
  examples,
  footerLinks,
  hero,
  installCommands,
  navItems,
} from './content/site'

export function App() {
  return (
    <div class="site-shell">
      <header class="site-header">
        <div class="site-header__branding">
          <a class="site-brand" href="#top">
            CayleyPy
          </a>
          <p class="site-header__tag">Large-graph workflows for Cayley and Schreier research.</p>
        </div>

        <nav class="site-nav" aria-label="Primary navigation">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main class="site-main">
        <Hero {...hero} />

        <Section
          id="about"
          eyebrow={about.eyebrow}
          title={about.title}
          intro="CayleyPy is built for the moment when the graph definition is compact, but the graph itself is too large to store outright."
        >
          <div class="two-column">
            <div class="prose-stack">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <aside class="note-panel">
              <p class="note-panel__label">Why this matters</p>
              <p>
                State-transition systems, permutation groups, matrix groups, and puzzles routinely explode past
                adjacency-list scale. CayleyPy keeps the algebraic structure visible so analysis and search can stay
                honest about that scale.
              </p>
            </aside>
          </div>
        </Section>

        <Capabilities items={capabilities} />
        <Examples items={examples} />

        <Section
          id="docs"
          eyebrow="Docs / Installation"
          title="Start from published docs, install quickly, then go deeper in notebooks and source."
          intro="This site stays intentionally lightweight. The canonical technical detail lives in the Python repository and its published API documentation."
        >
          <div class="resource-layout">
            <article class="install-card">
              <p class="install-card__label">Install</p>
              <h3>Use the latest GitHub build or the published package.</h3>
              <div class="install-card__commands">
                {installCommands.map((command) => (
                  <code key={command}>{command}</code>
                ))}
              </div>
            </article>

            <div class="resource-list">
              {docsLinks.map((link) => (
                <article class="resource-card" key={link.title}>
                  <h3>{link.title}</h3>
                  <p>{link.summary}</p>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    Open resource
                  </a>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Feed items={feedItems} />

        <Section
          id="community"
          eyebrow="Community / Contribute"
          title="The project is open, research-driven, and easiest to engage through the main repository."
          intro="For version one, the site points directly to the existing public surfaces instead of creating new community infrastructure here."
        >
          <div class="resource-list resource-list--three-up">
            {communityLinks.map((link) => (
              <article class="resource-card" key={link.title}>
                <h3>{link.title}</h3>
                <p>{link.summary}</p>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {link.href.startsWith('http') ? 'Open link' : 'Jump to section'}
                </a>
              </article>
            ))}
          </div>
        </Section>
      </main>

      <Footer links={footerLinks} />
    </div>
  )
}
