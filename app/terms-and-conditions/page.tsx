import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions — Cosecant",
  description: "The terms governing use of Cosecant's website and products.",
  path: "/terms-and-conditions",
});

const UPDATED = "August 5, 2026";

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" updated={UPDATED}>
      <LegalSection title="1. Agreement">
        <p>
          These Terms & Conditions (&ldquo;Terms&rdquo;) govern your use of the
          Cosecant website, and, where applicable by separate agreement, our
          software products and services (including Echo). By using our website or
          engaging us for services, you agree to these Terms.
        </p>
      </LegalSection>

      <LegalSection title="2. Acceptable Use">
        <p>You agree not to:</p>
        <ul className="list-disc pl-5">
          <li>Use our website or products for unlawful purposes.</li>
          <li>Attempt to gain unauthorized access to our systems or data.</li>
          <li>Interfere with or disrupt the integrity of our services.</li>
          <li>Reverse engineer or misuse our software beyond licensed rights.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Intellectual Property">
        <p>
          All content, branding, and software on this website, and all underlying
          software we develop, remain the property of [Legal Entity Name] or our
          licensors, except for deliverables expressly transferred to a client
          under a separate written agreement.
        </p>
      </LegalSection>

      <LegalSection title="4. Software Licensing & SaaS Terms">
        <p>
          Where we provide access to a hosted product (SaaS), we grant a
          non-exclusive, non-transferable license to use that product for its
          intended purpose during the term of your subscription. Custom-developed
          software delivered under a services agreement is licensed or assigned
          per the terms of that specific agreement.
        </p>
      </LegalSection>

      <LegalSection title="5. AI-Generated Outputs">
        <p>
          Our products may generate outputs using AI models (e.g. transcripts,
          order summaries, responses). AI outputs may contain errors or
          inaccuracies. Clients are responsible for reviewing AI-generated outputs
          before relying on them for critical business decisions.
        </p>
      </LegalSection>

      <LegalSection title="6. Subscriptions & Payments">
        <p>
          Fees, billing cycles, and payment terms for any subscription or
          engagement are set out in the applicable order form or statement of
          work. Unless otherwise agreed, fees are non-refundable once a billing
          period has begun.
        </p>
      </LegalSection>

      <LegalSection title="7. Confidentiality">
        <p>
          Each party agrees to protect the other&rsquo;s confidential information
          disclosed during an engagement with the same degree of care it uses for
          its own confidential information, and not to disclose it to third
          parties except as necessary to perform the engagement or as required by
          law.
        </p>
      </LegalSection>

      <LegalSection title="8. Enterprise Customers">
        <p>
          Enterprise engagements are governed by a separate master services
          agreement or statement of work, which takes precedence over these Terms
          in the event of a conflict.
        </p>
      </LegalSection>

      <LegalSection title="9. Beta Features">
        <p>
          Features labeled as beta, preview, or early access are provided
          &ldquo;as is&rdquo; without warranty, may change or be discontinued at
          any time, and should not be relied upon for critical production use.
        </p>
      </LegalSection>

      <LegalSection title="10. Open Source Components">
        <p>
          Our software may incorporate open-source components, each governed by
          its own license. Nothing in these Terms restricts rights granted under
          those licenses.
        </p>
      </LegalSection>

      <LegalSection title="11. Warranty Disclaimer">
        <p>
          Except as expressly stated in a signed agreement, our website and
          products are provided &ldquo;as is&rdquo; without warranties of any
          kind, express or implied, including merchantability, fitness for a
          particular purpose, and non-infringement.
        </p>
      </LegalSection>

      <LegalSection title="12. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, [Legal Entity Name] will not be
          liable for indirect, incidental, special, or consequential damages
          arising from use of our website or products. Our total liability for
          any claim will not exceed the amount paid by you to us in the
          [12 months] preceding the claim, unless otherwise agreed in writing.
        </p>
      </LegalSection>

      <LegalSection title="13. Indemnification">
        <p>
          You agree to indemnify and hold [Legal Entity Name] harmless from
          claims, damages, and expenses arising from your misuse of our website
          or products, or your violation of these Terms.
        </p>
      </LegalSection>

      <LegalSection title="14. Termination">
        <p>
          We may suspend or terminate access to our website or products for
          violation of these Terms. Termination of a services engagement is
          governed by the applicable agreement.
        </p>
      </LegalSection>

      <LegalSection title="15. Force Majeure">
        <p>
          Neither party is liable for delay or failure to perform due to causes
          beyond reasonable control, including natural disasters, internet or
          infrastructure outages, or acts of government.
        </p>
      </LegalSection>

      <LegalSection title="16. Governing Law & Dispute Resolution">
        <p>
          These Terms are governed by the laws of [Governing Jurisdiction],
          without regard to conflict-of-law principles. Disputes arising under
          these Terms will be resolved through [Dispute Resolution Mechanism, e.g.
          binding arbitration or the courts of Governing Jurisdiction].
        </p>
      </LegalSection>

      <LegalSection title="17. Contact">
        <p>
          Questions about these Terms can be directed to{" "}
          <a href="mailto:cosecentai@gmail.com" className="text-foreground underline underline-offset-4">
            cosecentai@gmail.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
