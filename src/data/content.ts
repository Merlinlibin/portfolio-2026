export type IconName = 'frontend' | 'backend' | 'mobile' | 'tools';

export interface SkillGroup {
  icon: IconName;
  iconClass: string;
  title: string;
  blurb: string;
  tags: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export interface Project {
  name: string;
  sub?: string;
  kind: string;
  domain: string;
  description: string;
  tags: string[];
  feature?: boolean;
  /** Two-color gradient used for the card's monogram banner. */
  accent: [string, string];
  /** Optional live demo URL. */
  live?: string;
  /** Optional source code URL. */
  code?: string;
}

export interface EducationItem {
  year: string;
  title: string;
  description: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const profile = {
  name: 'Merlin Libin',
  role: 'Full Stack Developer',
  email: 'merlinlibinmerlin@gmail.com',
  phone: '9578232626',
  phoneDisplay: '+91 95782 32626',
  github: 'https://github.com/Merlinlibin',
  linkedin: 'https://www.linkedin.com/in/merlin-libin-j-199317277/',
  whatsapp:
    'https://api.whatsapp.com/send/?phone=919578232626&text=Hi%2C+Can+you+tell+more+about+yourself%3F&type=phone_number&app_absent=0',
  /** Place your CV at public/assets/Merlin-Libin-Resume.pdf */
  resumeUrl: 'assets/Merlin-Libin-Resume.pdf',
  /**
   * Formspree form ID. Create a form at https://formspree.io (use the email
   * merlinlibinmerlin@gmail.com), then paste the ID from your endpoint here.
   * Endpoint looks like:  https://formspree.io/f/abcdwxyz  ->  id is "abcdwxyz".
   * Until this is set, the contact form simulates success (no email is sent).
   */
  formspreeId: 'xzdldzoe',
};

export const roles: string[] = [
  'scalable web apps',
  'mobile experiences',
  'robust APIs',
  'enterprise platforms',
];

export const stats: Stat[] = [
  { value: 3, suffix: '+', label: 'Years experience' },
  { value: 5, suffix: '+', label: 'Major projects shipped' },
  { value: 3, suffix: '', label: 'Industry domains' },
  { value: 100, suffix: '%', label: 'Ownership mindset' },
];

export const aboutChips: string[] = [
  'SDLC',
  'Agile',
  'Clean Architecture',
  'RBAC & Auth',
  'REST & GraphQL',
];

export const skills: SkillGroup[] = [
  {
    icon: 'frontend',
    iconClass: 'icon-frontend',
    title: 'Frontend',
    blurb: 'Crafting responsive, accessible interfaces.',
    tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'Ant Design'],
  },
  {
    icon: 'backend',
    iconClass: 'icon-backend',
    title: 'Backend',
    blurb: 'Robust APIs & data layers at scale.',
    tags: ['Node.js', 'Express.js', 'NestJS', 'GraphQL', 'REST', 'PostgreSQL', 'MySQL', 'Socket.io'],
  },
  {
    icon: 'mobile',
    iconClass: 'icon-mobile',
    title: 'Mobile',
    blurb: 'Cross-platform apps people love to use.',
    tags: ['React Native', 'REST & GraphQL', 'State Management'],
  },
  {
    icon: 'tools',
    iconClass: 'icon-tools',
    title: 'Tools & Practices',
    blurb: 'Shipping with discipline & the cloud.',
    tags: ['Git & GitHub', 'AWS Lambda', 'AWS S3', 'Jira', 'Agile', 'SDLC', 'Testing'],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Full Stack Developer',
    company: 'Naduvan Technologies Pvt Ltd',
    period: 'Jun 2024 — Present',
    description:
      'Design and develop scalable web & mobile applications using React.js, React Native, and Node.js with Express.js & NestJS. Build & maintain RESTful and GraphQL APIs, design optimized PostgreSQL schemas, and implement secure authentication and role-based access control.',
    tags: ['React', 'React Native', 'NestJS', 'GraphQL', 'PostgreSQL'],
  },
  {
    role: 'Software Engineer',
    company: 'MBIT Computraining Pvt. Ltd.',
    period: '2022 — 2023',
    description:
      'Contributed to the quality assurance process through thorough requirement analysis and execution of manual test cases, including regression and user acceptance testing.',
    tags: ['QA', 'Manual Testing', 'Regression', 'UAT'],
  },
  {
    role: 'Junior Engineer',
    company: 'AS Spark Infratech Automation Pvt Ltd',
    period: '2018 — 2021',
    description: 'Worked on safety and security automation projects.',
    tags: ['Safety', 'Security', 'Automation'],
  },
];

export const projects: Project[] = [
  {
    name: 'BigBillion',
    sub: '(TeaBoy)',
    kind: 'Web · API · Mobile',
    domain: 'E-commerce',
    description:
      'A franchise-based shopping platform enabling franchise owners to order essentials like milk & tea, with integrated online payments and live delivery tracking.',
    tags: ['React', 'React Native', 'Node.js', 'Payments', 'Tracking'],
    feature: true,
    accent: ['#8b5cf6', '#22d3ee'],
  },
  {
    name: 'ECS',
    kind: 'Web · API',
    domain: 'Fintech / Gov',
    description:
      'A government banking application for employees to manage financial services digitally, with secure authentication and ledger management.',
    tags: ['NestJS', 'PostgreSQL', 'Auth', 'Ledger'],
    accent: ['#6366f1', '#0891b2'],
  },
  {
    name: 'Epass',
    kind: 'Web · Mobile',
    domain: 'Government',
    description:
      'A government e-pass system letting the public apply for travel permits to destinations like Ooty & Kodaikanal, with officer validation via a mobile app.',
    tags: ['React', 'React Native', 'GraphQL'],
    accent: ['#34d399', '#10b981'],
  },
  {
    name: 'SDAT',
    sub: '(CM Trophy)',
    kind: 'Web · Mobile',
    domain: 'Sports / Gov',
    description:
      'A government sports event management platform handling registrations, team management and multi-category competitions.',
    tags: ['React', 'React Native', 'Node.js'],
    accent: ['#f59e0b', '#f43f5e'],
  },
  {
    name: 'MASM',
    kind: 'API · Mobile',
    domain: 'Service Platform',
    description:
      'A temple services platform supporting large-scale registration, secure ticket booking and role-based access. Engineered backend systems handling validation & concurrency, plus the mobile applications.',
    tags: ['NestJS', 'Concurrency', 'RBAC', 'React Native', 'Socket.io'],
    feature: true,
    accent: ['#f43f5e', '#8b5cf6'],
  },
];

export const education: EducationItem[] = [
  {
    year: '2023',
    title: 'MERN Stack Development',
    description:
      'Certification covering MongoDB, Express.js, React.js & Node.js — building dynamic interfaces, RESTful APIs and full-stack applications.',
  },
  {
    year: '2014 — 2018',
    title: 'B.E. — Mechanical Engineering',
    description: 'Marthandam College of Engineering and Technology, Kanyakumari.',
  },
];
