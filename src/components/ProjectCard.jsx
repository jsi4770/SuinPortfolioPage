'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { localize } from '@/utils/localize';
import { CATEGORY_STYLES } from '@/utils/constants';

function Thumbnail({ item, accent }) {
  if (item.thumbnailExists) {
    return (
      <Image
        src={item.thumbnail}
        alt=""
        width={480}
        height={270}
        className="w-full h-40 object-cover"
      />
    );
  }

  const initial = (item.title?.en || item.title?.ko || '?').charAt(0).toUpperCase();

  return (
    <div
      className={`w-full h-40 flex items-center justify-center text-3xl font-display font-bold text-white ${accent.bg}`}
    >
      {initial}
    </div>
  );
}

export default function ProjectCard({ item }) {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const accent = CATEGORY_STYLES[item.category] || CATEGORY_STYLES.projects;

  const title = localize(item.title, language);
  const description = localize(item.description, language);
  const meta = item.duration || item.venue || '';

  return (
    <>
      <div className="group bg-white rounded-xl overflow-hidden border border-ink-100 hover:shadow-lg hover:-translate-y-[3px] transition-all duration-300 flex flex-col">
        <Thumbnail item={item} accent={accent} />

        <div className="p-5 flex flex-col flex-1">
          {item.status && (
            <span
              className={`self-start text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${accent.softBg} ${accent.text}`}
            >
              {t(`status.${item.status}`)}
            </span>
          )}

          <h3 className="text-lg font-bold text-ink-900 mb-1">{title}</h3>
          <p className="text-sm text-ink-700 mb-3 flex-1">{description}</p>

          {meta && <p className="text-xs text-ink-500 mb-3">{meta}</p>}

          {item.tech_stack?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.tech_stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-2 py-0.5 rounded-md bg-ink-100 text-ink-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className={`mt-auto text-sm font-semibold ${accent.text} hover:underline text-left`}
          >
            {t('buttons.viewMore')} →
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/60 p-4 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 animate-scale-in"
          >
            <div className="flex justify-between items-start gap-4 mb-4">
              <h3 className="text-xl md:text-2xl font-display font-bold text-ink-900">
                {title}
              </h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label={t('buttons.close')}
                className="text-ink-500 hover:text-ink-900 text-xl leading-none"
              >
                ✕
              </button>
            </div>

            {item.tech_stack?.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-6">
                {item.tech_stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-2 py-0.5 rounded-md bg-ink-100 text-ink-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {item.links?.length > 0 && (
              <div className="mb-6 pb-6 border-b border-ink-100">
                <p className="text-xs font-semibold text-ink-600 mb-3 uppercase tracking-wide">
                  {t('common.links') || 'Links'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {link.title}
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div
              className="prose prose-slate max-w-none prose-headings:text-ink-900 prose-headings:font-display prose-p:text-ink-700 prose-li:text-ink-700 prose-strong:text-ink-900"
              dangerouslySetInnerHTML={{ __html: item.body?.[language] || '' }}
            />
          </div>
        </div>
      )}
    </>
  );
}
