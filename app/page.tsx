import Footer from "./components/Footer";
const overview = [
  {
    title: "Visibility",
    text: "Build a premium brand presence customers remember.",
  },
  {
    title: "Engagement",
    text: "Use content that drives messages, trust, and repeat attention.",
  },
  {
    title: "Conversion",
    text: "Support campaigns that turn interest into real inquiries and sales.",
  },
];

const reasons = [
  "Elegant social media content that makes your brand look credible",
  "Localized Myanmar messaging that is easy for customers to understand",
  "Flexible packages for startups, growing brands, and sales-driven SMEs",
  "Practical support for content, design, TikTok, ads, POSM, and campaigns",
];

const packageOverview = [
  {
    name: "Essential Presence",
    price: "From 550,000 MMK",
    text: "Visibility for new and local brands",
  },
  {
    name: "Growth Engine",
    price: "From 850,000 MMK",
    text: "Stronger engagement and content consistency",
    featured: true,
  },
  {
    name: "Sales Accelerator",
    price: "From 1,250,000 MMK",
    text: "Sales support for inquiry-driven growth",
  },
];

const monthlyPackages = [
  {
    name: "Essential Presence",
    subtitle: "Best for new SMEs and local service brands",
    price: "550,000 MMK / month",
    deliverables: [
      "6 still creatives",
      "2 short motion or reel edits",
      "Monthly content calendar",
      "Myanmar caption writing",
      "Basic page replies",
      "Monthly performance report",
    ],
  },
  {
    name: "Growth Engine",
    subtitle: "Best for growing brands that need stronger visibility",
    price: "850,000 MMK / month",
    featured: true,
    deliverables: [
      "8 still creatives",
      "4 short reels or motion edits",
      "Monthly content calendar",
      "Myanmar + English captions when needed",
      "Priority replies",
      "Monthly review meeting + 1 campaign setup support",
    ],
  },
  {
    name: "Sales Accelerator",
    subtitle: "Best for established SMEs focused on inquiries and sales",
    price: "1,250,000 MMK / month",
    deliverables: [
      "10 still creatives",
      "6 short videos or reels",
      "Facebook + TikTok content plan",
      "Lead or message funnel support",
      "Priority replies",
      "Insight report + up to 2 campaign setups",
    ],
  },
];

const addOns = [
  {
    name: "TikTok Booster",
    price: "350,000 MMK / month",
    text: "Add trend-based short videos for more reach and awareness.",
  },
  {
    name: "TikTok Growth Add-on",
    price: "600,000 MMK / month",
    text: "Support a stronger TikTok content plan with better consistency.",
  },
  {
    name: "Design Desk Lite",
    price: "300,000 MMK / month",
    text: "Get regular promo visuals, flyers, and light campaign designs.",
  },
  {
    name: "Design Desk Plus",
    price: "500,000 MMK / month",
    text: "Get higher-volume design support with simple motion assets.",
  },
  {
    name: "Community Care Upgrade",
    price: "200,000 MMK / month",
    text: "Handle customer messages faster and improve page response.",
  },
  {
    name: "Ads Management",
    price: "15% of ad spend / min. 300,000 MMK",
    text: "Run campaigns with better targeting, optimization, and reporting.",
  },
];

const projectServices = [
  {
    name: "POSM Design Pack",
    price: "From 250,000 MMK",
    text: "Posters, standees, flyers, and in-store brand visuals.",
  },
  {
    name: "Store Launch POSM Pack",
    price: "From 500,000 MMK",
    text: "Design support for new branch openings and seasonal pushes.",
  },
  {
    name: "Media Planning & Buying",
    price: "12% of media spend / min. 400,000 MMK",
    text: "Billboards and media placement coordination with sourcing support.",
  },
  {
    name: "SME Event Activation Lite",
    price: "From 1,800,000 MMK",
    text: "Small launches and promotional events with setup coordination.",
  },
  {
    name: "Micro-Influencer Starter",
    price: "From 900,000 MMK",
    text: "Influencer selection, outreach, briefing, and reporting.",
  },
  {
    name: "Campaign Management Pro",
    price: "From 2,500,000 MMK",
    text: "Multi-channel concept, KOL coordination, and full campaign supervision.",
  },
];

const motionSupport = [
  "Animated promo posts",
  "Product highlight motion graphics",
  "Simple logo animation",
  "Campaign teaser edits",
  "Text-based promo motion assets",
  "Short social reels with branded movement",
];

