'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { localize } from '@/utils/localize';

export default function Hero({ site, social }) {
  const { language, t } = useLanguage();

  const primaryPill =
    'inline-flex items-center px-6 py-3 rounded-full bg-accent-500 text-white font-medium text-base transition-transform active:scale-95 hover:bg-accent-600';
  const secondaryPill =
    'inline-flex items-center px-6 py-3 rounded-full border border-accent-500 text-accent-500 font-medium text-base transition-transform active:scale-95 hover:bg-accent-50';

  return (
    <section id="top" className="pt-28 pb-20 md:pt-36 md:pb-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8 animate-fade-in">
        <p className="text-accent-500 font-semibold text-base mb-4">
          {t('hero.greeting')}
        </p>
        <h1 className="text-4xl md:text-hero-display font-display font-semibold tracking-tight text-ink-900 mb-5">
          {localize(site.name, language)}
          {t('hero.nameSuffix') && (
            <span className="font-body font-medium text-accent-500 text-lg md:text-xl ml-3 align-middle">
              {t('hero.nameSuffix').trim()}
            </span>
          )}
        </h1>
        <p className="text-xl md:text-lead text-ink-800 mb-3 max-w-2xl whitespace-pre-line">
          {localize(site.tagline, language)}
        </p>
        <p className="text-base17 text-ink-500 max-w-2xl mb-10">
          {localize(site.description, language)}
        </p>

        <div className="flex flex-wrap gap-3">
          {social?.email && (
            <a href={`mailto:${social.email}`} className={primaryPill}>
              {t('hero.ctaEmail')}
            </a>
          )}
          {social?.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryPill}
            >
              GitHub
            </a>
          )}
          {social?.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryPill}
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
