import { parseMarkdownDocument, renderMarkdown } from './markdown'
import aboutSource from './sections/about.md?raw'
import capabilitiesSource from './sections/capabilities.md?raw'
import communitySource from './sections/community.md?raw'
import docsSource from './sections/docs.md?raw'
import examplesSource from './sections/examples.md?raw'
import heroSource from './sections/hero.md?raw'
import shellSource from './sections/shell.md?raw'

export type NavItem = {
  label: string
  href: string
  external?: boolean
}

export type CallToAction = {
  label: string
  href: string
  external?: boolean
  emphasis: 'primary' | 'secondary'
}

export type Signal = {
  label: string
  value: string
  detail: string
}

export type Capability = {
  title: string
  description: string
}

export type Example = {
  title: string
  summary: string
  href: string
  meta: string
  external?: boolean
  linkLabel?: string
}

export type ResourceLink = {
  title: string
  summary: string
  href: string
}

export type ShellContent = {
  tagline: string
  footerEyebrow: string
  footerNote: string
  navItems: NavItem[]
  footerLinks: ResourceLink[]
}

export type HeroContent = {
  eyebrow: string
  title: string
  summary: string
  supportingText: string
  ctas: CallToAction[]
  signals: Signal[]
}

export type AboutContent = {
  eyebrow: string
  title: string
  intro: string
  noteLabel: string
  noteHtml: string
  bodyHtml: string
}

export type CapabilitySectionContent = {
  eyebrow: string
  title: string
  intro: string
  items: Capability[]
}

export type ExampleSectionContent = {
  eyebrow: string
  title: string
  intro: string
  items: Example[]
}

export type DocsContent = {
  eyebrow: string
  title: string
  intro: string
  installLabel: string
  installTitle: string
  installCommands: string[]
  links: ResourceLink[]
}

export type CommunityContent = {
  eyebrow: string
  title: string
  intro: string
  links: ResourceLink[]
}

type AboutFrontmatter = {
  eyebrow: string
  title: string
  intro: string
  noteLabel: string
  noteText: string
}

const shellDocument = parseMarkdownDocument<ShellContent>(shellSource)
const heroDocument = parseMarkdownDocument<HeroContent>(heroSource)
const aboutDocument = parseMarkdownDocument<AboutFrontmatter>(aboutSource)
const capabilitiesDocument = parseMarkdownDocument<CapabilitySectionContent>(capabilitiesSource)
const examplesDocument = parseMarkdownDocument<ExampleSectionContent>(examplesSource)
const docsDocument = parseMarkdownDocument<DocsContent>(docsSource)
const communityDocument = parseMarkdownDocument<CommunityContent>(communitySource)

export const shell = shellDocument.data
export const hero = heroDocument.data
export const about: AboutContent = {
  eyebrow: aboutDocument.data.eyebrow,
  title: aboutDocument.data.title,
  intro: aboutDocument.data.intro,
  noteLabel: aboutDocument.data.noteLabel,
  noteHtml: renderMarkdown(aboutDocument.data.noteText),
  bodyHtml: aboutDocument.html,
}
export const capabilities = capabilitiesDocument.data
export const examples = examplesDocument.data
export const docs = docsDocument.data
export const community = communityDocument.data
export const footer = {
  eyebrow: shell.footerEyebrow,
  note: shell.footerNote,
  links: shell.footerLinks,
}
