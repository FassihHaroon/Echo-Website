import type { Metadata } from "next";

export const SITE_URL = "https://cosecant.io";

export const SITE_NAME = "Cosecant";

export const DEFAULT_DESCRIPTION =
  "Cosecant designs and engineers production-grade AI systems: voice, automation, and enterprise software built for real businesses.";

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
