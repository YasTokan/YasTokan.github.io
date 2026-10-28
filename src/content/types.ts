export type Person = {
  name: string;
  /** Short role line shown above the name, e.g. "Tech Lead / CTO". */
  role: string;
  /** Specialisms shown under the name. */
  headline: string;
  /** One-sentence positioning statement for the hero. */
  lede: string;
  location: string;
  yearsOfExperience: string;
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
