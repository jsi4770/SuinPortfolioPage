'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-parchment">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-10 text-center text-xs text-ink-500">
        {t('footer.copyright')}
      </div>
    </footer>
  );
}
