import type { IconName } from '../../data/content';

type SvgProps = { size?: number; className?: string };

export const ArrowRight = ({ size = 18 }: SvgProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const GithubIcon = ({ size = 20 }: SvgProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 2A10 10 0 0 0 8.84 21.5c.5.08.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.57.67.48A10 10 0 0 0 12 2Z" />
  </svg>
);

export const LinkedinIcon = ({ size = 20 }: SvgProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95C20.6 8.69 22 10.5 22 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9V9Z" />
  </svg>
);

export const MailIcon = ({ size = 20 }: SvgProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={2}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

export const PhoneIcon = ({ size = 20 }: SvgProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

export const WhatsappIcon = ({ size = 20 }: SvgProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M.06 24l1.69-6.16a11.87 11.87 0 0 1-1.6-5.95C.15 5.34 5.5 0 12.06 0a11.8 11.8 0 0 1 8.4 3.49 11.78 11.78 0 0 1 3.48 8.4c0 6.55-5.35 11.89-11.9 11.89a11.9 11.9 0 0 1-5.7-1.45L.06 24ZM6.6 20.13c1.68 1 3.28 1.6 5.4 1.6 5.44 0 9.87-4.43 9.88-9.87a9.83 9.83 0 0 0-2.88-6.98 9.8 9.8 0 0 0-6.95-2.89c-5.45 0-9.88 4.43-9.88 9.87 0 2.23.65 3.9 1.75 5.65l-1 3.65 3.68-1.02Zm8.86-5.55c-.07-.12-.27-.2-.57-.35-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07a8.13 8.13 0 0 1-2.4-1.48 8.96 8.96 0 0 1-1.65-2.06c-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41Z" />
  </svg>
);

export const DownloadIcon = ({ size = 18 }: SvgProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
);

export const SunIcon = ({ size = 18 }: SvgProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

export const MoonIcon = ({ size = 18 }: SvgProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
  </svg>
);

export const ReactLogo = ({ size = 26 }: SvgProps) => (
  <svg viewBox="-11.5 -10.23 23 20.46" width={size} height={size}>
    <circle r="2.05" fill="#22d3ee" />
    <g stroke="#22d3ee" strokeWidth={1} fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const NodeLogo = ({ size = 22 }: SvgProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="#34d399">
    <path d="M12 1.85a1.6 1.6 0 0 0-.8.21L3.6 6.45a1.6 1.6 0 0 0-.8 1.38v8.34a1.6 1.6 0 0 0 .8 1.38l7.6 4.39a1.6 1.6 0 0 0 1.6 0l7.6-4.39a1.6 1.6 0 0 0 .8-1.38V7.83a1.6 1.6 0 0 0-.8-1.38l-7.6-4.39a1.6 1.6 0 0 0-.8-.21Z" />
  </svg>
);

const Frontend = () => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);
const Backend = () => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14a9 3 0 0 0 18 0V5M3 12a9 3 0 0 0 18 0" />
  </svg>
);
const Mobile = () => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}>
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <path d="M12 18h.01" />
  </svg>
);
const Tools = () => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.3L3 18v3h3l6.4-6.3a4 4 0 0 0 5.3-5.4l-2.6 2.6-2-2 2.6-2.6Z" />
  </svg>
);

export const SkillIcon = ({ name }: { name: IconName }) => {
  switch (name) {
    case 'frontend':
      return <Frontend />;
    case 'backend':
      return <Backend />;
    case 'mobile':
      return <Mobile />;
    case 'tools':
      return <Tools />;
  }
};
