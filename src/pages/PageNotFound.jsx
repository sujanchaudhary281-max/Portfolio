import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Button from '../components/UI/Button';

export default function PageNotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="flex flex-col items-center text-center gap-5 max-w-sm">
        <h1 className="text-[7rem] sm:text-[9rem] font-bold font-display leading-none gradient-text select-none">404</h1>
        <h2 className="text-xl sm:text-2xl font-bold font-display text-ink -mt-4">Page Not Found</h2>
        <p className="text-sm text-body">The page you're looking for doesn't exist or has been moved.</p>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <Link to="/"><Button><Icon icon="lucide:home" width="16" /> Back to Home</Button></Link>
          <Link to="/more-projects"><Button variant="secondary">View Projects <Icon icon="lucide:arrow-right" width="14" /></Button></Link>
        </div>
      </div>
    </div>
  );
}
