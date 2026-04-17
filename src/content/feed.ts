export type FeedKind = 'research' | 'docs' | 'notebook' | 'benchmark' | 'competition'

export type FeedItem = {
  meta: string
  kind: FeedKind
  title: string
  summary: string
  href: string
}

export const feedItems: FeedItem[] = [
  {
    meta: '2025-09',
    kind: 'research',
    title: 'New preprint extends the project\'s research arc',
    summary:
      'The CayleyPy credits now reference a September 2025 arXiv preprint that continues the project\'s work on large-graph computation and puzzle-oriented experiments.',
    href: 'https://arxiv.org/abs/2509.19162',
  },
  {
    meta: '2025-02',
    kind: 'research',
    title: 'Foundational papers connect group growth and practical computation',
    summary:
      'Two February 2025 preprints anchor the project\'s mathematical direction, from growth computations in finite groups to the broader CayleyPy framing.',
    href: 'https://arxiv.org/abs/2502.18663',
  },
  {
    meta: '2025-02',
    kind: 'research',
    title: 'Growth computations paper remains a key entry point',
    summary:
      'The growth-in-finite-groups preprint is still the clearest bridge between abstract structure and the kinds of computations the library targets.',
    href: 'https://arxiv.org/abs/2502.13266',
  },
  {
    meta: 'API reference',
    kind: 'docs',
    title: 'API docs are published on GitHub Pages',
    summary:
      'The project maintains a public API reference, making the library approachable without requiring readers to mine the Python package source first.',
    href: 'https://cayleypy.github.io/cayleypy-docs/api.html',
  },
  {
    meta: 'Kaggle notebook',
    kind: 'notebook',
    title: 'Neural-guided beam search notebooks show practical pathfinding workflows',
    summary:
      'Kaggle examples demonstrate how CayleyPy connects classical search with learned predictors on concrete LRX problems.',
    href: 'https://www.kaggle.com/code/fedimser/solve-lrx-binary-with-cayleypy',
  },
  {
    meta: 'Kaggle benchmark',
    kind: 'benchmark',
    title: 'GPU BFS benchmarks document performance trade-offs',
    summary:
      'Benchmark notebooks compare BFS implementations and make the cost model visible before you invest in larger experiments.',
    href: 'https://www.kaggle.com/code/fedimser/benchmark-bfs-in-cayleypy-on-gpu-p100',
  },
  {
    meta: 'Graph size ~10^55',
    kind: 'competition',
    title: '4x4x4 Cube competition',
    summary:
      'A Kaggle competition focused on solving 4x4x4 Rubik\'s cube instances in a state space the README describes at roughly 10^55 positions.',
    href: 'https://www.kaggle.com/competitions/cayley-py-444-cube/',
  },
  {
    meta: 'Graph size ~10^92',
    kind: 'competition',
    title: '5x5x5 Cube competition',
    summary:
      'A Kaggle competition centered on 5x5x5 Rubik\'s cube search, scaling the same problem family to a much larger state space.',
    href: 'https://www.kaggle.com/competitions/cayley-py-555-cube/',
  },
  {
    meta: 'Graph size ~10^150',
    kind: 'competition',
    title: '6x6x6 Cube competition',
    summary:
      'A Kaggle competition for 6x6x6 Rubik\'s cube instances, representing one of the largest cube-search tasks listed in the README table.',
    href: 'https://www.kaggle.com/competitions/cayley-py-666-cube/',
  },
  {
    meta: 'Graph size ~10^210',
    kind: 'competition',
    title: '7x7x7 Cube competition',
    summary:
      'A Kaggle competition for 7x7x7 Rubik\'s cube search, pushing the cube series to the largest graph size named in the README.',
    href: 'https://www.kaggle.com/competitions/cayley-py-777-cube/',
  },
  {
    meta: 'Graph size ~10^16',
    kind: 'competition',
    title: "Christopher's Jewel competition",
    summary:
      'A Kaggle competition built around Christopher\'s Jewel, the small octahedron-shaped puzzle listed in the CayleyPy README.',
    href: 'https://www.kaggle.com/competitions/cayleypy-christophers-jewel/',
  },
  {
    meta: 'Graph size ~10^69',
    kind: 'competition',
    title: 'Megaminx competition',
    summary:
      'A Kaggle competition for the dodecahedron-shaped Megaminx puzzle, extending the feed beyond cube-only search problems.',
    href: 'https://www.kaggle.com/competitions/cayley-py-megaminx',
  },
  {
    meta: 'Graph size ~10^32',
    kind: 'competition',
    title: 'Professor Tetraminx competition',
    summary:
      'A Kaggle competition for the medium-sized Professor Tetraminx puzzle, which the README describes as a tetrahedron-shaped problem.',
    href: 'https://www.kaggle.com/competitions/cayley-py-professor-tetraminx-solve-optimally',
  },
  {
    meta: 'Graph size ~10^24',
    kind: 'competition',
    title: 'IHES Supercube competition',
    summary:
      'A Kaggle competition for IHES Supercube, a Rubik\'s-cube variant with oriented faces called out explicitly in the README table.',
    href: 'https://www.kaggle.com/competitions/cayleypy-ihes-cube',
  },
  {
    meta: 'Graph size TBA',
    kind: 'competition',
    title: 'RapaportM2 competition',
    summary:
      'A Kaggle competition for the RapaportM2 puzzle family, summarized in the README as a pair-swaps problem.',
    href: 'https://www.kaggle.com/competitions/cayleypy-rapapport-m2/',
  },
  {
    meta: 'Graph size ~10^8 to ~10^158',
    kind: 'competition',
    title: 'Transposons competition',
    summary:
      'A Kaggle competition for substring-transposition problems, spanning a wide range of graph sizes in the README.',
    href: 'https://www.kaggle.com/competitions/cayleypy-transposons/',
  },
  {
    meta: 'Graph size ~10^8 to ~10^64',
    kind: 'competition',
    title: 'Reversals competition',
    summary:
      'A Kaggle competition built around substring reversals, complementing the transposition-style search tasks in the same README section.',
    href: 'https://www.kaggle.com/competitions/cayleypy-reversals',
  },
  {
    meta: 'Graph size TBA',
    kind: 'competition',
    title: 'Pancake sorting competition',
    summary:
      'A Kaggle competition for prefix-reversal search, directly aligned with the pancake-sorting family already familiar in Cayley-graph examples.',
    href: 'https://www.kaggle.com/competitions/CayleyPy-pancake',
  },
  {
    meta: 'Graph size TBA',
    kind: 'competition',
    title: "Glushkov's problem competition",
    summary:
      'A Kaggle competition for a move system combining left shifts with first-two-element transpositions, as described in the README.',
    href: 'https://www.kaggle.com/competitions/cayleypy-glushkov/',
  },
  {
    meta: '2023-12',
    kind: 'competition',
    title: 'Santa 2023 prototype work seeded the public project',
    summary:
      'The README credits Kaggle Santa 2023 discussions and prototypes as an early proving ground for ideas that later became CayleyPy.',
    href: 'https://www.kaggle.com/competitions/santa-2023/discussion/466399',
  },
]
