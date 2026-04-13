import Link from 'next/link';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/packages', label: 'Packages' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040406]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8">
            <p className="text-xl font-semibold tracking-[0.28em] text-[#f3d38a]">
              ORBIT
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/40">
              Creative & Marketing Solution
            </p>

            <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
              Let your brand look stronger, clearer, and more premium.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Premium marketing support for startups, growing brands, and
              sales-driven SMEs.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:info@orbitmm.com"
                className="rounded-2xl bg-[#f3d38a] px-6 py-3.5 font-semibold text-black transition hover:-translate-y-0.5"
              >
                Email Us
              </a>
              <a
                href="https://wa.me/959897011386"
                className="rounded-2xl border border-green-400/30 bg-green-500/15 px-6 py-3.5 font-semibold text-green-300 transition hover:bg-green-500/20"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-[#f3d38a]">
                Quick Links
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white/70 transition hover:translate-x-1 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-[#f3d38a]">
                Contact
              </p>

              <div className="mt-6 space-y-4 text-white/70">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                    Email
                  </p>
                  <p className="mt-1">info@orbitmm.com</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                    Phone
                  </p>
                  <p className="mt-1">+959 897011386</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                    Best For
                  </p>
                  <p className="mt-1">
                    Startups, growing brands, and SME marketing support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Orbit Creative & Marketing Solution. All rights reserved.</p>
          <p>Bold design. Clear strategy. Stronger brand presence.</p>
        </div>
      </div>
    </footer>
  );
}