import { Reveal } from './ui/Reveal';
import { SkillIcon } from './ui/Icons';
import { skills } from '../data/content';

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal as="p" className="section-tag">
          <span>02</span> Skills
        </Reveal>
        <Reveal as="h2" className="section-title">
          My technical <span className="gradient-text">toolbox</span>
        </Reveal>
        <div className="bento">
          {skills.map((group, i) => (
            <Reveal as="article" className="bento-card glass" delay={i * 80} key={group.title}>
              <div className={`bento-icon ${group.iconClass}`}>
                <SkillIcon name={group.icon} />
              </div>
              <h3>{group.title}</h3>
              <p>{group.blurb}</p>
              <ul className="tag-list">
                {group.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
