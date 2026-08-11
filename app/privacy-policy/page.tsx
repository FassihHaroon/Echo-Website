import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy — Cosecant",
  description: "How Cosecant collects, uses, and protects your data.",
  path: "/privacy-policy",
});

const UPDATED = "August 5, 2026";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated={UPDATED}
      breadcrumb={[{ label: "Privacy Policy", href: "/privacy-policy" }]}
    >
      <LegalSection title="1. Overview">
        <p>
          This Privacy Policy explains how [Legal Entity Name] (&ldquo;Cosecant,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us&rdquo;) collects, uses, discloses, and protects
          information when you visit cosecant.io, use our products (including Echo),
          or otherwise interact with us. It is written to be consistent with the
          principles of the GDPR, UK GDPR, and CCPA, but is a template and must be
          reviewed against your actual data flows and applicable law before publication.
        </p>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <p>We collect information in the following categories:</p>
        <ul className="list-disc pl-5">
          <li>
            <strong className="text-foreground">Information you provide</strong> —
            name, company, email, phone number, project budget, and message content
            submitted through our contact form.
          </li>
          <li>
            <strong className="text-foreground">Business data</strong> — information
            provided by clients in the course of a project engagement, including
            operational and configuration data needed to deliver our software.
          </li>
          <li>
            <strong className="text-foreground">API and product data</strong> — data
            processed through Echo or other products, including call transcripts,
            order data, and usage metadata generated during normal operation.
          </li>
          <li>
            <strong className="text-foreground">Automatically collected data</strong> —
            IP address, browser type, device information, and usage patterns
            collected via cookies and similar technologies.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. AI Processing Disclosure">
        <p>
          Our products, including Echo, use third-party and proprietary AI models
          (including but not limited to models from OpenAI, Anthropic, and Google,
          and speech-to-text systems such as Whisper) to process voice, text, and
          order data in order to deliver the service. Data submitted to these models
          may be transmitted to the respective model providers for inference,
          subject to their own data handling terms. We do not use client business
          data to train foundation models we do not control.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="4. Cookies & Similar Technologies">
        <p>We use cookies and similar technologies for:</p>
        <ul className="list-disc pl-5">
          <li>Essential site functionality (e.g. session state, security).</li>
          <li>Analytics, to understand aggregate usage of our website.</li>
          <li>
            Preference storage, such as remembering display settings between visits.
          </li>
        </ul>
        <p>
          You can control cookies through your browser settings. Disabling cookies
          may affect some site functionality.
        </p>
      </LegalSection>

      <LegalSection title="5. Analytics">
        <p>
          We may use privacy-conscious analytics tools to understand how visitors
          use our site. Analytics data is generally aggregated and does not
          directly identify individuals, except where necessary to investigate
          abuse or security incidents.
        </p>
      </LegalSection>

      <LegalSection title="6. How We Use Information">
        <ul className="list-disc pl-5">
          <li>To respond to inquiries submitted through our contact form.</li>
          <li>To deliver, maintain, and improve our products and services.</li>
          <li>To meet contractual obligations with clients and business customers.</li>
          <li>To comply with legal obligations and enforce our agreements.</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Third-Party Providers">
        <p>
          We share information with service providers who help us operate our
          business, including cloud infrastructure providers (e.g. AWS), AI model
          providers (e.g. OpenAI, Anthropic, Google), database and backend
          infrastructure providers (e.g. Supabase), and email delivery providers.
          These providers are contractually restricted from using your data for
          purposes other than providing services to us.
        </p>
      </LegalSection>

      <LegalSection title="8. International Data Transfers">
        <p>
          Where data is transferred outside your country of residence, including to
          [Governing Jurisdiction] or other jurisdictions where our providers
          operate, we rely on appropriate safeguards such as Standard Contractual
          Clauses or equivalent mechanisms recognized under applicable data
          protection law.
        </p>
      </LegalSection>

      <LegalSection title="9. Data Retention">
        <p>
          We retain personal data only as long as necessary for the purposes
          described in this policy, to comply with legal obligations, resolve
          disputes, and enforce our agreements. Contact form submissions are
          retained for [Retention Period] unless a longer period is required by
          law or an active business relationship.
        </p>
      </LegalSection>

      <LegalSection title="10. Security">
        <p>
          We apply reasonable technical and organizational measures designed to
          protect information against unauthorized access, alteration, disclosure,
          or destruction. No system is completely secure, and we cannot guarantee
          absolute security of information transmitted to us.
        </p>
      </LegalSection>

      <LegalSection title="11. Your Rights">
        <p>
          Depending on your jurisdiction, you may have the right to access,
          correct, delete, or port your personal data, object to or restrict
          certain processing, and withdraw consent where processing is based on
          consent. To exercise these rights, contact us using the details below.
        </p>
      </LegalSection>

      <LegalSection title="12. Customer & Client Responsibilities">
        <p>
          Clients who submit end-user or business data to us for processing
          (e.g. via Echo) are responsible for ensuring they have a lawful basis to
          share that data and for providing appropriate notice to their own
          customers, in accordance with applicable law.
        </p>
      </LegalSection>

      <LegalSection title="13. Contact">
        <p>
          Questions about this policy can be directed to{" "}
          <a href="mailto:cosecentai@gmail.com" className="text-foreground underline underline-offset-4">
            cosecentai@gmail.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
