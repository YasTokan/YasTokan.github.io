import { person } from "./profile";

// Next replaces a parent's `openGraph` instead of merging it, so each page
// spreads these shared fields into its own. Twitter cards fall back to it.
export const sharedOpenGraph = {
  siteName: person.name,
  locale: "en_US",
  images: [
    {
      url: "/og.png",
      width: 1200,
      height: 630,
      alt: `${person.name}, ${person.role} in ${person.location}`,
    },
  ],
};
