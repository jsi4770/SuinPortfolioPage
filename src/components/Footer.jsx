'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-ink-100 py-8">
      <div className="mx-auto max-w-6xl px-4 md:px-8 text-center text-sm text-ink-500">
        {t('footer.copyright')}
      </div>
    </footer>
  );
}
