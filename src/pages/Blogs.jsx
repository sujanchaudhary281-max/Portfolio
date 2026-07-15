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
    <div className="min-h-screen py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <div className="mb-10">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-primary">Writing</p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Blog insights
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-body">Technical articles, tutorials, and frontend design patterns.</p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mb-8 flex items-center justify-between border-b border-hairline pb-6">
            <p className="text-xs font-medium text-mute">{filtered.length} articles</p>
            <div className="relative w-60 sm:w-72">
              <Icon icon="lucide:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-mute" width="16" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-hairline bg-canvas-soft pl-9 pr-4 py-2 text-xs text-ink placeholder:text-mute outline-none transition-colors focus:border-primary/60"
              />
            </div>
          </div>
        </FadeIn>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((blog, i) => (
              <FadeIn key={blog.id} delay={i * 70}>
                <Card className="group flex h-full flex-col sm:flex-row !p-0 overflow-hidden">
                  <div className="relative h-40 shrink-0 overflow-hidden border-b border-hairline sm:h-auto sm:w-44 sm:border-b-0 sm:border-r">
                    <img src={blog.imageUrl || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80'} alt={blog.title} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                      <span className="mb-2 inline-block rounded-md border border-hairline px-2 py-0.5 text-[10px] font-medium text-body">Technical</span>
                      <h3 className="mb-1 font-display text-base font-semibold leading-snug text-ink">{blog.title}</h3>
                      <p className="line-clamp-2 text-xs leading-relaxed text-body">{blog.desc}</p>
                    </div>
                    <a href="https://blog-app-xi-henna.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-3">
                      <Button variant="secondary" className="w-full text-xs !py-1.5">Read article <Icon icon="lucide:arrow-up-right" width="12" /></Button>
                    </a>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn>
            <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-hairline py-16 text-center">
              <Icon icon="lucide:book-open" className="text-mute" width="36" />
              <p className="text-sm text-body">No articles found.</p>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
