import { Icon } from '@iconify/react';

export default function Timeline({ items }) {
  return (
    <div className="relative border-l border-hairline pl-8 ml-4 flex flex-col gap-10">
      {items.map((item) => (
        <div key={item.id} className="relative">
          <span className="absolute -left-[37px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full border-2 border-primary bg-canvas" />

          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">{item.role}</h3>
              <p className="text-sm text-primary">{item.companyName}</p>
            </div>
            <span className="text-xs text-mute">{item.period}</span>
          </div>

          <p className="text-sm text-body leading-relaxed">{item.desc}</p>

          {item.achievements?.length > 0 && (
            <ul className="mt-3 flex flex-col gap-1.5">
              {item.achievements.map((a) => (
                <li key={a.id} className="flex items-start gap-2 text-xs text-body">
                  <Icon icon="lucide:check" className="text-primary mt-0.5 shrink-0" width="12" />
                  {a.desc}
                </li>
              ))}
            </ul>
          )}

          {item.companyThinks && (
            <p className="mt-3 rounded-md border border-hairline bg-canvas-soft p-3 text-xs italic text-body">
              "{item.companyThinks}"
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
