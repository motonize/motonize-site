import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Top nav */}
      <header className="w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-sm sticky top-0 z-10">
        <nav className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-lg tracking-wider text-gold-gradient"
          >
            MOTONIZE
          </Link>
          <div className="hidden sm:flex items-center gap-8 text-sm text-[var(--muted)]">
            <a href="#about" className="hover:text-[var(--gold-bright)] transition-colors">
              About
            </a>
            <a href="#games" className="hover:text-[var(--gold-bright)] transition-colors">
              Games
            </a>
            <a href="#contact" className="hover:text-[var(--gold-bright)] transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-glow">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 pt-24 pb-20 sm:pt-32 sm:pb-28 text-center">
          <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-wide text-gold-gradient leading-tight">
            Motonize
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-[var(--foreground)] font-light">
            Where motto meets method.
          </p>
          <div className="divider-gold mt-10 mb-10 mx-auto w-32" />
          <p className="text-base sm:text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
            <span className="text-[var(--foreground)] font-medium">Motonize</span>{" "}
            <span className="italic">(n.)</span> — <em className="text-[var(--gold-bright)] not-italic">moto</em>{" "}
            + <em className="text-[var(--gold-bright)] not-italic">organize</em>. A mobile games studio
            crafting strategic experiences with intent and rigor. Our first title,{" "}
            <span className="text-[var(--foreground)] font-medium">Lex Conquer</span>, launches in 2026.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--foreground)] mb-3">
            About the studio
          </h2>
          <div className="divider-gold mb-10 w-24" />
          <div className="space-y-6 text-[var(--muted)] text-lg leading-relaxed">
            <p>
              Motonize was founded on the belief that the best games are not the loudest — they're
              the ones that reward thinking. Every mechanic earns its place. Every screen has a
              reason. Every match should leave a player a little sharper than when they started.
            </p>
            <p>
              Our work centers on{" "}
              <span className="text-[var(--foreground)]">strategic mobile games</span> — titles where
              skill compounds, where short sessions still demand intent, and where the meta-game
              evolves alongside the player. We design for people who would rather think than tap.
            </p>
            <p>
              The name <span className="text-[var(--gold-bright)] font-medium">Motonize</span> blends{" "}
              <em>motto</em> (a guiding principle) with <em>organize</em> (the discipline to ship
              that principle as a product). It's how we work: principled at the start, methodical
              through to release, and committed long after launch.
            </p>
          </div>
        </div>
      </section>

      {/* Games */}
      <section id="games" className="border-t border-[var(--border)] bg-[var(--surface)]/40">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--foreground)] mb-3">
            Our games
          </h2>
          <div className="divider-gold mb-10 w-24" />

          <div className="card card-hover p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
              <div className="flex-shrink-0">
                <Image
                  src="/lex-conquer-icon.png"
                  alt="Lex Conquer app icon"
                  width={128}
                  height={128}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl shadow-xl"
                  priority
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--foreground)]">
                    Lex Conquer
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-[var(--gold-bright)] border border-[var(--gold-bright)]/40 rounded-full px-3 py-1">
                    Coming 2026
                  </span>
                </div>
                <p className="text-[var(--muted)] leading-relaxed mb-4">
                  A multiplayer territory-control word game. Spell on a grid to claim tiles, fortify
                  bases, and outlast up to nine opponents in real-time Blitz or turn-based campaigns.
                  Strategic depth meets word craft — for players who want every move to matter.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-bright)]" />
                    iOS
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-bright)]" />
                    Android
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-bright)]" />
                    2–10 players
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-bright)]" />
                    Real-time + turn-based
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-[var(--muted)]/70 italic">
            More titles in development. Studio updates announced first to subscribers at{" "}
            <a
              href="mailto:info@motonize.com"
              className="text-[var(--gold-bright)] hover:underline"
            >
              info@motonize.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--foreground)] mb-3">
            Contact
          </h2>
          <div className="divider-gold mb-10 w-24" />

          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-[var(--gold-bright)] mb-3">
                General inquiries
              </h3>
              <a
                href="mailto:info@motonize.com"
                className="text-xl text-[var(--foreground)] hover:text-[var(--gold-bright)] transition-colors"
              >
                info@motonize.com
              </a>
              <p className="text-[var(--muted)] mt-3 leading-relaxed">
                Press, partnerships, business development, and general questions about the studio
                or our games.
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-[var(--gold-bright)] mb-3">
                Mailing address
              </h3>
              <address className="not-italic text-[var(--foreground)] leading-relaxed">
                Motonize LLC
                <br />
                1608 42nd St
                <br />
                Brooklyn, NY 11204
                <br />
                United States
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
