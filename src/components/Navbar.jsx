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
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link to="/" className="font-display text-lg font-bold text-ink group">
          Sujan<span className="text-primary">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.path} to={l.path} className={`relative text-sm transition-colors duration-200 ${pathname === l.path ? 'text-ink font-medium' : 'text-body hover:text-ink'}`}>
              {l.name}
              {pathname === l.path && <span className="absolute -bottom-[21px] left-0 h-0.5 w-full bg-primary" />}
            </Link>
          ))}
          <Link to="/contact" className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-canvas transition-colors hover:bg-primary-light">
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg text-ink hover:bg-white/[0.04] transition-colors" aria-label="Toggle menu">
          <Icon icon={isOpen ? 'lucide:x' : 'lucide:menu'} width="22" />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute inset-x-0 top-full z-50 md:hidden border-b border-hairline bg-canvas">
          <div className="flex flex-col px-4 py-6 gap-1">
            {links.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base transition-colors ${
                  pathname === l.path
                    ? 'text-ink bg-white/[0.04] font-medium'
                    : 'text-body hover:bg-white/[0.03] hover:text-ink'
                }`}
              >
                {l.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-lg bg-primary py-3 text-center text-sm font-medium text-canvas"
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
