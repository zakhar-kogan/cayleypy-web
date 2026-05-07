import { useEffect, useRef } from 'preact/hooks'

// ─── Graph topology: 3-ring Cayley-like graph ───────────────────────────────
// Center (1) + inner ring (6) + middle ring (12) + outer ring (18) = 37 nodes

type Point = [number, number]

const CX = 150
const CY = 150
const RINGS = [0, 46, 92, 138] // radii: center, inner, middle, outer
const RING_COUNTS = [1, 6, 12, 18]

function buildGraph() {
  const nodes: Point[] = []
  const edges: [number, number][] = []
  const adj: number[][] = []

  // Generate node positions
  // Ring 0: center
  nodes.push([CX, CY])

  // Ring 1-3: evenly spaced on circles
  for (let ring = 1; ring < RINGS.length; ring++) {
    const count = RING_COUNTS[ring]
    const r = RINGS[ring]
    const offset = ring % 2 === 0 ? Math.PI / count : 0
    for (let i = 0; i < count; i++) {
      const angle = (2 * Math.PI * i) / count + offset - Math.PI / 2
      nodes.push([CX + r * Math.cos(angle), CY + r * Math.sin(angle)])
    }
  }

  // Initialize adjacency
  for (let i = 0; i < nodes.length; i++) adj.push([])

  const addEdge = (a: number, b: number) => {
    if (a === b) return
    if (adj[a].includes(b)) return
    edges.push([a, b])
    adj[a].push(b)
    adj[b].push(a)
  }

  // Center to inner ring
  const innerStart = 1
  for (let i = 0; i < RING_COUNTS[1]; i++) {
    addEdge(0, innerStart + i)
  }

  // Inner ring cycle
  for (let i = 0; i < RING_COUNTS[1]; i++) {
    addEdge(innerStart + i, innerStart + ((i + 1) % RING_COUNTS[1]))
  }

  // Inner to middle ring (each inner node connects to 2 middle nodes)
  const midStart = innerStart + RING_COUNTS[1]
  for (let i = 0; i < RING_COUNTS[1]; i++) {
    addEdge(innerStart + i, midStart + i * 2)
    addEdge(innerStart + i, midStart + i * 2 + 1)
  }

  // Middle ring cycle
  for (let i = 0; i < RING_COUNTS[2]; i++) {
    addEdge(midStart + i, midStart + ((i + 1) % RING_COUNTS[2]))
  }

  // Middle to outer ring (each middle node connects to ~1-2 outer nodes)
  const outerStart = midStart + RING_COUNTS[2]
  for (let i = 0; i < RING_COUNTS[2]; i++) {
    // Each middle node connects to the nearest outer node and one offset
    const base = Math.floor((i * RING_COUNTS[3]) / RING_COUNTS[2])
    addEdge(midStart + i, outerStart + (base % RING_COUNTS[3]))
    addEdge(midStart + i, outerStart + ((base + 1) % RING_COUNTS[3]))
  }

  // Outer ring cycle
  for (let i = 0; i < RING_COUNTS[3]; i++) {
    addEdge(outerStart + i, outerStart + ((i + 1) % RING_COUNTS[3]))
  }

  return { nodes, edges, adj }
}

const GRAPH = buildGraph()
const ANIM_DURATION = 5000
const MIN_STEPS = 12
const MAX_STEPS = 22

/** Self-avoiding random walk on the graph. Starts at center, walks outward. */
function generateWalk(): number[] {
  for (let attempt = 0; attempt < 30; attempt++) {
    const path: number[] = [0] // start at center
    const visited = new Set<number>([0])

    for (let step = 0; step < MAX_STEPS; step++) {
      const current = path[path.length - 1]
      const candidates = GRAPH.adj[current].filter((n) => !visited.has(n))

      if (candidates.length === 0) break // dead end

      // Bias toward outer nodes for visual interest
      const weighted = candidates.flatMap((c) => {
        const [cx, cy] = GRAPH.nodes[c]
        const dist = Math.sqrt((cx - CX) ** 2 + (cy - CY) ** 2)
        return dist > 60 ? [c, c] : [c]
      })

      const next = weighted[Math.floor(Math.random() * weighted.length)]
      path.push(next)
      visited.add(next)
    }

    if (path.length >= MIN_STEPS) return path
  }

  // Fallback: short walk from center
  return [0, 1, 2, 3]
}

