import { useEffect, useState } from 'react'

type NodeId = 'econ' | 'math' | 'code' | 'data' | 'fin' | 'ven'

const NODES: { id: NodeId; label: string; x: number; y: number; center?: boolean }[] = [
  { id: 'econ', label: 'Economics', x: 210, y: 40 },
  { id: 'math', label: 'Mathematics', x: 380, y: 150 },
  { id: 'code', label: 'Code', x: 340, y: 340 },
  { id: 'data', label: 'Data', x: 80, y: 340 },
  { id: 'fin', label: 'Finance', x: 40, y: 150 },
  { id: 'ven', label: 'Ventures', x: 210, y: 210, center: true },
]

const EDGES: [NodeId, NodeId][] = [
  ['econ', 'ven'],
  ['math', 'ven'],
  ['code', 'ven'],
  ['data', 'ven'],
  ['fin', 'ven'],
  ['econ', 'math'],
  ['math', 'code'],
  ['code', 'data'],
  ['data', 'fin'],
  ['fin', 'econ'],
]

const byId = Object.fromEntries(NODES.map((n) => [n.id, n]))

export default function NetworkDiagram() {
  const [drawn, setDrawn] = useState(false)
  const [hovered, setHovered] = useState<NodeId | null>(null)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setDrawn(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  const isEdgeActive = (a: NodeId, b: NodeId) =>
    hovered !== null && (hovered === a || hovered === b)

  return (
    <div className="relative aspect-square max-w-[460px] mx-auto">
      <svg viewBox="0 0 420 420" className="w-full h-full" aria-hidden="true">
        {EDGES.map(([a, b], i) => {
          const na = byId[a]
          const nb = byId[b]
          const active = isEdgeActive(a, b)
          return (
            <line
              key={`${a}-${b}`}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke={active ? 'var(--color-blue)' : 'var(--color-line)'}
              strokeWidth={1}
              fill="none"
              style={{
                strokeDasharray: 320,
                strokeDashoffset: drawn ? 0 : 320,
                transition: `stroke-dashoffset 1.4s ease ${i * 90}ms, stroke 0.3s ease`,
              }}
            />
          )
        })}
        {NODES.map((n) => (
          <g
            key={n.id}
            onMouseEnter={() => setHovered(n.id)}
            onMouseLeave={() => setHovered(null)}
            className="cursor-default"
          >
            <circle
              cx={n.x}
              cy={n.y}
              r={n.center ? 30 : 24}
              fill="var(--color-bg-raised)"
              stroke={hovered === n.id ? 'var(--color-blue)' : 'var(--color-line-strong)'}
              strokeWidth={1.2}
              style={{ transition: 'stroke 0.3s ease' }}
            />
            <text
              x={n.x}
              y={n.y + 4}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize={11}
              fill="var(--color-ink-dim)"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
