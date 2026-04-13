'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import FloatingOrbs from './components/FloatingOrbs';
import Testimonials from './components/Testimonials';

const stats = [
  { number: '3', label: 'Core monthly packages' },
  { number: '6+', label: 'Add-on growth options' },
  { number: '6+', label: 'Project campaign services' },
];

const highlights = [
  'Elegant social media content that makes your brand look credible',
  'Localized Myanmar messaging that is easy for customers to understand',
  'Flexible packages for startups, growing brands, and sales-driven SMEs',
  'Practical support for content, design, TikTok, ads, POSM, and campaigns',
];

const motionUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: 'easeOut' as const },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <FloatingOrbs />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(243,211,138,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_25%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex rounded-full border border-[#f3d38a]/30 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-[#f3d38a] shadow-[0_0_40px_rgba(243,211,138,0.08)]"
              >
                Luxury Marketing For SME Brands
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-6 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl"
              >
                Bold design. Clear strategy.{' '}
                <span className="bg-gradient-to-r from-[#f3d38a] via-[#fff2c4] to-[#f3d38a] bg-clip-text text-transparent">
                  A premium digital presence
                </span>{' '}
                that makes your brand look stronger and sell better.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 max-w-2xl text-lg leading-8 text-white/70"
              >
                Orbit Creative & Marketing Solution helps ambitious brands look more
                premium, communicate more clearly, and grow with stronger content,
                campaign support, and a better monthly marketing structure.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link
                  href="/packages"
                  className="rounded-2xl bg-[#f3d38a] px-6 py-3.5 font-semibold text-black shadow-[0_12px_40px_rgba(243,211,138,0.18)] transition hover:-translate-y-0.5"
                >
                  Explore Packages
                </Link>

                <Link
                  href="/services"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  View Services
                </Link>

                <Link
                  href="/contact"
                  className="rounded-2xl border border-[#f3d38a]/20 bg-[#f3d38a]/10 px-6 py-3.5 font-semibold text-[#f3d38a] transition hover:bg-[#f3d38a]/15"
                >
                  Contact Orbit
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 grid gap-4 sm:grid-cols-3"
              >
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl"
                  >
                    <p className="text-3xl font-semibold text-[#f3d38a]">{item.number}</p>
                    <p className="mt-2 text-sm leading-6 text-white/60">{item.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-b from-[#f3d38a]/15 to-transparent blur-2xl" />
              <div className="relative rounded-[2.2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                <p className="text-sm uppercase tracking-[0.28em] text-white/40">
                  Premium Brand Advantage
                </p>

                <div className="mt-6 space-y-3">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.35 + index * 0.08 }}
                      className="rounded-2xl border border-white/8 bg-black/25 p-4 text-sm leading-6 text-white/75"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    ['Visibility', 'Premium image'],
                    ['Engagement', 'Clearer messaging'],
                    ['Conversion', 'Better action'],
                  ].map(([title, text]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-white/8 bg-white/[0.04] p-4"
                    >
                      <p className="text-sm font-semibold text-[#f3d38a]">{title}</p>
                      <p className="mt-2 text-sm text-white/55">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        {...motionUp}
        className="mx-auto max-w-7xl px-6 py-20 md:px-10"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Luxury Presentation',
              text: 'A darker, cleaner, more premium design style that makes your business feel stronger at first look.',
            },
            {
              title: 'Stronger Messaging',
              text: 'Clear structure and better content positioning so visitors understand your value faster.',
            },
            {
              title: 'Better Conversion',
              text: 'Package pages, contact pages, and action-focused buttons that guide visitors toward inquiry.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#f3d38a]/30 hover:bg-white/[0.06]"
            >
              <div className="h-10 w-10 rounded-2xl bg-[#f3d38a]/15 shadow-[0_0_30px_rgba(243,211,138,0.12)]" />
              <h2 className="mt-5 text-2xl font-semibold">{item.title}</h2>
              <p className="mt-4 leading-8 text-white/65">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        {...motionUp}
        className="border-y border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f3d38a]">
              Orbit Offer
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Practical support for content, design, TikTok, ads, POSM, and campaigns
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              From new brands to sales-driven SMEs, Orbit provides flexible support
              that helps businesses look more polished and move more confidently.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {[
              'Content & Design',
              'TikTok Growth',
              'Ads Management',
              'Campaign Support',
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.8rem] border border-white/10 bg-black/20 p-7 text-center text-lg font-semibold text-white/85"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <Testimonials />

      <motion.section
        {...motionUp}
        className="mx-auto max-w-7xl px-6 pb-24 pt-6 md:px-10"
      >
        <div className="rounded-[2.3rem] border border-[#f3d38a]/20 bg-gradient-to-b from-[#f3d38a]/12 to-white/[0.03] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#f3d38a]">
                Ready To Upgrade?
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Turn this website into a premium lead-generation machine
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                Next, we can upgrade your packages page, add a more luxurious footer,
                improve the contact page, and create stronger animated transitions
                across all pages.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                href="/packages"
                className="rounded-2xl bg-[#f3d38a] px-6 py-3.5 font-semibold text-black"
              >
                See Pricing
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}