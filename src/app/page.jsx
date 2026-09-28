import CardLinkButton from '@/components/card/CardLinkButton';
import card from '../../data/config/card.json';

const TITLE = `${card.name} — Digital Business Card`;
const DESCRIPTION = `${card.title}. Resume, LinkedIn, GitHub, and Instagram — all in one place.`;

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function CardPage() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-white px-6"
      style={{
        paddingTop: 'max(3rem, env(safe-area-inset-top))',
        paddingBottom: 'max(3rem, env(safe-area-inset-bottom))',
      }}
    >
      <div className="w-full max-w-sm animate-fade-in">
        <section aria-label="Profile" className="flex flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent-500 text-2xl font-semibold text-white ring-4 ring-accent-50">
            {card.initials}
          </div>
          <h1 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink-900">
            {card.name}
          </h1>
          <p className="mt-1 text-[15px] font-medium text-accent-500">{card.title}</p>
          <p className="mx-auto mt-3 max-w-[280px] text-sm leading-relaxed text-ink-500">
            {card.tagline}
          </p>
        </section>

        <div className="mt-10 flex flex-col gap-8">
          <nav aria-label="Professional links">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-500">
              Professional
            </h2>
            <div className="flex flex-col gap-2.5">
              {card.professional.map((item) => (
                <CardLinkButton key={item.id} {...item} />
              ))}
            </div>
          </nav>

          <nav aria-label="Personal links">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-500">
              Personal
            </h2>
            <div className="flex flex-col gap-2.5">
              {card.personal.map((item) => (
                <CardLinkButton key={item.id} {...item} />
              ))}
            </div>
          </nav>
        </div>

        <footer className="mt-10 text-center text-[11px] text-ink-300">
          © {new Date().getFullYear()} {card.name}
        </footer>
      </div>
    </main>
  );
}
