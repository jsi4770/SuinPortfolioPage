'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { groupSkillsByCategory } from '@/utils/constants';
import SkillBadge from './SkillBadge';
import SocialLinks from './SocialLinks';

export default function About({ techStack, allItems, social }) {
  const { t } = useLanguage();

  const relatedByTech = (tech) => allItems.filter((item) => item.tech_stack?.includes(tech));
  const skillGroups = groupSkillsByCategory(techStack);

  return (
    <section id="about" className="scroll-mt-24 py-16 md:py-24 border-t border-ink-100 bg-ink-100/40">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-ink-900 mb-6">
          {t('sections.about')}
        </h2>

        <p className="text-base md:text-lg text-ink-700 max-w-2xl mb-10 leading-relaxed">
          {t('about.bio')}
        </p>

        {skillGroups.length > 0 && (
          <div className="mb-10">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500 mb-4">
              {t('sections.skills')}
            </h3>
            <div className="space-y-4">
              {skillGroups.map(({ category, techs }) => (
                <div key={category} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                  <span className="text-xs font-semibold text-ink-500 sm:w-28 sm:pt-1.5 shrink-0">
                    {t(`skillCategories.${category}`)}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <SkillBadge key={tech} tech={tech} relatedItems={relatedByTech(tech)} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <SocialLinks social={social} />
      </div>
    </section>
  );
}
