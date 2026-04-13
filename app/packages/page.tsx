'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const packages = [
  {
    name: 'Essential Presence',
    price: '550,000 MMK / month',
    subtitle: 'Best for new SMEs and local service brands',
    badge: 'Starter',
    items: [
      '6 still creatives',
      '2 short motion or reel edits',
      'Monthly content calendar',
      'Myanmar caption writing',
      'Basic page replies',
      'Monthly performance report',
    ],
    note: 'Monthly retainer • Minimum 3-month agreement',
  },
  {
    name: 'Growth Engine',
    price: '850,000 MMK / month',
    subtitle: 'Best for growing brands that need stronger visibility',
    badge: 'Most Popular',
    featured: true,
    items: [
      '8 still creatives',
      '4 short reels or motion edits',
      'Monthly content calendar',
      'Myanmar + English captions when needed',
      'Priority replies',
      'Monthly review meeting + 1 campaign setup support',
    ],
    note: 'Monthly retainer • Minimum 3-month agreement',
  },
  {
    name: 'Sales Accelerator',
    price: '1,250,000 MMK / month',
    subtitle: 'Best for established SMEs focused on inquiries and sales',
    badge: 'Advanced',
    items: [
      '10 still creatives',
      '6 short videos or reels',
      'Facebook + TikTok content plan',
      'Lead or message funnel support',
      'Priority replies',
      'Insight report + up to 2 campaign setups',
    ],
    note: 'Monthly retainer • Minimum 3-month agreement',
  },
];

const addOns = [
  'TikTok Booster',
  'TikTok Growth Add-on',
  'Design Desk Lite',
  'Design Desk Plus',
  'Community Care Upgrade',
  'Ads Management',
];

const motionUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: 'easeOut' as const },
};

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(243,211,138,0.12),transparent_30%),radial-gradient(circle_at_right,rgba(255,255,255,0.05),transparent_22%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-10 md:pb-24 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex rounded-full border border-[#f3d38a]/30 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-[#f3d38a]"
          >
            Premium Monthly Packages
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="mt-6 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl"
          >
            Three powerful package options designed for{' '}
            <span className="bg-gradient-to-r from-[#f3d38a] via-[#fff2c4] to-[#f3d38a] bg-clip-text text-transparent">
              visibility, engagement, and sales growth
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mt-6 max-w-3xl text-lg leading-8 text-white/68"
          >
            Choose the level that matches your current business stage, then scale
            with add-ons when needed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            {[
              ['Starter', 'Build a stronger first impression'],
              ['Growth', 'Improve consistency and engagement'],
              ['Sales', 'Support inquiry-driven business growth'],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-5"
              >
                <p className="text-sm font-semibold text-[#f3d38a]">{title}</p>
                <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section
        {...motionUp}
        className="mx-auto max-w-7xl px-6 py-20 md:px-10"
      >
        <div className="grid gap-8 xl:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative overflow-hidden rounded-[2.2rem] border p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] ${
                pkg.featured
                  ? 'border-[#f3d38a]/45 bg-gradient-to-b from-[#f3d38a]/16 via-[#111114] to-[#0c0c0f]'
                  : 'border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02]'
              }`}
            >
              {pkg.featured && (
                <div className="absolute right-5 top-5 rounded-full bg-[#f3d38a] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-black">
                  Best Choice
                </div>
              )}

              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/65">
                {pkg.badge}
              </div>

              <h2 className="mt-5 text-3xl font-semibold">{pkg.name}</h2>
              <p className="mt-3 min-h-[3.5rem] leading-7 text-white/62">
                {pkg.subtitle}
              </p>

              <div className="mt-6">
                <p className="text-4xl font-semibold text-[#f3d38a]">{pkg.price}</p>
                <p className="mt-2 text-sm text-white/45">{pkg.note}</p>
              </div>

              <div className="mt-8 space-y-3">
                {pkg.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-6 text-white/78"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className={`rounded-2xl px-5 py-3 font-semibold transition ${
                    pkg.featured
                      ? 'bg-[#f3d38a] text-black hover:-translate-y-0.5'
                      : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  Choose Package
                </a>

                <a
                  href="https://wa.me/959897011386"
                  className="rounded-2xl border border-green-400/30 bg-green-500/15 px-5 py-3 font-semibold text-green-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        {...motionUp}
        className="border-y border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#f3d38a]">
                Add-On Services
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Upgrade design quality, campaign performance, or channel reach
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
                Start with one monthly package, then add extra support when you are
                ready to scale more aggressively.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {addOns.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-white/10 bg-black/20 p-5 text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...motionUp}
        className="mx-auto max-w-7xl px-6 py-20 md:px-10"
      >
        <div className="rounded-[2.2rem] border border-[#f3d38a]/22 bg-gradient-to-b from-[#f3d38a]/12 to-white/[0.03] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#f3d38a]">
                Commercial Terms
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Clean, customer-friendly structure for easier approval
              </h2>
            </div>

            <div className="space-y-4 text-white/72">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                Monthly retainers are billed in advance and require a minimum 3-month agreement.
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                Ad spend, printing, production, and third-party costs are billed separately.
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                Orbit can support your next stage of growth with a package that matches your budget and business goal.
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}