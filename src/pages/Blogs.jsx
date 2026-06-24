import { useState } from 'react';
import { Icon } from '@iconify/react';
import blogs from '../assets/blogs.json';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import FadeIn from '../components/FadeIn';

export default function Blogs() {
  const [search, setSearch] = useState('');

  const filtered = blogs.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase()) || b.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="mb-10">
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight" style={{ letterSpacing: '-0.025em' }}>
              Blog <span className="gradient-text">Insights</span>
            </h1>
            <p className="mt-2 text-sm text-body max-w-lg">Technical articles, tutorials, and frontend design patterns.</p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-hairline">
            <p className="text-xs text-mute font-medium">{filtered.length} articles</p>
            <div className="relative w-60 sm:w-72">
              <Icon icon="lucide:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-mute" width="16" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-pill border border-hairline bg-canvas-soft pl-9 pr-4 py-2 text-xs text-ink placeholder:text-mute/60 outline-none focus:border-primary"
              />
            </div>
          </div>
        </FadeIn>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((blog, i) => (
              <FadeIn key={blog.id} delay={i * 80}>
                <Card className="flex flex-col sm:flex-row !p-0 overflow-hidden group h-full">
                  <div className="relative sm:w-44 h-40 sm:h-auto shrink-0 overflow-hidden">
                    <img src={blog.imageUrl || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80'} alt={blog.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="flex flex-col justify-between p-4 flex-1">
                    <div>
                      <span className="inline-block rounded-pill bg-primary/10 border border-primary/20 px-2 py-0.5 text-[10px] font-semibold text-primary mb-2">Technical</span>
                      <h3 className="font-display text-base font-bold text-ink mb-1 leading-snug">{blog.title}</h3>
                      <p className="text-xs text-body leading-relaxed line-clamp-2">{blog.desc}</p>
                    </div>
                    <a href="https://blog-app-xi-henna.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-3">
                      <Button variant="secondary" className="w-full text-xs !py-1.5">Read Article <Icon icon="lucide:arrow-up-right" width="12" /></Button>
                    </a>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn>
            <div className="flex flex-col items-center justify-center py-16 text-center gap-3 border border-dashed border-hairline rounded-xl">
              <Icon icon="lucide:book-open" className="text-primary/30" width="40" />
              <p className="text-sm text-body">No articles found.</p>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
