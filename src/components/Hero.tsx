import { Reveal } from './ui/Reveal';
import { useTypewriter } from '../hooks/useTypewriter';
import { useTilt } from '../hooks/useTilt';
import { profile, roles } from '../data/content';
import {
  ArrowRight,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  WhatsappIcon,
  ReactLogo,
  NodeLogo,
} from './ui/Icons';

const techStrip = [
  'React', 'React Native', 'Node.js', 'NestJS', 'GraphQL',
  'PostgreSQL', 'Express.js', 'TypeScript', 'Socket.io', 'AWS',
];

export function Hero() {
  const typed = useTypewriter(roles);
  const tiltRef = useTilt<HTMLDivElement>(7);

  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> Available for opportunities
          </p>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="hero-build">
            I build <span className="rotator">{typed}</span>
          </p>
          <p className="hero-sub">
            Full Stack Developer with <strong>3+ years</strong> of experience crafting
            enterprise-grade web &amp; mobile applications across fintech, government and service
            platforms — with React, React Native, Node.js &amp; NestJS.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View my work
              <ArrowRight />
            </a>
            <a href={profile.resumeUrl} className="btn btn-outline" download>
              <DownloadIcon />
              Download CV
            </a>
          </div>
          <ul className="hero-socials" aria-label="Social links">
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <MailIcon />
              </a>
            </li>
            <li>
              <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <WhatsappIcon />
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal className="hero-visual">
          <div className="avatar-wrap" ref={tiltRef}>
            <div className="avatar-glow" />
            <div className="avatar-ring" />
            <img
              src="assets/profile.jpg"
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
            <span className="badge badge-react" title="React">
              <ReactLogo />
            </span>
            <span className="badge badge-node" title="Node.js">
              <NodeLogo />
            </span>
          </div>
        </Reveal>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...techStrip, ...techStrip].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
