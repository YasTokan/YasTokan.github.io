import type { MetadataRoute } from "next";
import { person } from "@/content/profile";

// Required for `output: "export"` so the route is rendered at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${person.siteUrl}/sitemap.xml`,
  };
}
