export function localize(field, language) {
  if (field && typeof field === 'object') {
    return field[language] || field.ko || Object.values(field)[0] || '';
  }
  return field || '';
}
