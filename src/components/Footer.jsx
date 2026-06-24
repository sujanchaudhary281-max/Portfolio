import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const nav = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/more-projects' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Contact', path: '/contact' },
];

const socials = [
  { icon: 'lucide:twitter', url: 'https://x.com/sujan_96022', label: 'Twitter' },
  { icon: 'uit:linkedin-alt', url: 'https://www.linkedin.com/in/sujan-chaudhary-a6126b3b4/', label: 'LinkedIn' },
  { icon: 'mingcute:github-line', url: 'https://github.com/sujanchaudhary281-max', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas-soft/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 sm:flex-row sm:justify-between">
        <Link to="/" className="font-display text-lg font-bold text-ink group">
          Sujan<span className="text-primary group-hover:text-primary-light transition-colors">.</span>
        </Link>

        <nav className="flex gap-6" aria-label="Footer">
          {nav.map((l) => (
            <Link key={l.path} to={l.path} className="text-sm text-body hover:text-primary transition-colors duration-200">{l.name}</Link>
          ))}
        </nav>

        <div className="flex gap-3">
          {socials.map((s) => (
            <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-body hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300">
              <Icon icon={s.icon} width="16" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-hairline py-5 text-center text-xs text-mute">
        © {new Date().getFullYear()} Sujan Chaudhary. Built with React & Tailwind.
      </div>
    </footer>
  );
}