function walkToSvgPath(walk: number[]): string {
  return walk
    .map((nodeIdx, i) => {
      const [x, y] = GRAPH.nodes[nodeIdx]
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')
}

function pathLength(walk: number[]): number {
  let len = 0
  for (let i = 1; i < walk.length; i++) {
    const [x1, y1] = GRAPH.nodes[walk[i - 1]]
    const [x2, y2] = GRAPH.nodes[walk[i]]
    len += Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
  }
  return len
}

export function HeroVisual() {
  const pathRef = useRef<SVGPathElement>(null)
  const headRef = useRef<SVGCircleElement>(null)
  const timerRef = useRef<number>(0)

  const regenerate = () => {
    const walk = generateWalk()
    const d = walkToSvgPath(walk)
    const len = pathLength(walk)

    const path = pathRef.current
    const head = headRef.current
    if (!path || !head) return

    path.setAttribute('d', d)
    path.style.strokeDasharray = `${len}`
    path.style.strokeDashoffset = `${len}`

    const endNode = GRAPH.nodes[walk[walk.length - 1]]
    head.setAttribute('cx', `${endNode[0].toFixed(1)}`)
    head.setAttribute('cy', `${endNode[1].toFixed(1)}`)

    path.animate(
      [
        { strokeDashoffset: len, opacity: 0.6 },
        { strokeDashoffset: 0, opacity: 0.6, offset: 0.65 },
        { strokeDashoffset: 0, opacity: 0, offset: 0.88 },
        { strokeDashoffset: len, opacity: 0 },
      ],
      { duration: ANIM_DURATION, easing: 'ease-in-out' },
    )

    head.animate(
      [
        { opacity: 0 },
        { opacity: 0, offset: 0.55 },
        { opacity: 0.8, offset: 0.65 },
        { opacity: 0.8, offset: 0.88 },
        { opacity: 0 },
      ],
      { duration: ANIM_DURATION, easing: 'ease-in-out' },
    )
  }

  useEffect(() => {
    regenerate()
    timerRef.current = window.setInterval(regenerate, ANIM_DURATION)
    return () => window.clearInterval(timerRef.current)
  }, [])

  return (
    <div class="hero-visual" aria-hidden="true">
      <svg viewBox="0 0 300 300" class="hero-visual__svg">
        <title>Cayley graph path animation</title>
        {/* Graph edges */}
        <g class="hero-visual__edges">
          {GRAPH.edges.map(([a, b]) => (
            <line
              key={`${a}-${b}`}
              x1={GRAPH.nodes[a][0].toFixed(1)}
              y1={GRAPH.nodes[a][1].toFixed(1)}
              x2={GRAPH.nodes[b][0].toFixed(1)}
              y2={GRAPH.nodes[b][1].toFixed(1)}
            />
          ))}
        </g>
        {/* Graph nodes */}
        <g class="hero-visual__nodes">
          {GRAPH.nodes.map(([x, y], i) => (
            <circle
              key={`${x.toFixed(1)}-${y.toFixed(1)}`}
              cx={x.toFixed(1)}
              cy={y.toFixed(1)}
              r={i === 0 ? '3' : '2'}
            />
          ))}
        </g>
        {/* Animated walk */}
        <path ref={pathRef} class="hero-visual__trail" />
        <circle ref={headRef} r="4" class="hero-visual__head" />
      </svg>
    </div>
  )
}