const terms = [
  "Monthly retainers are billed in advance and require a minimum 3-month agreement.",
  "Project work starts with 50% advance payment. The balance is billed based on project scope and timeline.",
  "Two revision rounds are included unless stated otherwise in the quotation.",
  "Ad spend, printing, production, venue, talent, media placement, and third-party costs are not included in service fees.",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="orb-a absolute -left-16 top-10 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="orb-b absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="orb-c absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-amber-300/10 blur-3xl" />

        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10">
          <header className="mb-16 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold tracking-[0.32em] text-[#f3d38a]">
                ORBIT
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/45">
                Creative & Marketing Solution
              </p>
            </div>

            <nav className="flex flex-wrap gap-3 text-sm text-white/70">
              <a href="#packages" className="transition hover:text-white">
                Packages
              </a>
              <a href="#addons" className="transition hover:text-white">
                Add-ons
              </a>
              <a href="#projects" className="transition hover:text-white">
                Projects
              </a>
              <a href="#terms" className="transition hover:text-white">
                Terms
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>
          </header>

          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#f3d38a] backdrop-blur">
                Luxury Marketing Proposal for SME Brands
              </div>

              <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                Bold design. Clear strategy.{" "}
                <span className="bg-gradient-to-r from-fuchsia-400 via-white to-sky-400 bg-clip-text text-transparent">
                  Premium marketing support
                </span>{" "}
                that helps your brand look stronger and sell better.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                We do not only create content. We help your business look
                stronger, respond faster, and grow with a clear monthly plan.
                Designed for SME budgets, polished enough to position your brand
                with confidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#packages"
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
                >
                  Explore Packages
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/85 backdrop-blur transition hover:bg-white/10"
                >
                  Contact Orbit
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {overview.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
                  >
                    <p className="text-sm font-semibold text-[#f3d38a]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.28em] text-white/40">
                Why clients choose Orbit
              </p>

              <div className="mt-6 space-y-3">
                {reasons.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-6 text-white/75 transition hover:border-[#f3d38a]/20 hover:bg-black/30"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl bg-gradient-to-br from-fuchsia-500/20 via-white/5 to-sky-500/20 p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                  Sales Message
                </p>
                <p className="mt-3 text-lg leading-8 text-white/90">
                  Start with one monthly package, then add TikTok, ads, POSM, or
                  campaign support when you are ready to scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-white/45">
            Package Overview
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Choose the level that matches your current business stage.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {packageOverview.map((item) => (
            <div
              key={item.name}
              className={`rounded-[2rem] border p-7 transition hover:-translate-y-1 ${
                item.featured
                  ? "border-[#f3d38a]/30 bg-gradient-to-br from-[#f3d38a]/12 to-white/[0.04]"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >
              <h3 className="text-2xl font-semibold">{item.name}</h3>
              <p className="mt-4 text-3xl font-semibold text-[#f3d38a]">
                {item.price}
              </p>
              <p className="mt-4 leading-7 text-white/65">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="packages"
        className="border-y border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-white/45">
              Core Monthly Packages
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Three easy-to-sell options designed around visibility, engagement,
              and sales growth.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {monthlyPackages.map((pkg) => (
              <article
                key={pkg.name}
                className={`rounded-[2rem] border p-8 ${
                  pkg.featured
                    ? "border-[#f3d38a]/30 bg-gradient-to-br from-[#f3d38a]/14 via-white/[0.03] to-white/[0.02]"
                    : "border-white/10 bg-black/20"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{pkg.name}</h3>
                    <p className="mt-2 leading-7 text-white/60">
                      {pkg.subtitle}
                    </p>
                  </div>
                  {pkg.featured && (
                    <span className="rounded-full bg-[#f3d38a] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-black">
                      Most Popular
                    </span>
                  )}
                </div>

                <p className="mt-6 text-4xl font-semibold text-[#f3d38a]">
                  {pkg.price}
                </p>
                <p className="mt-2 text-sm text-white/45">
                  Monthly retainer • Minimum 3-month agreement
                </p>

                <div className="mt-8 space-y-3">
                  {pkg.deliverables.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm leading-6 text-white/75"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-6 text-white/45">
                  Ad spend, production, printing, and third-party costs are
                  billed separately.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="addons"
        className="mx-auto max-w-7xl px-6 py-20 md:px-10"
      >
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-white/45">
            Add-On Services
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Upgrade design quality, campaign performance, or channel reach.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {addOns.map((item) => (
            <article
              key={item.name}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">{item.name}</h3>
                  <p className="mt-4 leading-7 text-white/65">{item.text}</p>
                </div>
                <div className="rounded-2xl border border-[#f3d38a]/20 bg-[#f3d38a]/10 px-4 py-3 text-sm font-semibold text-[#f3d38a]">
                  {item.price}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="border-y border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-white/45">
              Project & Campaign Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              For launches, retail presence, activations, and higher-impact
              brand campaigns.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projectServices.map((item) => (
              <article
                key={item.name}
                className="rounded-[2rem] border border-white/10 bg-black/20 p-7 transition hover:-translate-y-1 hover:bg-black/30"
              >
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className="mt-4 text-2xl font-semibold text-[#f3d38a]">
                  {item.price}
                </p>
                <p className="mt-4 leading-7 text-white/65">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-white/45">
              Motion Content Support
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Lightweight motion design for stronger stopping power.
            </h2>
            <p className="mt-5 leading-8 text-white/65">
              We also support brands with motion-based content to make
              promotions feel more modern, premium, and attention-grabbing.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {motionSupport.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/8 bg-black/20 p-4 text-white/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            id="terms"
            className="rounded-[2rem] border border-[#f3d38a]/20 bg-gradient-to-br from-[#f3d38a]/10 to-white/[0.03] p-8"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-white/45">
              Commercial Terms
            </p>
            <div className="mt-6 space-y-4">
              {terms.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/8 bg-black/20 p-4 text-white/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 pb-24 md:px-10"
      >
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-white/45">
                Contact Orbit
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Let your brand look stronger, clearer, and more premium in every
                customer touchpoint.
              </h2>
              <p className="mt-5 leading-8 text-white/65">
                We are ready to support your next stage of growth with a package
                that matches your budget and business goal.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:info@orbitmm.com"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                info@orbitmm.com
              </a>
              <a
                href="tel:+959897011386"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/85"
              >
                +959 897011386
              </a>
              <a
                href="https://wa.me/959897011386"
                className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-6 py-3 text-sm font-medium text-emerald-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}