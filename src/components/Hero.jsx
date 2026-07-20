'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { localize } from '@/utils/localize';

export default function Hero({ site, social }) {
  const { language, t } = useLanguage();

  const outlineButton =
    'inline-flex items-center px-5 py-3 rounded-lg border border-ink-300 text-ink-800 font-semibold text-sm md:text-base hover:border-accent-500 hover:text-accent-600 transition-colors';

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
          {localize(site.name, language)}
          {t('hero.nameSuffix') && (
            <span className="font-body font-semibold text-accent-600 text-sm md:text-base ml-2 align-middle">
              {t('hero.nameSuffix').trim()}
            </span>
          )}
        </h1>
        <p className="text-lg md:text-xl text-ink-700 font-medium mb-2">
          {localize(site.tagline, language)}
        </p>
        <p className="text-base md:text-lg text-ink-500 max-w-2xl mb-8">
          {localize(site.description, language)}
        </p>

        <div className="flex flex-wrap gap-3">
          {social?.email && (
            <a href={`mailto:${social.email}`} className={outlineButton}>
              {t('hero.ctaEmail')}
            </a>
          )}
          {social?.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className={outlineButton}
            >
              GitHub
            </a>
          )}
          {social?.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={outlineButton}
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
