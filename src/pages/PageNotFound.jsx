import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Button from '../components/UI/Button';

export default function PageNotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="flex flex-col items-center text-center gap-5 max-w-sm">
        <h1 className="select-none font-display text-[7rem] font-bold leading-none text-ink sm:text-[9rem]">404</h1>
        <h2 className="-mt-4 font-display text-xl font-bold text-ink sm:text-2xl">Page not found</h2>
        <p className="text-sm text-body">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Link to="/"><Button><Icon icon="lucide:home" width="16" /> Back to home</Button></Link>
          <Link to="/more-projects"><Button variant="secondary">View projects <Icon icon="lucide:arrow-right" width="14" /></Button></Link>
        </div>
      </div>
    </div>
  );
}
