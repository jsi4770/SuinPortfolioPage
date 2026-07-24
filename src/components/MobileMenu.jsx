'use client';

export default function MobileMenu({ isOpen, onNavigate, navItems }) {
  if (!isOpen) return null;

  return (
    <nav className="md:hidden bg-ink-900 border-t border-white/10 flex flex-col gap-1 px-4 py-4 animate-fade-in">
      {navItems.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          onClick={onNavigate}
          className="text-sm text-white/80 hover:text-accent-dark py-2 px-2 rounded-apple hover:bg-white/5 transition-colors"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
