'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import MobileMenu from './MobileMenu';

export default function Header({ siteName }) {
  const { language, changeLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#projects', label: t('nav.projects') },
    { href: '#academics', label: t('nav.academics') },
    { href: '#activities', label: t('nav.activities') },
    { href: '#about', label: t('nav.about') },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-ink-100">
      <div className="mx-auto max-w-6xl flex justify-between items-center px-4 md:px-8 h-16 md:h-20">
        <a href="#top" className="text-lg md:text-xl font-display font-bold text-ink-900">
          {siteName}
        </a>

        <nav className="hidden md:flex gap-8">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-ink-700 hover:text-accent-600 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            role="group"
            aria-label="language toggle"
            className="flex gap-1 border border-ink-300 rounded-lg p-1"
          >
            <button
              type="button"
              onClick={() => changeLanguage('ko')}
              aria-pressed={language === 'ko'}
              className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors ${
                language === 'ko'
                  ? 'bg-accent-500 text-white'
                  : 'text-ink-700 hover:bg-ink-100'
              }`}
            >
              한국어
            </button>
            <button
              type="button"
              onClick={() => changeLanguage('en')}
              aria-pressed={language === 'en'}
              className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors ${
                language === 'en'
                  ? 'bg-accent-500 text-white'
                  : 'text-ink-700 hover:bg-ink-100'
              }`}
            >
              English
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="md:hidden text-2xl text-ink-800 leading-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={isOpen}
        onNavigate={() => setIsOpen(false)}
        navItems={navItems}
      />
    </header>
  );
}
