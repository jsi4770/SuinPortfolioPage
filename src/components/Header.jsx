'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { localize } from '@/utils/localize';
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
    <header className="fixed top-0 inset-x-0 z-50 bg-ink-900 text-white">
      <div className="mx-auto max-w-6xl flex justify-between items-center px-4 md:px-8 h-11 md:h-12">
        <a
          href="#top"
          className="text-[13px] font-display font-semibold tracking-tight text-white"
        >
          {localize(siteName, language)}
        </a>

        <nav className="hidden md:flex gap-6">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-xs tracking-tight text-white/80 hover:text-accent-dark transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <div
            role="group"
            aria-label="language toggle"
            className="flex gap-0.5 rounded-full bg-white/10 p-0.5"
          >
            <button
              type="button"
              onClick={() => changeLanguage('ko')}
              aria-pressed={language === 'ko'}
              className={`px-2 sm:px-2.5 py-1 rounded-full text-xs font-medium transition-colors active:scale-95 ${
                language === 'ko'
                  ? 'bg-white text-ink-900'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <span className="sm:hidden">KO</span>
              <span className="hidden sm:inline">한국어</span>
            </button>
            <button
              type="button"
              onClick={() => changeLanguage('en')}
              aria-pressed={language === 'en'}
              className={`px-2 sm:px-2.5 py-1 rounded-full text-xs font-medium transition-colors active:scale-95 ${
                language === 'en'
                  ? 'bg-white text-ink-900'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <span className="sm:hidden">EN</span>
              <span className="hidden sm:inline">English</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="md:hidden text-lg text-white leading-none px-1 shrink-0"
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
