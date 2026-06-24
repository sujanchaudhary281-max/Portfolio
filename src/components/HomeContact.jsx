import { useState } from 'react';
import Button from './UI/Button';
import { Icon } from '@iconify/react';

const channels = [
  { icon: 'lucide:twitter', label: 'Twitter', value: '@sujan_96022', href: 'https://x.com/sujan_96022', color: 'from-blue-400 to-blue-600' },
  { icon: 'uit:linkedin-alt', label: 'LinkedIn', value: 'Sujan Chaudhary', href: 'https://www.linkedin.com/in/sujan-chaudhary-a6126b3b4/', color: 'from-sky-400 to-blue-500' },
  { icon: 'mingcute:github-line', label: 'GitHub', value: 'sujanchaudhary281-max', href: 'https://github.com/sujanchaudhary281-max', color: 'from-gray-300 to-gray-500' },
  { icon: 'lucide:mail', label: 'Email', value: 'sujanchaudhary281@gmail.com', href: null, color: 'from-primary to-primary-light' },
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
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute top-1/3 left-0 -z-10 h-[300px] w-[400px] rounded-full bg-primary/4 blur-[100px]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight" style={{ letterSpacing: '-0.025em' }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-body">Have a project in mind? Reach out and let's build something great.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
          {/* Channels - left */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-3">
            {channels.map((c) => {
              const Tag = c.href ? 'a' : 'div';
              return (
              <Tag
                key={c.label}
                {...(c.href ? { href: c.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center gap-4 rounded-xl border border-hairline bg-canvas-card/60 p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_25px_rgba(163,230,53,0.06)] hover:-translate-y-0.5"
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${c.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon icon={c.icon} width="20" />
                </div>
                <div>
                  <p className="text-[11px] text-mute font-medium">{c.label}</p>
                  <p className="text-sm font-semibold text-ink">{c.value}</p>
                </div>
              </Tag>
              );
            })}
          </div>

          {/* Form - right */}
          <div className="lg:col-span-3 relative rounded-2xl border border-hairline bg-canvas-card/40 backdrop-blur-sm p-6 sm:p-8 overflow-hidden">
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-[60px]" />
            <div className="relative">
              <h3 className="font-display text-lg font-semibold text-ink mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" required className="rounded-lg border border-hairline bg-canvas px-4 py-3.5 text-sm text-ink placeholder:text-mute/50 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(163,230,53,0.08)] transition-all" />
                  <input name="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Your email" required className="rounded-lg border border-hairline bg-canvas px-4 py-3.5 text-sm text-ink placeholder:text-mute/50 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(163,230,53,0.08)] transition-all" />
                </div>
                <textarea name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project..." rows="5" required className="rounded-lg border border-hairline bg-canvas px-4 py-3.5 text-sm text-ink placeholder:text-mute/50 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(163,230,53,0.08)] transition-all resize-none" />
                {status === 'success' && (
                  <div className="flex items-center gap-2 rounded-lg bg-primary/10 border border-primary/20 px-4 py-2.5 text-xs text-primary font-medium">
                    <Icon icon="lucide:check-circle" width="14" /> Message sent successfully!
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-2.5 text-xs text-red-400 font-medium">
                    <Icon icon="lucide:x-circle" width="14" /> Something went wrong. Please try again.
                  </div>
                )}
                <Button type="submit" disabled={status === 'sending'} className="w-full !py-3.5 text-sm font-semibold disabled:opacity-60">
                  {status === 'sending' ? 'Sending…' : 'Send Message'} <Icon icon={status === 'sending' ? 'lucide:loader' : 'lucide:send'} width="16" className={status === 'sending' ? 'animate-spin' : ''} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
