'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { localize } from '@/utils/localize';

export default function SkillBadge({ tech, relatedItems }) {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const hasRelated = relatedItems && relatedItems.length > 0;

  return (
    <>
      <button
        type="button"
        onClick={() => hasRelated && setIsOpen(true)}
        className={`px-3 py-1.5 rounded-lg text-sm font-semibold bg-accent-50 text-accent-700 border border-accent-100 transition-colors ${
          hasRelated ? 'hover:bg-accent-100 hover:border-accent-200 cursor-pointer' : 'cursor-default'
        }`}
      >
        {tech}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/60 p-4 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
            className="bg-white rounded-2xl max-w-md w-full max-h-[80vh] overflow-y-auto p-6 animate-scale-in"
          >
            <div className="flex justify-between items-start gap-4 mb-4">
              <h3 className="text-lg font-display font-bold text-ink-900">{tech}</h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label={t('buttons.close')}
                className="text-ink-500 hover:text-ink-900 text-xl leading-none"
              >
                ✕
              </button>
            </div>

            <ul className="space-y-2">
              {relatedItems.map((item) => (
                <li key={`${item.category}-${item.id}`}>
                  <a
                    href={`#${item.category}`}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-ink-800 hover:text-accent-600"
                  >
                    {localize(item.title, language)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
