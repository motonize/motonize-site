import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing the use of motonize.com and content published by Motonize LLC.",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-[var(--muted)] text-sm mb-8">
          Last updated: April 29, 2026
        </p>
        <div className="divider-gold mb-10" />

        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of{" "}
          <a href="https://motonize.com">motonize.com</a> (the &ldquo;Site&rdquo;), operated by
          Motonize LLC (&ldquo;Motonize,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;). Separate
          terms apply to our individual products, including Lex Conquer, and are presented within
          those products. By using this Site, you agree to these Terms.
        </p>

        <h2>1. Use of the Site</h2>
        <p>
          You may use the Site for lawful, personal, and informational purposes. You agree not to:
        </p>
        <ul>
          <li>Violate any applicable law or regulation</li>
          <li>Interfere with the Site&apos;s operation, security, or availability</li>
          <li>Attempt to access systems or data not made available to you</li>
          <li>Scrape, copy, or republish substantial portions of the Site without permission</li>
          <li>Impersonate Motonize or any other party</li>
        </ul>

        <h2>2. Intellectual property</h2>
        <p>
          All content on the Site — including text, graphics, logos, the Motonize name and brand,
          the Lex Conquer name and brand, screenshots, and software — is owned by Motonize LLC or
          its licensors and is protected by U.S. and international copyright, trademark, and other
          intellectual-property laws. No license is granted to you by your use of the Site except
          the limited right to view it as described in Section 1.
        </p>
        <p>
          &ldquo;Motonize,&rdquo; &ldquo;Lex Conquer,&rdquo; and the associated logos are
          trademarks or service marks of Motonize LLC. You may not use these marks without our
          prior written consent.
        </p>

        <h2>3. Forward-looking statements</h2>
        <p>
          The Site may contain statements about our games, plans, or intentions, including release
          dates and feature descriptions. These statements reflect our current expectations and
          are subject to change. Actual results may differ. We make no commitment that any
          unreleased product will be released or will function as described.
        </p>

        <h2>4. External links</h2>
        <p>
          The Site may contain links to third-party websites (such as the Apple App Store or
          Google Play). We do not control these sites and are not responsible for their content,
          terms, or privacy practices. Your use of any third-party site is subject to that site&apos;s
          own terms and policies.
        </p>

        <h2>5. Disclaimers</h2>
        <p>
          The Site is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. To
          the fullest extent permitted by law, Motonize disclaims all warranties of any kind,
          whether express or implied, including warranties of merchantability, fitness for a
          particular purpose, non-infringement, and availability or accuracy of content.
        </p>

        <h2>6. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Motonize and its officers, employees, and
          contractors will not be liable for any indirect, incidental, special, consequential, or
          punitive damages, or any loss of profits, revenues, data, or goodwill, arising from your
          use of (or inability to use) the Site.
        </p>

        <h2>7. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold Motonize harmless from any claims, damages,
          liabilities, and expenses (including reasonable attorneys&apos; fees) arising out of
          your use of the Site or your violation of these Terms.
        </p>

        <h2>8. Changes to the Site or Terms</h2>
        <p>
          We may modify, suspend, or discontinue the Site (or any part of it) at any time without
          notice. We may also revise these Terms from time to time; the revised version becomes
          effective when posted, and the &ldquo;Last updated&rdquo; date will reflect the change.
          Continued use of the Site after a change constitutes acceptance of the revised Terms.
        </p>

        <h2>9. Governing law</h2>
        <p>
          These Terms are governed by the laws of the State of New York, without regard to its
          conflict-of-laws principles. Any dispute arising out of or relating to these Terms or
          the Site will be brought exclusively in the state or federal courts located in Kings
          County, New York, and you consent to personal jurisdiction in those courts.
        </p>

        <h2>10. Contact</h2>
        <p>
          For questions about these Terms, contact:
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
