export default function HomePage() {
  const services = [
    {
      title: "Brand Strategy",
      text: "Sharper positioning, clearer messaging, and a premium identity that feels expensive before you say a word.",
    },
    {
      title: "Content Production",
      text: "High-impact visuals, campaigns, and social-first creative built to look polished and perform fast.",
    },
    {
      title: "Launch Support",
      text: "From offers to rollout structure, we help you launch with momentum instead of random posting.",
    },
  ];

  const highlights = [
    "Premium visual direction",
    "Fast launch-ready structure",
    "Clean, conversion-focused layout",
    "Lightweight build-safe design",
  ];

  const stats = [
    { value: "01", label: "page focus" },
    { value: "03", label: "core services" },
    { value: "24/7", label: "premium presence" },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.22),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_26%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.16),transparent_24%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
          <header className="mb-16 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                Orbit Agency
              </p>
            </div>
            <nav className="hidden gap-8 text-sm text-white/70 md:flex">
              <a href="#services" className="transition hover:text-white">
                Services
              </a>
              <a href="#process" className="transition hover:text-white">
                Process
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>
          </header>

          <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                Flashy premium one-page presentation
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                We build{" "}
                <span className="bg-gradient-to-r from-fuchsia-400 via-white to-sky-400 bg-clip-text text-transparent">
                  sharp, premium
                </span>{" "}
                brand pages that look expensive and feel clear.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
                Orbit helps brands present themselves with confidence through
                refined strategy, premium creative, and clean digital
                experiences that are simple, stylish, and launch-ready.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
                >
                  Start a Project
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/85 backdrop-blur transition hover:bg-white/10"
                >
                  Explore Services
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/75 backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                      Premium Direction
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold">
                      Clean. Bold. Modern.
                    </h2>
                  </div>
                  <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                    2026
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-3xl bg-gradient-to-br from-fuchsia-500/25 via-white/10 to-sky-500/20 p-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/50">
                      Visual Positioning
                    </p>
                    <p className="mt-3 text-xl leading-8 text-white/90">
                      Premium presentation for brands that want to feel polished,
                      current, and memorable from the first screen.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-white/10 bg-black/20 p-4"
                      >
                        <div className="text-2xl font-semibold">{stat.value}</div>
                        <div className="mt-1 text-sm text-white/50">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-full bg-fuchsia-500/30 blur-3xl md:block" />
              <div className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-full bg-sky-500/25 blur-3xl md:block" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/45">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Built for brands that want a premium look with a practical structure.
            </h2>
          </div>
          <p className="max-w-xl text-white/60">
            Not noisy. Not messy. Just strong presentation, smart structure, and
            a better first impression.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm text-white/35">0{index + 1}</span>
                <span className="rounded-full bg-white/8 px-3 py-1 text-xs text-white/55">
                  Orbit
                </span>
              </div>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 leading-8 text-white/65">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-white/45">
            Process
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Simple flow. Premium result.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Clarify",
                text: "We define the message, offer, and visual direction so the page feels clear before it feels decorative.",
              },
              {
                step: "02",
                title: "Design",
                text: "We shape a polished one-page experience with premium hierarchy, contrast, spacing, and confidence.",
              },
              {
                step: "03",
                title: "Launch",
                text: "We keep the structure clean so you can publish quickly and improve from a strong starting point.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-black/20 p-6"
              >
                <div className="text-sm text-white/35">{item.step}</div>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-8 text-white/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-white/45">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Ready for a cleaner, stronger, more premium presence?
              </h2>
              <p className="mt-5 leading-8 text-white/65">
                Let’s turn your brand into something that feels elevated,
                structured, and worth paying attention to.
              </p>
            </div>

            <a
              href="mailto:hello@orbitagency.com"
              className="inline-flex rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-500 px-7 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
            >
              hello@orbitagency.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}