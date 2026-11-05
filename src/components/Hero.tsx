import { Reveal } from './ui/Reveal';
import { useTypewriter } from '../hooks/useTypewriter';
import { profile, roles } from '../data/content';
import { Hero3D } from './Hero3D';
import {
  ArrowRight,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  WhatsappIcon,
} from './ui/Icons';

const techStrip = [
  'React', 'React Native', 'Node.js', 'NestJS', 'GraphQL',
  'PostgreSQL', 'Express.js', 'TypeScript', 'Socket.io', 'AWS',
];

export function Hero() {
  const typed = useTypewriter(roles);

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
          <Hero3D />
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
