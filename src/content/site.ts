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
}

export type ResourceLink = {
  title: string
  summary: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#top' },
  { label: 'Research / News', href: '#research' },
  { label: 'Examples', href: '#examples' },
  {
    label: 'Docs',
    href: 'https://cayleypy.github.io/cayleypy-docs/api.html',
    external: true,
  },
  { label: 'GitHub', href: 'https://github.com/cayleypy/cayleypy', external: true },
]

export const hero = {
  eyebrow: 'CayleyPy',
  title: 'Study Cayley and Schreier graphs at scales too large to enumerate.',
  summary:
    'CayleyPy is a Python library for exploring massive state-transition graphs with graph search, random walks, embeddings, and ML-assisted pathfinding workflows.',
  supportingText:
    'It packages research-grade graph tooling into a notebook-friendly workflow for puzzles, algebraic structures, and other systems where the graph exists conceptually long before it fits in memory.',
  ctas: [
    {
      label: 'View on GitHub',
      href: 'https://github.com/cayleypy/cayleypy',
      external: true,
      emphasis: 'primary',
    },
    {
      label: 'Read the API docs',
      href: 'https://cayleypy.github.io/cayleypy-docs/api.html',
      external: true,
      emphasis: 'secondary',
    },
    {
      label: 'Browse notebooks',
      href: '#examples',
      emphasis: 'secondary',
    },
  ] as CallToAction[],
  signals: [
    {
      label: 'Problem space',
      value: 'Extremely large graphs',
      detail: 'Built for graphs that cannot be precomputed, stored, or traversed with ordinary adjacency-list workflows.',
    },
    {
      label: 'Core focus',
      value: 'Cayley and Schreier workflows',
      detail: 'Model generators, state transitions, and subgroup structure directly instead of flattening them into generic graph plumbing.',
    },
    {
      label: 'Practical surface area',
      value: 'Docs, notebooks, benchmarks',
      detail: 'API documentation and Kaggle notebooks make the library usable before you need to read internal implementation details.',
    },
  ] as Signal[],
}

export const about = {
  eyebrow: 'What it is',
  title: 'A graph research toolkit for problems where brute-force enumeration is not an option.',
  paragraphs: [
    'CayleyPy starts from the reality that many interesting graphs are easier to define than to materialize. Puzzle state spaces, permutation groups, and matrix groups quickly grow beyond what standard graph tooling can store outright.',
    'Instead of asking you to build the whole graph first, CayleyPy keeps the generating structure explicit so you can search, sample, benchmark, and learn on top of the graph you actually care about.',
  ],
}

export const capabilities: Capability[] = [
  {
    title: 'Search local structure efficiently',
    description: 'Run BFS, beam search, and focused subgraph exploration when you need concrete neighborhoods or shortest-path style reasoning.',
  },
  {
    title: 'Generate random walks and statistics',
    description: 'Estimate growth, mixing behavior, and related structural signals without pretending the whole graph should exist in memory.',
  },
  {
    title: 'Work with embeddings and spectra',
    description: 'Move from raw generators to spectral or geometric analysis when the problem calls for a richer view than reachability alone.',
  },
  {
    title: 'Plug into ML and RL workflows',
    description: 'Use pretrained predictors, neural-guided beam search, and notebook-first experimentation for pathfinding problems.',
  },
  {
    title: 'Use CPU, GPU, or TPU backends',
    description: 'Target JAX and PyTorch-oriented workflows so heavy experiments can scale beyond a laptop when needed.',
  },
  {
    title: 'Start from concrete graph libraries',
    description: 'Explore permutations, matrix groups, and puzzle-style examples instead of building every domain object from scratch.',
  },
]

export const examples: Example[] = [
  {
    title: 'Basic usage demo',
    summary: 'Define permutation and matrix-group graphs, run BFS, and export explicit NetworkX views for smaller slices.',
    href: 'https://www.kaggle.com/code/fedimser/cayleypy-demo',
    meta: 'Kaggle notebook',
  },
  {
    title: 'Beam search with CayleyPy',
    summary: 'A concise pathfinding example for LRX using beam search and a neural-network predictor.',
    href: 'https://www.kaggle.com/code/fedimser/beam-search-with-cayleypy',
    meta: 'Kaggle notebook',
  },
  {
    title: 'Computing spectra',
    summary: 'Compute spectra of Cayley graphs with the library rather than building bespoke analysis scripts.',
    href: 'https://www.kaggle.com/code/fedimser/computing-spectra-of-cayley-graphs-using-cayleypy',
    meta: 'Kaggle notebook',
  },
  {
    title: 'Benchmark BFS on GPU',
    summary: 'Compare BFS performance on GPU hardware and understand where acceleration is worth the complexity.',
    href: 'https://www.kaggle.com/code/fedimser/benchmark-bfs-in-cayleypy-on-gpu-p100',
    meta: 'Benchmark notebook',
  },
]

export const installCommands = [
  'pip install git+https://github.com/cayleypy/cayleypy',
  'pip install cayleypy',
]

export const docsLinks: ResourceLink[] = [
  {
    title: 'API reference',
    summary: 'Read the latest published API documentation for functions, graphs, and models.',
    href: 'https://cayleypy.github.io/cayleypy-docs/api.html',
  },
  {
    title: 'Source repository',
    summary: 'Browse the Python package, issues, pull requests, and development instructions on GitHub.',
    href: 'https://github.com/cayleypy/cayleypy',
  },
  {
    title: 'Development setup',
    summary: 'Clone the repo and install development extras for linting, tests, docs, and local iteration.',
    href: 'https://raw.githubusercontent.com/cayleypy/cayleypy/main/README.md',
  },
]

export const communityLinks: ResourceLink[] = [
  {
    title: 'Open an issue',
    summary: 'Report bugs, suggest graph additions, or propose new workflows in the main GitHub repository.',
    href: 'https://github.com/cayleypy/cayleypy/issues',
  },
  {
    title: 'Contribute a pull request',
    summary: 'Follow the documented contribution flow and add tests for new graph definitions or models.',
    href: 'https://github.com/cayleypy/cayleypy/pulls',
  },
  {
    title: 'Read the papers',
    summary: 'Use the linked preprints to understand the mathematical and experimental context behind the project.',
    href: '#research',
  },
]

export const footerLinks: ResourceLink[] = [
  {
    title: 'GitHub',
    summary: 'Source code, issue tracker, and releases.',
    href: 'https://github.com/cayleypy/cayleypy',
  },
  {
    title: 'Docs',
    summary: 'Published API reference.',
    href: 'https://cayleypy.github.io/cayleypy-docs/api.html',
  },
  {
    title: 'Examples',
    summary: 'Curated Kaggle notebooks.',
    href: '#examples',
  },
]
