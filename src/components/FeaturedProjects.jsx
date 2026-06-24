import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Card from './UI/Card';
import Button from './UI/Button';
import projects from '../assets/projects.json';

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="absolute bottom-0 right-1/4 -z-10 h-[300px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl" style={{ letterSpacing: '-0.025em' }}>
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="mt-3 text-sm text-body">Selected work showcasing end-to-end delivery.</p>
          </div>
          <Link to="/more-projects" className="flex items-center gap-1.5 text-sm text-primary hover:text-primary-light font-medium transition-colors group">
            View All <Icon icon="lucide:arrow-right" width="14" className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <Card key={p.id} className="flex flex-col !p-0 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img src={p.imgUrl} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas-card via-canvas-card/50 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.techStacks.split(',').map((t) => (
                    <span key={t} className="rounded-pill bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-semibold text-primary">{t.trim()}</span>
                  ))}
                </div>
                <h3 className="font-display text-lg font-bold text-ink mb-3">{p.title}</h3>
                <p className="text-xs text-body leading-relaxed line-clamp-2 mb-3">{p.description}</p>
                <div className="mt-auto flex gap-3 pt-4">
                  <a href={p.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="secondary" className="w-full text-xs !px-3 !py-2"><Icon icon="mingcute:github-line" width="14" /> Code</Button>
                  </a>
                  {p.liveLink && (
                    <a href={p.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full text-xs !px-3 !py-2">Live <Icon icon="lucide:external-link" width="12" /></Button>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
