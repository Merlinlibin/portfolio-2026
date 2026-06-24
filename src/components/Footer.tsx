import { profile } from '../data/content';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {year} {profile.name}. Crafted with care.
        </p>
        <a href="#hero" className="back-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
