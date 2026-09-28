import { CARD_ICONS, ExternalLinkIcon } from './Icons';

export default function CardLinkButton({ label, sublabel, href, icon, emphasis = false }) {
  const Icon = CARD_ICONS[icon];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-3.5 rounded-apple border px-4 py-3.5 transition-all duration-150 active:scale-[0.98] ${
        emphasis
          ? 'border-accent-200 bg-accent-50 hover:border-accent-400 hover:bg-accent-100'
          : 'border-hairline bg-white hover:border-ink-300 hover:bg-parchment'
      }`}
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
          emphasis ? 'bg-accent-500 text-white' : 'bg-parchment text-ink-800'
        }`}
      >
        {Icon ? <Icon className="h-[18px] w-[18px]" /> : null}
      </span>

      <span className="min-w-0 flex-1 text-left">
        <span className="block truncate text-[15px] font-medium text-ink-900">{label}</span>
        {sublabel ? (
          <span className="block truncate text-xs text-ink-500">{sublabel}</span>
        ) : null}
      </span>

      <ExternalLinkIcon className="h-4 w-4 shrink-0 text-ink-300 transition-colors group-hover:text-ink-500" />
    </a>
  );
}
