import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Motonize LLC collects, uses, and protects information about visitors to motonize.com.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col flex-1">
      <header className="w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-sm">
        <nav className="max-w-4xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-lg tracking-wider text-gold-gradient"
          >
            MOTONIZE
          </Link>
          <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--gold-bright)]">
            ← Back home
          </Link>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-20 prose-legal">
        <h1 className="font-display text-4xl font-semibold text-[var(--foreground)] mb-2">
          Privacy Policy
        </h1>
        <p className="text-[var(--muted)] text-sm mb-8">
          Last updated: April 29, 2026
        </p>
        <div className="divider-gold mb-10" />

        <p>
          Motonize LLC (&ldquo;Motonize,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
          respects your privacy. This Privacy Policy describes how we collect, use, and protect
          information when you visit{" "}
          <a href="https://motonize.com">motonize.com</a> (the &ldquo;Site&rdquo;). It applies to
          this Site only — separate privacy policies apply to our individual products, including
          Lex Conquer, and are made available within those products.
        </p>

        <h2>1. Information we collect on this Site</h2>
        <p>
          We aim to collect as little information as possible. When you visit motonize.com, our
          hosting provider (Vercel) automatically receives standard web request data, including:
        </p>
        <ul>
          <li>IP address (anonymized for analytics where applicable)</li>
          <li>Browser type, operating system, and device characteristics</li>
          <li>Pages visited, referring URL, and timestamps</li>
        </ul>
        <p>
          This information is used solely to keep the Site secure, diagnose technical issues, and
          understand aggregate traffic patterns. We do not place advertising or third-party
          tracking pixels on this Site.
        </p>

        <h2>2. Information you provide</h2>
        <p>
          If you contact us at <a href="mailto:info@motonize.com">info@motonize.com</a>, we receive
          the email address and content you send. We use this only to respond to your inquiry and
          retain correspondence according to ordinary business practices.
        </p>

        <h2>3. Cookies</h2>
        <p>
          This Site uses minimal cookies — essential ones required for basic functionality (such
          as session management and security). We do not use third-party advertising or tracking
          cookies on this Site.
        </p>

        <h2>4. How we use information</h2>
        <p>We use the information described above to:</p>
        <ul>
          <li>Operate and secure the Site</li>
          <li>Respond to your communications</li>
          <li>Comply with applicable legal obligations</li>
          <li>Understand which content is useful to visitors (in aggregate)</li>
        </ul>
        <p>
          We do not sell, rent, or trade personal information. We do not use this Site&apos;s data
          to build advertising profiles.
        </p>

        <h2>5. Sharing</h2>
        <p>We share information only with:</p>
        <ul>
          <li>
            <strong>Service providers</strong> who help us operate the Site (such as our hosting
            provider), under contractual confidentiality and data-protection terms.
          </li>
          <li>
            <strong>Legal authorities</strong> when required by valid legal process, or to protect
            the rights, property, or safety of Motonize, our users, or the public.
          </li>
        </ul>

        <h2>6. Data retention</h2>
        <p>
          Server logs are retained for a limited period (typically 30–90 days) and then deleted or
          anonymized. Email correspondence is retained as long as needed to address the matter and
          for ordinary business records.
        </p>

        <h2>7. Your rights</h2>
        <p>
          Depending on where you live, you may have rights regarding your personal information,
          including the right to access, correct, delete, or restrict its use, and the right to
          object to processing. To exercise any of these rights, contact us at{" "}
          <a href="mailto:info@motonize.com">info@motonize.com</a> and we will respond within a
          reasonable time.
        </p>

        <h2>8. Children</h2>
        <p>
          This Site is not directed to children under 13, and we do not knowingly collect personal
          information from children under 13 through this Site. Privacy practices specific to our
          games are described in their respective in-product privacy policies.
        </p>

        <h2>9. International visitors</h2>
        <p>
          Motonize is based in the United States. If you visit from outside the U.S., your
          information will be transferred to and processed in the United States. By using the
          Site, you consent to this transfer.
        </p>

        <h2>10. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the
          &ldquo;Last updated&rdquo; date at the top of this page. Material changes will be
          highlighted on the homepage.
        </p>

        <h2>11. Contact</h2>
        <p>
          For privacy questions or requests, contact:
        </p>
        <p>
          Motonize LLC<br />
          1608 42nd St<br />
          Brooklyn, NY 11204<br />
          United States<br />
          <a href="mailto:info@motonize.com">info@motonize.com</a>
        </p>
      </main>

      <footer className="mt-auto border-t border-[var(--border)] bg-[var(--surface)]/40">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-10 flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-[var(--muted)]">
          <div className="font-display tracking-wider">
            © {new Date().getFullYear()} <span className="text-gold-gradient">MOTONIZE LLC</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[var(--gold-bright)] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[var(--gold-bright)] transition-colors">
              Terms
            </Link>
            <a
              href="mailto:info@motonize.com"
              className="hover:text-[var(--gold-bright)] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
