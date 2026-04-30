import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lex Conquer",
  description:
    "Lex Conquer is a multiplayer territory-control word game from Motonize. Spell on a grid to claim tiles, fortify bases, and outlast up to five opponents in real-time Blitz or turn-based campaigns.",
  openGraph: {
    title: "Lex Conquer · Motonize",
    description:
      "A multiplayer territory-control word game. Coming 2026 to iOS and Android.",
    images: ["/lex-conquer-icon.png"],
  },
};

const screenshots = [
  {
    src: "/screenshots/01-splash.png",
    caption: "Splash",
    description: "Crown the realm.",
  },
  {
    src: "/screenshots/02-lobby.png",
    caption: "Home base",
    description: "Track your rank, RP, and active campaigns.",
  },
  {
    src: "/screenshots/03-pick-battlefield.png",
    caption: "Pick your battlefield",
    description: "Siege, Capture-the-Base, and more — across grid sizes from 5×5 to 10×10.",
  },
  {
    src: "/screenshots/04-gameplay.png",
    caption: "Spell to claim",
    description: "Build words on the grid, lock in your color, and push the borders of your territory.",
  },
  {
    src: "/screenshots/05-promotion.png",
    caption: "Rise through the ranks",
    description: "Ten ranks of progression, from Recruit to Conqueror Supreme.",
  },
  {
    src: "/screenshots/06-themes.png",
    caption: "Make it yours",
    description: "Unlock theme packs that reskin every rank — from medieval crests to modern warriors.",
  },
  {
    src: "/screenshots/07-groups.jpeg",
    caption: "Build your faction",
    description: "Create a private group with family and friends. Chat between matches and compete inside your own circle.",
  },
  {
    src: "/screenshots/08-tournaments.PNG",
    caption: "Run your own tournaments",
    description: "Bracket-style tournaments inside your faction. Set the mode, grid size, and entry fee — winner takes the pot.",
  },
];

const features = [
  { label: "Players per match", value: "2–6" },
  { label: "Grid sizes", value: "5×5 to 10×10" },
  { label: "Modes", value: "Blitz · Campaign · Capture-the-Base" },
  { label: "Platforms", value: "iOS · Android" },
];

export default function LexConquerPage() {
  return (
    <div className="flex flex-col flex-1">
      <header className="w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-sm sticky top-0 z-10">
        <nav className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-lg tracking-wider text-gold-gradient"
          >
            MOTONIZE
          </Link>
          <Link
            href="/"
            className="text-sm text-[var(--muted)] hover:text-[var(--gold-bright)] transition-colors"
          >
            ← Back to studio
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-glow border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 pt-16 pb-20 sm:pt-24 sm:pb-24">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12">
            <div className="flex-shrink-0">
              <Image
                src="/lex-conquer-icon.png"
                alt="Lex Conquer app icon"
                width={160}
                height={160}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl shadow-2xl"
                priority
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                <span className="text-xs uppercase tracking-widest text-[var(--gold-bright)] border border-[var(--gold-bright)]/40 rounded-full px-3 py-1">
                  Coming 2026
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl font-bold text-gold-gradient leading-tight">
                Lex Conquer
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-[var(--foreground)] font-light">
                A multiplayer territory war fought one word at a time.
              </p>
              <p className="mt-5 text-base text-[var(--muted)] leading-relaxed max-w-2xl">
                Spell words on a grid to claim tiles. Fortify your bases. Crush rivals in
                real-time Blitz, or out-think them in turn-based Campaigns. Two to six players,
                multiple game modes, and ten ranks of progression. Form private factions with
                family and friends, chat between matches, and run your own tournaments — for
                players who want every move to matter.
              </p>
            </div>
          </div>

          {/* Quick facts row */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] rounded-xl overflow-hidden">
            {features.map((f) => (
              <div
                key={f.label}
                className="bg-[var(--surface)] px-5 py-4 text-center sm:text-left"
              >
                <div className="text-[10px] uppercase tracking-widest text-[var(--gold-bright)] mb-1">
                  {f.label}
                </div>
                <div className="text-sm sm:text-base text-[var(--foreground)] font-medium">
                  {f.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-20 sm:py-24">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--foreground)] mb-3">
            A look inside
          </h2>
          <div className="divider-gold mb-12 w-24" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {screenshots.map((s, i) => (
              <figure key={s.src} className="group">
                <div className="card card-hover p-3 mb-4">
                  <div className="relative aspect-[1206/2622] w-full overflow-hidden rounded-lg bg-black">
                    <Image
                      src={s.src}
                      alt={s.caption}
                      fill
                      sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                      className="object-contain"
                      priority={i < 2}
                    />
                  </div>
                </div>
                <figcaption className="text-center sm:text-left">
                  <div className="text-xs uppercase tracking-widest text-[var(--gold-bright)] mb-1">
                    {String(i + 1).padStart(2, "0")} · {s.caption}
                  </div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {s.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Coming soon CTA */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 py-20 sm:py-24 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--foreground)] mb-3">
            Launching 2026
          </h2>
          <div className="divider-gold mb-8 mx-auto w-24" />
          <p className="text-[var(--muted)] text-lg leading-relaxed mb-8">
            Lex Conquer is in active development at{" "}
            <Link href="/" className="text-[var(--gold-bright)] hover:underline">
              Motonize
            </Link>
            . App Store and Google Play links go live at launch. To be notified, drop us a line —
            we&apos;ll send a single email when it&apos;s ready.
          </p>
          <a
            href="mailto:info@motonize.com?subject=Notify me when Lex Conquer launches"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[var(--gold-bright)] via-[var(--gold)] to-[var(--gold-soft)] text-black font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            Notify me at launch →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-[var(--surface)]/40">
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
