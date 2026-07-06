import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface CaseStudyMetadata {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
}

export interface BlogMetadata {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
}

export function getCaseStudySlugs() {
  const dirPath = path.join(contentDirectory, 'case-studies');
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  return fs.readdirSync(dirPath).filter(file => file.endsWith('.md'));
}

export function getCaseStudyBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(contentDirectory, 'case-studies', `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    meta: data as CaseStudyMetadata,
    content,
  };
}

export function getAllCaseStudies() {
  const slugs = getCaseStudySlugs();
  const caseStudies = slugs
    .map((slug) => getCaseStudyBySlug(slug))
    .filter(Boolean)
    // sort case studies by date in descending order
    .sort((case1, case2) => (case1!.meta.date > case2!.meta.date ? -1 : 1));
  return caseStudies;
}

export function getBlogSlugs() {
  const dirPath = path.join(contentDirectory, 'blog');
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  return fs.readdirSync(dirPath).filter(file => file.endsWith('.md'));
}

export function getBlogBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(contentDirectory, 'blog', `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    meta: data as BlogMetadata,
    content,
  };
}

export function getAllBlogs() {
  const slugs = getBlogSlugs();
  const blogs = slugs
    .map((slug) => getBlogBySlug(slug))
    .filter(Boolean)
    .sort((a, b) => (a!.meta.date > b!.meta.date ? -1 : 1));
  return blogs;
}
