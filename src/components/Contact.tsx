import { Reveal } from './ui/Reveal';
import { ContactForm } from './ContactForm';
import { Terminal } from './Terminal';
import { profile } from '../data/content';
import { MailIcon, WhatsappIcon, GithubIcon, LinkedinIcon } from './ui/Icons';

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="contact-card glass">
          <p className="section-tag center">
            <span>06</span> Contact
          </p>
          <h2 className="section-title center">
            Let's build something <span className="gradient-text">great together</span>.
          </h2>
          <p className="contact-sub">
            Open to full-time roles, freelance and collaboration. Drop a message below, or reach me
            directly.
          </p>

          <div className="contact-layout">
            <div className="contact-terminal">
              <Terminal />
            </div>
            <ContactForm />
          </div>

          <div className="contact-quicklinks">
            <a className="quicklink" href={`mailto:${profile.email}`}>
              <MailIcon size={16} /> Email
            </a>
            <a className="quicklink" href={profile.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsappIcon size={16} /> WhatsApp
            </a>
            <a className="quicklink" href={profile.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon size={16} /> GitHub
            </a>
            <a className="quicklink" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={16} /> LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
