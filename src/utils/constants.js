export const CATEGORY_STYLES = {
  projects: {
    text: 'text-accent-600',
    bg: 'bg-accent-500',
    softBg: 'bg-accent-50',
    ring: 'ring-accent-200',
  },
  academics: {
    text: 'text-academic',
    bg: 'bg-academic',
    softBg: 'bg-violet-50',
    ring: 'ring-violet-200',
  },
  activities: {
    text: 'text-activity',
    bg: 'bg-activity',
    softBg: 'bg-amber-50',
    ring: 'ring-amber-200',
  },
};

export const FILTER_TYPES = ['all', 'projects', 'academics', 'activities'];

export const SKILL_CATEGORY_ORDER = [
  'frontend',
  'backend',
  'database',
  'dataAi',
  'cloud',
  'other',
];

export const SKILL_CATEGORY_MAP = {
  React: 'frontend',
  TypeScript: 'frontend',
  'Node.js': 'backend',
  Python: 'backend',
  PostgreSQL: 'database',
  SQL: 'database',
  Pandas: 'dataAi',
  'BART-Large-MNLI': 'dataAi',
  RoBERTa: 'dataAi',
  'Speech Recognition': 'dataAi',
  'Naver Cloud Platform': 'cloud',
};

export function groupSkillsByCategory(techStack) {
  const groups = {};

  techStack.forEach((tech) => {
    const category = SKILL_CATEGORY_MAP[tech] || 'other';
    if (!groups[category]) groups[category] = [];
    groups[category].push(tech);
  });

  return SKILL_CATEGORY_ORDER.filter((category) => groups[category]?.length).map(
    (category) => ({ category, techs: groups[category] })
  );
}
