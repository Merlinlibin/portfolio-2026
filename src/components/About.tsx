import { Reveal } from './ui/Reveal';
import { useCountUp } from '../hooks/useCountUp';
import { useTilt } from '../hooks/useTilt';
import { aboutChips, stats, type Stat } from '../data/content';

function StatCard({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp(stat.value);
  const tiltRef = useTilt<HTMLDivElement>(6);
  return (
    <div className="stat-card glass" ref={tiltRef}>
      <span className="stat-num" ref={ref}>
        {value}
        {stat.suffix}
      </span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
}

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal as="p" className="section-tag">
          <span>01</span> About
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-text">
            <h2 className="section-title">
              Turning complex requirements into{' '}
              <span className="gradient-text">clean, scalable software</span>.
            </h2>
            <p>
              I'm a Full Stack Developer currently at <strong>Naduvan Technologies Pvt Ltd</strong>,
              where I design and build scalable web and mobile applications end-to-end. I work across
              the stack — React.js on the frontend, React Native for mobile, and Node.js with
              Express.js &amp; NestJS on the backend.
            </p>
            <p>
              I've delivered enterprise-grade products in{' '}
              <strong>fintech, government systems and service platforms</strong>, building RESTful
              &amp; GraphQL APIs, designing optimized PostgreSQL schemas, and implementing secure
              authentication with role-based access control. I care deeply about SDLC, Agile
              practices and clean, maintainable architecture.
            </p>
            <div className="about-chips">
              {aboutChips.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="stats">
            {stats.map((stat) => (
              <StatCard stat={stat} key={stat.label} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
