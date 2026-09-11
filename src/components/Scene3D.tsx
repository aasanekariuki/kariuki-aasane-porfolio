/**
 * Scene3D — a rotating node/edge network rendered in real WebGL.
 *
 * Requires:
 *   npm install three @react-three/fiber @react-three/drei
 *
 * This replaces the flat SVG NetworkDiagram with the literal 3D version of
 * the same idea: nodes = people/capital/technology, edges = the systems that
 * connect them. Drag to rotate, scroll untouched (no zoom hijack).
 */
import { useMemo, useRef } from 'react'
import { Canvas, useFrame, type ThreeElements } from '@react-three/fiber'
import { OrbitControls, Line } from '@react-three/drei'
import * as THREE from 'three'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

// Tailwind tokens as raw hex — keep these in sync with tailwind.config.ts
const COLOR_GOLD = '#C9A24B'
const COLOR_BLUE = '#4C6FE0'
const COLOR_SIGNAL = '#4FD1D9'
const COLOR_LINE = '#3A3A3A'

type Node = {
  position: [number, number, number]
  color: string
  size: number
}

function generateNetwork(count: number): { nodes: Node[]; edges: [number, number][] } {
  const nodes: Node[] = []
  const palette = [COLOR_GOLD, COLOR_BLUE, COLOR_SIGNAL]

  for (let i = 0; i < count; i++) {
    // Distribute points roughly on a sphere shell with some jitter, so the
    // whole thing reads as a coherent "system" rather than scattered noise.
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count)
    const theta = Math.PI * (1 + Math.sqrt(5)) * i
    const r = 1.6 + (i % 3) * 0.15

    nodes.push({
      position: [
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ],
      color: palette[i % palette.length],
      size: i % 5 === 0 ? 0.055 : 0.03,
    })
  }

  // Connect each node to its 2 nearest neighbours for a plausible "network"
  // look without an O(n^2) mess of lines.
  const edges: [number, number][] = []
  for (let i = 0; i < nodes.length; i++) {
    const distances = nodes
      .map((n, j) => ({ j, d: j === i ? Infinity : dist(nodes[i].position, n.position) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, 2)
    distances.forEach(({ j }) => {
      const pair: [number, number] = i < j ? [i, j] : [j, i]
      if (!edges.some(([a, b]) => a === pair[0] && b === pair[1])) edges.push(pair)
    })
  }

  return { nodes, edges }
}

function dist(a: [number, number, number], b: [number, number, number]) {
  return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2])
}

function NetworkNode({ node }: { node: Node }) {
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: node.color,
        emissive: node.color,
        emissiveIntensity: 0.4,
        roughness: 0.4,
      }),
    [node.color],
  )

  return (
    <mesh position={node.position}>
      <sphereGeometry args={[node.size, 16, 16]} />
      <primitive object={material} attach="material" />
    </mesh>
  )
}

function Network() {
  const groupRef = useRef<THREE.Group>(null)
  const { nodes, edges } = useMemo(() => generateNetwork(22), [])

  // Slow idle rotation; OrbitControls takes over on drag.
  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.08
  })

  return (
    <group ref={groupRef}>
      {edges.map(([a, b], i) => (
        <Line
          key={i}
          points={[nodes[a].position, nodes[b].position]}
          color={COLOR_LINE}
          lineWidth={1}
          transparent
          opacity={0.5}
        />
      ))}

      {nodes.map((node, i) => (
        <NetworkNode key={i} node={node} />
      ))}
    </group>
  )
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      className="!absolute inset-0 !w-full !h-full"
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight color="#ffffff" intensity={1.2} position={[4, 4, 4]} />
      <Network />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        rotateSpeed={0.5}
      />
    </Canvas>
  )
}
