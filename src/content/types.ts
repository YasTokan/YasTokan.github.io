export type Person = {
  name: string;
  /** Short role line shown above the name, e.g. "Tech Lead / CTO". */
  role: string;
  /** Specialisms, used in the social preview image. */
  headline: string;
  /** Shown under the name in the intro, e.g. "Tech Lead at Sharkhood Tech". */
  currentRole: string;
  /** First-person paragraph at the top of the home page. */
  intro: string;
  /** What I'm working on now, shown under "Currently" in the intro. */
  currently: string;
  /** Companies listed under "Before" in the intro. */
  previously: string[];
  /** Search and social description. */
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
  /** ISO dates (YYYY-MM-DD). */
  published: string;
  updated?: string;
};
