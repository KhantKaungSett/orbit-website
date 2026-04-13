export default function Footer() {
  const quickLinks = [
    { label: "Packages", href: "#packages" },
    { label: "Add-ons", href: "#addons" },
    { label: "Projects", href: "#projects" },
    { label: "Terms", href: "#terms" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold tracking-[0.32em] text-[#f3d38a]">
              ORBIT
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/45">
              Creative & Marketing Solution
            </p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              Bold design. Clear strategy. Practical packages that help SME
              brands look stronger, feel more premium, and sell better.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/50">
              Quick Links
            </h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/70">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/50">
              Contact
            </h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/70">
              <a href="mailto:info@orbitmm.com" className="transition hover:text-white">
                info@orbitmm.com
              </a>
              <a href="tel:+959897011386" className="transition hover:text-white">
                +959 897011386
              </a>
              <a
                href="https://wa.me/959897011386"
                className="transition hover:text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/45">
          © 2026 Orbit Creative & Marketing Solution. All rights reserved.
        </div>
      </div>
    </footer>
  );
}