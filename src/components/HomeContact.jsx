import { useState } from 'react';
import Button from './UI/Button';
import { Icon } from '@iconify/react';

const channels = [
  { icon: 'lucide:twitter', label: 'Twitter', value: '@sujan_96022', href: 'https://x.com/sujan_96022' },
  { icon: 'uit:linkedin-alt', label: 'LinkedIn', value: 'Sujan Chaudhary', href: 'https://www.linkedin.com/in/sujan-chaudhary-a6126b3b4/' },
  { icon: 'mingcute:github-line', label: 'GitHub', value: 'sujanchaudhary281-max', href: 'https://github.com/sujanchaudhary281-max' },
  { icon: 'lucide:mail', label: 'Email', value: 'sujanchaudhary281@gmail.com', href: null },
];

export default function HomeContact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData();
    formData.append('access_key', 'a1d21953-d274-4c39-8634-15b3755ffa4f');
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('message', form.message);

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 max-w-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-primary">Contact</p>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Let's connect
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-body">Have a project in mind? Reach out and let's build something great.</p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-5">
          {/* Channels - left */}
          <div className="flex flex-col gap-2.5 lg:col-span-2">
            {channels.map((c) => {
              const Tag = c.href ? 'a' : 'div';
              return (
              <Tag
                key={c.label}
                {...(c.href ? { href: c.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="surface surface-hover group flex items-center gap-4 p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-hairline bg-white/[0.02] text-body group-hover:text-ink">
                  <Icon icon={c.icon} width="18" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium text-mute">{c.label}</p>
                  <p className="truncate text-sm font-medium text-ink">{c.value}</p>
                </div>
              </Tag>
              );
            })}
          </div>

          {/* Form - right */}
          <div className="surface p-6 sm:p-8 lg:col-span-3">
            <h3 className="mb-6 font-display text-base font-semibold text-ink">Send a message</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" required className="rounded-lg border border-hairline bg-canvas px-4 py-3 text-sm text-ink placeholder:text-mute outline-none transition-colors focus:border-primary/60" />
                  <input name="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Your email" required className="rounded-lg border border-hairline bg-canvas px-4 py-3 text-sm text-ink placeholder:text-mute outline-none transition-colors focus:border-primary/60" />
                </div>
                <textarea name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project..." rows="5" required className="resize-none rounded-lg border border-hairline bg-canvas px-4 py-3 text-sm text-ink placeholder:text-mute outline-none transition-colors focus:border-primary/60" />
                {status === 'success' && (
                  <div className="flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-4 py-2.5 text-xs font-medium text-primary">
                    <Icon icon="lucide:check-circle" width="14" /> Message sent successfully!
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-xs font-medium text-red-400">
                    <Icon icon="lucide:x-circle" width="14" /> Something went wrong. Please try again.
                  </div>
                )}
                <Button type="submit" disabled={status === 'sending'} className="w-full !py-3 text-sm disabled:opacity-60">
                  {status === 'sending' ? 'Sending…' : 'Send message'} <Icon icon={status === 'sending' ? 'lucide:loader' : 'lucide:send'} width="16" className={status === 'sending' ? 'animate-spin' : ''} />
                </Button>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
}
