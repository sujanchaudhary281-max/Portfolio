import { useState } from 'react';
import Button from './UI/Button';
import { Icon } from '@iconify/react';

const channels = [
  { icon: 'lucide:twitter', label: 'Twitter', value: '@sujan_96022', href: 'https://x.com/sujan_96022', color: 'from-blue-400 to-blue-600' },
  { icon: 'uit:linkedin-alt', label: 'LinkedIn', value: 'Sujan Chaudhary', href: 'https://www.linkedin.com/in/sujan-chaudhary-a6126b3b4/', color: 'from-sky-400 to-blue-500' },
  { icon: 'mingcute:github-line', label: 'GitHub', value: 'Sujan299', href: 'https://github.com/Sujan299', color: 'from-gray-300 to-gray-500' },
  { icon: 'lucide:mail', label: 'Email', value: 'sujanchaudhary281@gmail.com', href: 'mailto:sujanchaudhary281@gmail.com', color: 'from-primary to-primary-light' },
];

export default function HomeContact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
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
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-hairline bg-canvas-card/60 p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_25px_rgba(163,230,53,0.06)] hover:-translate-y-0.5"
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${c.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon icon={c.icon} width="20" />
                </div>
                <div>
                  <p className="text-[11px] text-mute font-medium">{c.label}</p>
                  <p className="text-sm font-semibold text-ink">{c.value}</p>
                </div>
              </a>
            ))}
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
                {sent && (
                  <div className="flex items-center gap-2 rounded-lg bg-primary/10 border border-primary/20 px-4 py-2.5 text-xs text-primary font-medium">
                    <Icon icon="lucide:check-circle" width="14" /> Message sent successfully!
                  </div>
                )}
                <Button type="submit" className="w-full !py-3.5 text-sm font-semibold">
                  Send Message <Icon icon="lucide:send" width="16" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
