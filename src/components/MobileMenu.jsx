'use client';

export default function MobileMenu({ isOpen, onNavigate, navItems }) {
  if (!isOpen) return null;

  return (
    <nav className="md:hidden bg-white border-b border-ink-100 flex flex-col gap-1 px-4 py-4 animate-fade-in">
      {navItems.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          onClick={onNavigate}
          className="text-base font-medium text-ink-800 hover:text-accent-600 py-2 px-2 rounded-lg hover:bg-accent-50 transition-colors"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
