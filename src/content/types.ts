export type Person = {
  name: string;
  givenName: string;
  familyName: string;
  /** GitHub handle, also used as an alternate name in search data. */
  username: string;
  /** Home page title in search results; keep it under 60 characters. */
  seoTitle: string;
  /** Short role line, e.g. "Tech Lead / CTO". */
  role: string;
  /** Specialisms, used in the footer and the social preview image. */
  headline: string;
  /** Shown under the name in the intro, e.g. "Tech Lead, Sharkhood Tech". */
  currentRole: string;
  /** Short summary paragraph at the top of the home page. */
  intro: string;
  /** Search and social description; keep it under 160 characters. */
  description: string;
  location: string;
  summary: string[];
  email: string;
  linkedin: string;
  github: string;
  /** Path of the CV PDF inside /public. */
  cv: string;
  siteUrl: string;
};

export type FocusArea = {
  title: string;
  description: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  organisation: string;
  period: string;
  context: string;
  contributions: string[];
  outcome: string;
  stack: string[];
  href?: string;
};

export type EarlierProject = {
  name: string;
  description: string;
};

export type Role = {
  title: string;
  company: string;
  start: string;
  end: string;
  highlights: string[];
};

export type EarlierRole = {
  title: string;
  company: string;
  start: string;
  end: string;
  summary: string;
};

export type SkillGroup = {
  name: string;
  skills: string[];
};

export type Education = {
  qualification: string;
  institution: string;
  period: string;
};

export type Language = {
  name: string;
  level: string;
};

export type Article = {
  /** Matches the Markdown file name in src/content/articles/. */
  slug: string;
  title: string;
  summary: string;
  /** Groups related articles, e.g. "AI" or "Big data". */
  topic: string;
  /** Search phrases the article answers; used in its search data. */
  keywords: string[];
  /** ISO dates (YYYY-MM-DD). */
  published: string;
  updated?: string;
};
