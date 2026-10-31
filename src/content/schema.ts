// Structured data (schema.org JSON-LD) that tells search engines who the site
// is about and what each page is. Pages render these with <JsonLd />.
import { education, experience, expertise, languages, person } from "./profile";
import type { Article } from "./types";

const context = "https://schema.org";
const siteUrl = `${person.siteUrl}/`;
const articlesUrl = `${person.siteUrl}/articles/`;
const websiteId = `${siteUrl}#website`;
const personId = `${siteUrl}#person`;

const articleUrl = (article: Article) => `${articlesUrl}${article.slug}/`;

// The short form other pages point at, for example as an article's author.
const author = { "@type": "Person", "@id": personId, name: person.name, url: siteUrl };

const fullPerson = {
  ...author,
  givenName: person.givenName,
  familyName: person.familyName,
  alternateName: person.username,
  description: person.description,
  email: `mailto:${person.email}`,
  jobTitle: experience[0].title,
  worksFor: { "@type": "Organization", name: experience[0].company },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  alumniOf: [...new Set(education.map((item) => item.institution))].map((name) => ({
    "@type": "CollegeOrUniversity",
    name,
  })),
  knowsLanguage: languages.map((language) => language.name),
  knowsAbout: expertise,
  sameAs: [person.linkedin, person.github],
};

export const homeSchema = {
  "@context": context,
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: person.name,
      alternateName: person.username,
      description: person.description,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      url: siteUrl,
      name: person.seoTitle,
      description: person.description,
      inLanguage: "en",
      isPartOf: { "@id": websiteId },
      mainEntity: fullPerson,
    },
  ],
};

export function articlesSchema(articles: Article[], description: string) {
  return {
    "@context": context,
    "@type": "Blog",
    url: articlesUrl,
    name: `Articles by ${person.name}`,
    description,
    inLanguage: "en",
    author,
    blogPost: articles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      url: articleUrl(article),
      datePublished: article.published,
      dateModified: article.updated ?? article.published,
    })),
  };
}

export function articleSchema(article: Article) {
  const url = articleUrl(article);

  return {
    "@context": context,
    "@graph": [
      {
        "@type": "BlogPosting",
        mainEntityOfPage: url,
        url,
        headline: article.title,
        description: article.summary,
        image: `${person.siteUrl}/og.png`,
        datePublished: article.published,
        dateModified: article.updated ?? article.published,
        articleSection: article.topic,
        keywords: article.keywords,
        inLanguage: "en",
        author,
        publisher: author,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { name: "Home", item: siteUrl },
          { name: "Articles", item: articlesUrl },
          { name: article.title, item: url },
        ].map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          ...crumb,
        })),
      },
    ],
  };
}
