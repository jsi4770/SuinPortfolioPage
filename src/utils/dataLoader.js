import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const DATA_DIR = path.join(process.cwd(), 'data');
const HANGUL_REGEX = /[가-힣]/;

function splitBilingualBody(rawContent) {
  const body = rawContent || '';

  const parts = body
    .split(/\n(?=##\s)/)
    .map((part) =>
      part
        .split('\n')
        .filter((line) => line.trim() !== '---')
        .join('\n')
        .trim()
    )
    .filter(Boolean);

  const koParts = [];
  const enParts = [];

  for (const part of parts) {
    const firstLine = part.split('\n')[0] || '';
    if (HANGUL_REGEX.test(firstLine)) {
      koParts.push(part);
    } else {
      enParts.push(part);
    }
  }

  return {
    ko: marked.parse(koParts.join('\n\n')),
    en: marked.parse(enParts.join('\n\n') || koParts.join('\n\n')),
  };
}

function readCollection(type) {
  const dir = path.join(DATA_DIR, type);
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md') && file.toLowerCase() !== 'readme.md');

  const items = files.map((filename) => {
    const raw = fs.readFileSync(path.join(dir, filename), 'utf8');
    const { data, content } = matter(raw);
    const slug = filename.replace(/\.md$/, '');
    const thumbnailExists = Boolean(
      data.thumbnail &&
        fs.existsSync(path.join(process.cwd(), 'public', data.thumbnail))
    );

    return {
      ...data,
      thumbnailExists,
      body: splitBilingualBody(content),
      category: type,
      id: slug,
    };
  });

  return items.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getProjects() {
  return readCollection('projects');
}

export function getAcademics() {
  return readCollection('academics');
}

export function getActivities() {
  return readCollection('activities');
}

export function getAllTechStack() {
  const all = [...getProjects(), ...getAcademics(), ...getActivities()];
  const set = new Set();
  all.forEach((item) => {
    (item.tech_stack || []).forEach((tech) => set.add(tech));
  });
  return Array.from(set);
}
