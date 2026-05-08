import { Capabilities } from './components/Capabilities'
import { CopyCommand } from './components/CopyCommand'
import { Examples } from './components/Examples'
import { Feed } from './components/Feed'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Section } from './components/Section'
import { Visualizations } from './components/Visualizations'
import { feed } from './content/feed'
import { about, capabilities, community, docs, examples, footer, hero, shell, visualizations } from './content/site'

export function App() {
  return (
    <div class="site-shell">
      <a href="#main-content" class="skip-link">
        Skip to content
      </a>
      <header class="site-header">
        <div class="site-header__branding">
          <a class="site-brand" href="#top">
            CayleyPy
          </a>
          <p class="site-header__tag">{shell.tagline}</p>
        </div>

        <nav class="site-nav" aria-label="Primary navigation">
          <ul>
            {shell.navItems.map((item) => (
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

      <main id="main-content" class="site-main">
        <Hero {...hero} />

        <Section id="about" eyebrow={about.eyebrow} title={about.title} intro={about.intro}>
          <div class="two-column">
            <div class="prose-stack markdown-copy" dangerouslySetInnerHTML={{ __html: about.bodyHtml }} />
            <aside class="note-panel">
              <p class="note-panel__label">{about.noteLabel}</p>
              <div class="markdown-copy" dangerouslySetInnerHTML={{ __html: about.noteHtml }} />
            </aside>
          </div>
        </Section>

        <Capabilities content={capabilities} />
        <Examples content={examples} />
        <Visualizations content={visualizations} />

        <Section id="docs" eyebrow={docs.eyebrow} title={docs.title} intro={docs.intro}>
          <div class="resource-layout">
            <article class="install-card">
              <p class="install-card__label">{docs.installLabel}</p>
              <h3>{docs.installTitle}</h3>
              <div class="install-card__commands">
                {docs.installCommands.map((command) => (
                  <CopyCommand command={command} key={command} />
                ))}
              </div>
            </article>

            <div class="resource-list">
              {docs.links.map((link) => (
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

        <Feed content={feed} />

        <Section id="community" eyebrow={community.eyebrow} title={community.title} intro={community.intro}>
          <div class="resource-list resource-list--three-up">
            {community.links.map((link) => (
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

      <Footer eyebrow={footer.eyebrow} note={footer.note} links={footer.links} />
    </div>
  )
}
