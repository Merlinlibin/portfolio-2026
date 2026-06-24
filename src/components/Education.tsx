import { Reveal } from './ui/Reveal';
import { education } from '../data/content';

export function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <Reveal as="p" className="section-tag">
          <span>05</span> Education &amp; Certifications
        </Reveal>
        <div className="edu-grid">
          {education.map((item, i) => (
            <Reveal as="article" className="edu-card glass" delay={i * 90} key={item.title}>
              <div className="edu-year">{item.year}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
