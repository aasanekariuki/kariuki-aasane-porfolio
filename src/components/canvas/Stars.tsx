import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars as DreiStars, Preload } from '@react-three/drei'

/**
 * Procedural starfield — no external textures/models, so it has no asset
 * dependency. Sits behind the hero content, non-interactive.
 */
function Field() {
  return (
    <DreiStars
      radius={80}
      depth={50}
      count={2500}
      factor={2.4}
      saturation={0}
      fade
      speed={0.4}
    />
  )
}

export default function StarsCanvas() {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
      >
        <Suspense fallback={null}>
          <Field />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}
