'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { localize } from '@/utils/localize';

export default function Hero({ site, email }) {
  const { language, t } = useLanguage();

  return (
    <section
      id="top"
      className="pt-32 pb-20 md:pt-44 md:pb-28 border-b border-ink-100 bg-gradient-to-b from-accent-50/60 to-white"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8 animate-fade-in">
        <p className="text-accent-600 font-semibold text-sm md:text-base mb-3">
          {t('hero.greeting')}
        </p>
        <h1 className="text-display-sm md:text-display-lg font-display font-bold text-ink-900 mb-4">
          {site.name}
        </h1>
        <p className="text-lg md:text-xl text-ink-700 font-medium mb-2">
          {localize(site.tagline, language)}
        </p>
        <p className="text-base md:text-lg text-ink-500 max-w-2xl mb-8">
          {localize(site.description, language)}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center px-5 py-3 rounded-lg bg-accent-500 text-white font-semibold text-sm md:text-base hover:bg-accent-600 transition-colors shadow-sm"
          >
            {t('hero.ctaProjects')}
          </a>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center px-5 py-3 rounded-lg border border-ink-300 text-ink-800 font-semibold text-sm md:text-base hover:border-accent-500 hover:text-accent-600 transition-colors"
          >
            {t('hero.ctaContact')}
          </a>
        </div>
      </div>
    </section>
  );
}
