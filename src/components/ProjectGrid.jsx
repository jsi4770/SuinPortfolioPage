'use client';

import { useMemo, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import FilterTabs from './FilterTabs';
import ProjectCard from './ProjectCard';

function computeOptions(items, type, t) {
  const allOption = { value: 'all', label: t('filters.all') };

  if (type === 'projects') {
    const statuses = Array.from(new Set(items.map((item) => item.status).filter(Boolean)));
    return [allOption, ...statuses.map((status) => ({ value: status, label: t(`status.${status}`) }))];
  }

  if (type === 'academics') {
    const types = Array.from(new Set(items.map((item) => item.type).filter(Boolean)));
    return [allOption, ...types.map((value) => ({ value, label: value }))];
  }

  const years = Array.from(
    new Set(items.map((item) => (item.date || '').slice(0, 4)).filter(Boolean))
  ).sort((a, b) => b.localeCompare(a));
  return [allOption, ...years.map((year) => ({ value: year, label: year }))];
}

function matchesFilter(item, type, active) {
  if (active === 'all') return true;
  if (type === 'projects') return item.status === active;
  if (type === 'academics') return item.type === active;
  return (item.date || '').startsWith(active);
}

export default function ProjectGrid({ items, type, titleKey, id }) {
  const { language, t } = useLanguage();
  const [active, setActive] = useState('all');

  const options = useMemo(() => computeOptions(items, type, t), [items, type, language]);
  const filtered = items.filter((item) => matchesFilter(item, type, active));

  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24 border-t border-ink-100">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-ink-900 mb-8">
          {t(titleKey)}
        </h2>

        {options.length > 1 && (
          <div className="mb-8">
            <FilterTabs options={options} active={active} onChange={setActive} />
          </div>
        )}

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-ink-500">—</p>
        )}
      </div>
    </section>
  );
}
