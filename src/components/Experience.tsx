import { Reveal } from './ui/Reveal';
import { experience } from '../data/content';

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal as="p" className="section-tag">
          <span>03</span> Experience
        </Reveal>
        <Reveal as="h2" className="section-title">
          Where I've <span className="gradient-text">made an impact</span>
        </Reveal>
        <div className="timeline">
          {experience.map((item, i) => (
            <Reveal as="article" className="tl-item" delay={i * 90} key={item.company}>
              <div className="tl-dot" />
              <div className="tl-card glass">
                <div className="tl-head">
                  <h3>{item.role}</h3>
                  <span className="tl-period">{item.period}</span>
                </div>
                <p className="tl-company">{item.company}</p>
                <p>{item.description}</p>
                <ul className="tag-list small">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
