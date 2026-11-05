import { Component, Suspense, lazy, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { ReactLogo, NodeLogo } from './ui/Icons';

const HeroScene = lazy(() => import('./three/HeroScene'));

const PHOTO_URL = 'assets/profile.jpg';

function supportsWebGL(): boolean {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

/* Original CSS avatar — used while the 3D chunk loads and as a graceful fallback */
export function AvatarCard() {
  return (
    <div className="avatar-wrap">
      <div className="avatar-glow" />
      <div className="avatar-ring" />
      <img
        src={PHOTO_URL}
        alt="Portrait of Merlin Libin"
        className="avatar-img"
        onError={(e) => {
          const img = e.currentTarget;
          img.style.display = 'none';
          const fb = img.nextElementSibling as HTMLElement | null;
          if (fb) fb.style.display = 'grid';
        }}
      />
      <div className="avatar-fallback" style={{ display: 'none' }}>
        ML
      </div>
    </div>
  );
}

class SceneErrorBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

export function Hero3D() {
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const [hasPhoto, setHasPhoto] = useState<boolean | null>(null);

  useEffect(() => {
    setWebgl(supportsWebGL());
    const img = new Image();
    img.onload = () => setHasPhoto(true);
    img.onerror = () => setHasPhoto(false);
    img.src = PHOTO_URL;
  }, []);

  const ready = webgl === true && hasPhoto !== null;

  return (
    <div className="hero3d-wrap">
      {webgl === false ? (
        <AvatarCard />
      ) : (
        <SceneErrorBoundary fallback={<AvatarCard />}>
          <div className="hero3d-glow" aria-hidden="true" />
          {ready ? (
            <Suspense fallback={<AvatarCard />}>
              <HeroScene photoUrl={PHOTO_URL} hasPhoto={hasPhoto === true} />
            </Suspense>
          ) : (
            <AvatarCard />
          )}
        </SceneErrorBoundary>
      )}
      <span className="badge badge-react" title="React">
        <ReactLogo />
      </span>
      <span className="badge badge-node" title="Node.js">
        <NodeLogo />
      </span>
    </div>
  );
}
