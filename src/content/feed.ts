export type FeedKind = 'research' | 'docs' | 'notebook' | 'benchmark' | 'competition'

export type FeedItem = {
  date: string
  kind: FeedKind
  title: string
  summary: string
  href: string
}

export const feedItems: FeedItem[] = [
  {
    date: '2025-09',
    kind: 'research',
    title: 'New preprint extends the project\'s research arc',
    summary:
      'The CayleyPy credits now reference a September 2025 arXiv preprint that continues the project\'s work on large-graph computation and puzzle-oriented experiments.',
    href: 'https://arxiv.org/abs/2509.19162',
  },
  {
    date: '2025-02',
    kind: 'research',
    title: 'Foundational papers connect group growth and practical computation',
    summary:
      'Two February 2025 preprints anchor the project\'s mathematical direction, from growth computations in finite groups to the broader CayleyPy framing.',
    href: 'https://arxiv.org/abs/2502.18663',
  },
  {
    date: '2025-02',
    kind: 'research',
    title: 'Growth computations paper remains a key entry point',
    summary:
      'The growth-in-finite-groups preprint is still the clearest bridge between abstract structure and the kinds of computations the library targets.',
    href: 'https://arxiv.org/abs/2502.13266',
  },
  {
    date: '2025',
    kind: 'docs',
    title: 'API docs are published on GitHub Pages',
    summary:
      'The project maintains a public API reference, making the library approachable without requiring readers to mine the Python package source first.',
    href: 'https://cayleypy.github.io/cayleypy-docs/api.html',
  },
  {
    date: '2024',
    kind: 'notebook',
    title: 'Neural-guided beam search notebooks show practical pathfinding workflows',
    summary:
      'Kaggle examples demonstrate how CayleyPy connects classical search with learned predictors on concrete LRX problems.',
    href: 'https://www.kaggle.com/code/fedimser/solve-lrx-binary-with-cayleypy',
  },
  {
    date: '2024',
    kind: 'benchmark',
    title: 'GPU BFS benchmarks document performance trade-offs',
    summary:
      'Benchmark notebooks compare BFS implementations and make the cost model visible before you invest in larger experiments.',
    href: 'https://www.kaggle.com/code/fedimser/benchmark-bfs-in-cayleypy-on-gpu-p100',
  },
  {
    date: '2023-12',
    kind: 'competition',
    title: 'Santa 2023 prototype work seeded the public project',
    summary:
      'The README credits Kaggle Santa 2023 discussions and prototypes as an early proving ground for ideas that later became CayleyPy.',
    href: 'https://www.kaggle.com/competitions/santa-2023/discussion/466399',
  },
]
