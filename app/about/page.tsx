'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const pillars = [
  {
    title: 'Premium Presentation',
    text: 'We help brands look stronger, clearer, and more credible through polished content and sharper visual direction.',
  },
  {
    title: 'Clear Strategy',
    text: 'We build monthly structure around visibility, engagement, and conversion so your marketing feels more intentional.',
  },
  {
    title: 'Practical Support',
    text: 'From content and motion to TikTok, ads, POSM, and campaigns, Orbit supports the work that helps brands grow.',
  },
];

const audience = [
  'Startups that need a stronger first impression',
  'Growing brands that want better consistency',
  'Sales-driven SMEs focused on inquiries and results',
  'Local service businesses that need clearer communication',
];

const values = [
  'Elegant social media content that makes your brand look credible',
  'Localized Myanmar messaging that is easy for customers to understand',
  'Flexible packages for different business stages',
  'Scalable support through add-ons and campaign services',
];

const motionUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: 'easeOut' as const },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(243,211,138,0.12),transparent_30%),radial-gradient(circle_at_right,rgba(255,255,255,0.05),transparent_24%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-10 md:pb-24 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex rounded-full border border-[#f3d38a]/30 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-[#f3d38a]"
          >
            About Orbit
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="mt-6 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl"
          >
            A premium marketing partner for{' '}
            <span className="bg-gradient-to-r from-[#f3d38a] via-[#fff2c4] to-[#f3d38a] bg-clip-text text-transparent">
              ambitious SME brands
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mt-6 max-w-3xl text-lg leading-8 text-white/68"
          >
            We do not only create content. We help your business look stronger,
            respond faster, and grow with a clearer monthly plan. Our proposal is
            designed for SME budgets, while the output is polished enough to
            position your brand with confidence.
          </motion.p>
        </div>
      </section>

      <motion.section
        {...motionUp}
        className="mx-auto max-w-7xl px-6 py-20 md:px-10"
      >
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f3d38a]">
            What Orbit Stands For
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Better image, better structure, better business confidence
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
            >
              <div className="h-10 w-10 rounded-2xl bg-[#f3d38a]/15 shadow-[0_0_30px_rgba(243,211,138,0.12)]" />
              <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-8 text-white/65">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        {...motionUp}
        className="border-y border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:px-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#f3d38a]">
              Who We Support
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Built for startups, growing brands, and sales-driven SMEs
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              You can start with one monthly package and add TikTok, ads, POSM, or
              campaign support when you are ready to scale.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {audience.map((item) => (
              <div
                key={item}
                className="rounded-[1.6rem] border border-white/10 bg-black/20 p-5 text-white/78"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        {...motionUp}
        className="mx-auto max-w-7xl px-6 py-20 md:px-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2.2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f3d38a]">
              Why Clients Choose Orbit
            </p>
            <div className="mt-6 space-y-4">
              {values.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/8 bg-black/20 p-4 text-white/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.2rem] border border-[#f3d38a]/22 bg-gradient-to-b from-[#f3d38a]/12 to-white/[0.03] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f3d38a]">
              Orbit Promise
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Marketing support that feels polished, practical, and scalable
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Orbit gives businesses a clean commercial structure and a clearer way
              to present themselves, helping teams approve faster and plan with
              more confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/packages"
                className="rounded-2xl bg-[#f3d38a] px-6 py-3.5 font-semibold text-black"
              >
                View Packages
              </a>
              <a
                href="/contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white"
              >
                Contact Orbit
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}