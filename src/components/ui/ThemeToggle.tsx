import { useTheme } from '../../hooks/useTheme';
import { SunIcon, MoonIcon } from './Icons';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="theme-toggle-track">
        <span className={`theme-toggle-thumb ${isDark ? 'dark' : 'light'}`}>
          {isDark ? <MoonIcon size={14} /> : <SunIcon size={14} />}
        </span>
      </span>
    </button>
  );
}
