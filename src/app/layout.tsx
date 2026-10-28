import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { person } from "@/content/profile";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const title = `${person.name} · ${person.role}`;
const description = person.description;
const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${person.name}, ${person.role}`,
};

export const metadata: Metadata = {
  metadataBase: new URL(person.siteUrl),
  title,
  description,
  authors: [{ name: person.name, url: person.siteUrl }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: person.name,
    title,
    description,
    locale: "en_US",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
};

// Runs before paint so the saved (or OS) theme applies without a flash.
const themeScript = `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.dataset.theme=d?"dark":"light";}catch(e){}})();`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: "Tech Lead",
  url: person.siteUrl,
  email: `mailto:${person.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  sameAs: [person.linkedin, person.github],
  knowsAbout: [
    "Engineering leadership",
    "Software architecture",
    "Retrieval-augmented generation",
    "Legacy system modernisation",
    "NestJS",
    "Angular",
    "Next.js",
    ".NET Core",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="flex min-h-dvh flex-col bg-bg font-sans text-ink">
        <a
          href="#main"
          className="sr-only z-50 rounded-md bg-accent px-4 py-2 text-accent-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
