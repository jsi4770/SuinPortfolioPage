import ko from '../../data/translations/ko.json';
import en from '../../data/translations/en.json';

const translations = { ko, en };

export function getTranslation(language, key) {
  const keys = key.split('.');
  let value = translations[language] || translations.ko;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }

  return typeof value === 'string' ? value : key;
}
