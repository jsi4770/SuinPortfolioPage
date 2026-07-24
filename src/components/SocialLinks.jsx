'use client';

const ICONS = {
  email: '✉',
  github: '⌥',
  linkedin: 'in',
  instagram: '◎',
};

export default function SocialLinks({ social }) {
  const links = Object.entries(social || {}).filter(([, value]) => Boolean(value));

  if (links.length === 0) return null;

  return (
    <div className="flex gap-3">
      {links.map(([key, value]) => {
        const href = key === 'email' ? `mailto:${value}` : value;
        return (
          <a
            key={key}
            href={href}
            target={key === 'email' ? undefined : '_blank'}
            rel={key === 'email' ? undefined : 'noopener noreferrer'}
            aria-label={key}
            className="w-11 h-11 flex items-center justify-center rounded-full border border-hairline text-ink-700 font-semibold transition-colors active:scale-95 hover:border-accent-500 hover:text-accent-500"
          >
            {ICONS[key] || key.charAt(0).toUpperCase()}
          </a>
        );
      })}
    </div>
  );
}
