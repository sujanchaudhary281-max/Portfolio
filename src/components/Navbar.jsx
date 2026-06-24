import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/more-projects' },
  { name: 'Experiences', path: '/experiences' },
  { name: 'Blogs', path: '/blogs' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-hairline bg-canvas/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="font-display text-xl font-bold text-ink group">
          Sujan<span className="text-primary group-hover:text-primary-light transition-colors">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link key={l.path} to={l.path} className={`relative text-sm transition-all duration-200 ${pathname === l.path ? 'text-primary font-semibold' : 'text-body hover:text-ink'}`}>
              {l.name}
              {pathname === l.path && <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary" />}
            </Link>
          ))}
          <Link to="/contact" className="rounded-pill bg-primary px-5 py-2 text-sm font-semibold text-canvas hover:bg-primary-light transition-all duration-300 btn-glow">
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg text-ink hover:text-primary hover:bg-primary/5 transition-colors" aria-label="Toggle menu">
          <Icon icon={isOpen ? 'lucide:x' : 'lucide:menu'} width="22" />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute inset-x-0 top-full z-50 md:hidden border-b border-hairline bg-canvas shadow-glow-lg">
          <div className="flex flex-col px-4 py-6 gap-1">
            {links.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-all ${
                  pathname === l.path
                    ? 'text-primary bg-primary/10 border-l-2 border-primary'
                    : 'text-ink hover:bg-primary/5 hover:text-primary'
                }`}
              >
                {l.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-pill bg-primary py-3 text-center text-sm font-semibold text-canvas btn-glow"
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
