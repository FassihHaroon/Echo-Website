import Image from "next/image";
import { COMPANY, SOCIAL_LINKS } from "@/lib/constants";

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookies", href: "/privacy-policy#cookies" },
];

const SOCIAL_ROW = [
  { label: SOCIAL_LINKS.linkedin.label, href: SOCIAL_LINKS.linkedin.href },
  { label: SOCIAL_LINKS.instagram.label, href: SOCIAL_LINKS.instagram.href },
  { label: SOCIAL_LINKS.whatsapp.label, href: SOCIAL_LINKS.whatsapp.href },
  { label: SOCIAL_LINKS.email.label, href: SOCIAL_LINKS.email.href },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg-secondary">
      <div className="site-container flex flex-col gap-10 py-16 md:flex-row md:items-start md:justify-between md:py-20">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.jpeg"
            alt={`${COMPANY.name} logo`}
            width={24}
            height={24}
            className="h-6 w-6 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-foreground">{COMPANY.name}</span>
        </div>

        <nav aria-label="Social links" className="flex flex-wrap gap-x-8 gap-y-3">
          {SOCIAL_ROW.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-silver-dim transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <nav aria-label="Legal" className="flex flex-wrap gap-x-8 gap-y-3">
          {LEGAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-silver-dim transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="site-container border-t border-white/5 py-6 text-xs text-silver-dim">
        © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
      </div>
    </footer>
  );
}
