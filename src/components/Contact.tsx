import { Reveal } from './ui/Reveal';
import { ContactForm } from './ContactForm';
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
            <div className="contact-aside">
              <a className="contact-line" href={`mailto:${profile.email}`}>
                <span className="contact-line-icon">
                  <MailIcon size={18} />
                </span>
                <span>
                  <small>Email</small>
                  {profile.email}
                </span>
              </a>
              <a
                className="contact-line"
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-line-icon">
                  <WhatsappIcon size={18} />
                </span>
                <span>
                  <small>WhatsApp</small>
                  {profile.phoneDisplay}
                </span>
              </a>
              <div className="contact-aside-socials">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GithubIcon size={18} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
