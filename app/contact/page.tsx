'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const motionUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: 'easeOut' as const },
};

export default function ContactPage() {
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
            Contact Orbit
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="mt-6 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl"
          >
            Let your brand look{' '}
            <span className="bg-gradient-to-r from-[#f3d38a] via-[#fff2c4] to-[#f3d38a] bg-clip-text text-transparent">
              stronger, clearer, and more premium
            </span>{' '}
            in every customer touchpoint.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mt-6 max-w-3xl text-lg leading-8 text-white/68"
          >
            We are ready to support your next stage of growth with a package that
            matches your budget and business goal.
          </motion.p>
        </div>
      </section>

      <motion.section
        {...motionUp}
        className="mx-auto max-w-7xl px-6 py-20 md:px-10"
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2.2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f3d38a]">
              Direct Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Talk to Orbit directly
            </h2>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                  Email
                </p>
                <p className="mt-2 text-lg font-medium text-white/85">
                  info@orbitmm.com
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                  Phone
                </p>
                <p className="mt-2 text-lg font-medium text-white/85">
                  +959 897011386
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                  Best For
                </p>
                <p className="mt-2 text-lg font-medium text-white/85">
                  Startups, growing brands, and sales-driven SMEs
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2.2rem] border border-[#f3d38a]/22 bg-gradient-to-b from-[#f3d38a]/12 to-white/[0.03] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f3d38a]">
              Quick Actions
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Start the conversation faster
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
              Choose the easiest way to contact Orbit for your proposal, package
              discussion, or campaign inquiry.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:info@orbitmm.com"
                className="rounded-2xl bg-[#f3d38a] px-6 py-3.5 font-semibold text-black shadow-[0_12px_40px_rgba(243,211,138,0.18)] transition hover:-translate-y-0.5"
              >
                Email Us
              </a>

              <a
                href="tel:+959897011386"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/959897011386"
                className="rounded-2xl border border-green-400/30 bg-green-500/15 px-6 py-3.5 font-semibold text-green-300 transition hover:bg-green-500/20"
              >
                WhatsApp
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ['Fast Response', 'Direct contact'],
                ['Clear Direction', 'Package guidance'],
                ['Premium Support', 'Growth-focused help'],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <p className="font-semibold">{title}</p>
                  <p className="mt-2 text-sm text-white/55">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...motionUp}
        className="mx-auto max-w-7xl px-6 pb-24 md:px-10"
      >
        <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f3d38a]">
            Proposal Reminder
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Orbit helps brands look stronger and sell better
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/65">
            Start with one monthly package and add TikTok, ads, POSM, or campaign
            support when you are ready to scale.
          </p>
        </div>
      </motion.section>
    </div>
  );
}