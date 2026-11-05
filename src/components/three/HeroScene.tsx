import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

/* Palette — mirrors the CSS accent tokens */
const VIOLET = '#8b5cf6';
const INDIGO = '#6366f1';
const CYAN = '#22d3ee';
const EMERALD = '#34d399';

const REDUCED =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Profile photo on a 3D disc ---------- */
function PhotoDisc({ url }: { url: string }) {
  const texture = useLoader(THREE.TextureLoader, url);

  useMemo(() => {
    // Emulate CSS object-fit: cover / object-position: center top
    const img = texture.image as HTMLImageElement;
    if (img?.width && img?.height) {
      const side = Math.min(img.width, img.height);
      texture.repeat.set(side / img.width, side / img.height);
      texture.offset.set((1 - texture.repeat.x) / 2, 1 - texture.repeat.y);
    }
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 8;
  }, [texture]);

  return (
    <group>
      {/* Photo */}
      <mesh>
        <circleGeometry args={[1.28, 96]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
      {/* Gradient-style double border */}
      <mesh>
        <torusGeometry args={[1.31, 0.022, 24, 128]} />
        <meshBasicMaterial color={INDIGO} toneMapped={false} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 3]}>
        <torusGeometry args={[1.37, 0.008, 16, 128]} />
        <meshBasicMaterial
          color={CYAN}
          toneMapped={false}
          transparent
          opacity={0.55}
        />
      </mesh>
      {/* Soft dark backing so rings "disappear" behind the photo */}
      <mesh position={[0, 0, -0.01]}>
        <circleGeometry args={[1.34, 96]} />
        <meshBasicMaterial color={'#0c0c14'} />
      </mesh>
    </group>
  );
}

/* Fallback disc when the photo can't load */
function MonogramDisc() {
  return (
    <group>
      <mesh>
        <circleGeometry args={[1.28, 96]} />
        <meshBasicMaterial color={INDIGO} toneMapped={false} />
      </mesh>
      <mesh>
        <torusGeometry args={[1.31, 0.022, 24, 128]} />
        <meshBasicMaterial color={VIOLET} toneMapped={false} />
      </mesh>
    </group>
  );
}

/* ---------- One orbit ring + its travelling "electron" ---------- */
function OrbitRing({
  radius,
  tilt,
  speed,
  color,
  electronColor,
  phase = 0,
}: {
  radius: number;
  tilt: [number, number, number];
  speed: number;
  color: string;
  electronColor?: string;
  phase?: number;
}) {
  const group = useRef<THREE.Group>(null);
  const electron = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (REDUCED) return;
    const t = state.clock.elapsedTime;
    if (group.current) group.current.rotation.z = phase + t * speed * 0.25;
    if (electron.current) {
      const a = phase + t * speed;
      electron.current.position.set(
        Math.cos(a) * radius,
        Math.sin(a) * radius,
        0
      );
    }
  });

  return (
    <group rotation={tilt}>
      <group ref={group}>
        <mesh>
          <torusGeometry args={[radius, 0.013, 16, 200]} />
          <meshBasicMaterial
            color={color}
            toneMapped={false}
            transparent
            opacity={0.75}
          />
        </mesh>
      </group>
      {electronColor && (
        <group ref={electron} position={[radius, 0, 0]}>
          <mesh>
            <sphereGeometry args={[0.055, 24, 24]} />
            <meshBasicMaterial color={electronColor} toneMapped={false} />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.12, 24, 24]} />
            <meshBasicMaterial
              color={electronColor}
              toneMapped={false}
              transparent
              opacity={0.25}
            />
          </mesh>
        </group>
      )}
    </group>
  );
}

/* ---------- Floating wireframe accents ---------- */
function Shape({
  position,
  color,
  scale = 1,
  spin = 0.4,
  children,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  spin?: number;
  children: React.ReactNode;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (REDUCED || !ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * spin;
    ref.current.rotation.y = t * spin * 0.7;
  });
  return (
    <Float
      speed={REDUCED ? 0 : 1.6}
      rotationIntensity={0}
      floatIntensity={1.4}
      floatingRange={[-0.18, 0.18]}
    >
      <mesh ref={ref} position={position} scale={scale}>
        {children}
        <meshBasicMaterial
          color={color}
          wireframe
          toneMapped={false}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

/* ---------- Pointer parallax rig (window-level, canvas has pointer-events:none) ---------- */
function Rig({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (REDUCED) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;
    const onMove = (e: PointerEvent) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useFrame((state, dt) => {
    if (!ref.current) return;
    const k = Math.min(dt * 3, 1);
    ref.current.rotation.y += (target.current.x * 0.3 - ref.current.rotation.y) * k;
    ref.current.rotation.x += (target.current.y * 0.22 - ref.current.rotation.x) * k;
    if (!REDUCED) {
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    }
  });

  return <group ref={ref}>{children}</group>;
}

/* ---------- Scene ---------- */
function Scene({ photoUrl, hasPhoto }: { photoUrl: string; hasPhoto: boolean }) {
  return (
    <Rig>
      {hasPhoto ? <PhotoDisc url={photoUrl} /> : <MonogramDisc />}

      <OrbitRing
        radius={1.72}
        tilt={[1.45, 0.25, 0]}
        speed={0.55}
        color={CYAN}
        electronColor={CYAN}
      />
      <OrbitRing
        radius={1.9}
        tilt={[1.1, -0.65, 0.3]}
        speed={-0.4}
        color={VIOLET}
        electronColor={VIOLET}
        phase={2}
      />
      <OrbitRing
        radius={2.08}
        tilt={[0.4, 0.9, -0.4]}
        speed={0.3}
        color={INDIGO}
        phase={4}
      />

      <Shape position={[-2.2, 1.35, -0.8]} color={CYAN} scale={0.34} spin={0.35}>
        <octahedronGeometry args={[1, 0]} />
      </Shape>
      <Shape position={[2.3, -1.25, -0.6]} color={VIOLET} scale={0.32} spin={0.25}>
        <torusKnotGeometry args={[0.68, 0.14, 90, 8]} />
      </Shape>
      <Shape position={[1.15, 2.05, -1.3]} color={EMERALD} scale={0.22} spin={0.45}>
        <icosahedronGeometry args={[1, 0]} />
      </Shape>
      <Shape position={[-2.35, -1.3, -1]} color={INDIGO} scale={0.26} spin={0.3}>
        <dodecahedronGeometry args={[1, 0]} />
      </Shape>

      <Sparkles count={60} scale={[5.6, 5.6, 2.5]} size={2.4} speed={REDUCED ? 0 : 0.35} color={CYAN} opacity={0.5} />
      <Sparkles count={40} scale={[5, 5, 2]} size={3.2} speed={REDUCED ? 0 : 0.25} color={VIOLET} opacity={0.45} />
    </Rig>
  );
}

/* ---------- Pause rendering while off-screen ---------- */
function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      rootMargin: '100px',
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

export default function HeroScene({
  photoUrl,
  hasPhoto,
}: {
  photoUrl: string;
  hasPhoto: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="hero3d-canvas" aria-hidden="true">
      <Canvas
        frameloop={inView && !REDUCED ? 'always' : 'demand'}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ pointerEvents: 'none', background: 'transparent' }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[-4, 2, 4]} intensity={30} color={VIOLET} />
        <pointLight position={[4, -2, 4]} intensity={24} color={CYAN} />
        <Suspense fallback={null}>
          <Scene photoUrl={photoUrl} hasPhoto={hasPhoto} />
        </Suspense>
      </Canvas>
    </div>
  );
}
