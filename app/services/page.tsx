'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const coreServices = [
  {
    title: 'Content & Design',
    items: [
      'Still creatives',
      'Monthly content calendar',
      'Myanmar caption writing',
      'Myanmar + English captions when needed',
    ],
  },
  {
    title: 'Motion & Video',
    items: [
      'Short motion or reel edits',
      'Short videos or reels',
      'Trend-based content support',
      'Simple motion assets',
    ],
  },
  {
    title: 'Page & Reply Support',
    items: [
      'Basic page replies',
      'Priority replies',
      'Community care support',
      'Better customer response flow',
    ],
  },
  {
    title: 'Campaign & Growth',
    items: [
      'Campaign setup support',
      'Facebook + TikTok content plan',
      'Lead or message funnel support',
      'Insight reporting',
    ],
  },
];

const addOns = [
  {
    name: 'TikTok Booster',
    fee: '350,000 MMK / month',
    desc: 'Add trend-based short videos for more reach and awareness.',
  },
  {
    name: 'TikTok Growth Add-on',
    fee: '600,000 MMK / month',
    desc: 'Support a stronger TikTok content plan with better consistency.',
  },
  {
    name: 'Design Desk Lite',
    fee: '300,000 MMK / month',
    desc: 'Get regular promo visuals, flyers, and light campaign designs.',
  },
  {
    name: 'Design Desk Plus',
    fee: '500,000 MMK / month',
    desc: 'Get higher-volume design support with simple motion assets.',
  },
  {
    name: 'Community Care Upgrade',
    fee: '200,000 MMK / month',
    desc: 'Handle customer messages faster and improve page response.',
  },
  {
    name: 'Ads Management',
    fee: '15% of ad spend / min. 300,000 MMK',
    desc: 'Run campaigns with better targeting, optimization, and reporting.',
  },
];

const projectServices = [
  {
    name: 'POSM Design Pack',
    fee: 'From 250,000 MMK',
    desc: 'Posters, standees, flyers, and in-store brand visuals.',
  },
  {
    name: 'Store Launch POSM Pack',
    fee: 'From 500,000 MMK',
    desc: 'Design support for new branch openings and seasonal pushes.',
  },
  {
    name: 'Media Planning & Buying',
    fee: '12% of media spend / min. 400,000 MMK',
    desc: 'Billboards and media placement coordination with sourcing support.',
  },
  {
    name: 'SME Event Activation Lite',
    fee: 'From 1,800,000 MMK',
    desc: 'Small launches and promotional events with setup coordination.',
  },
  {
    name: 'Micro-Influencer Starter',
    fee: 'From 900,000 MMK',
    desc: 'Influencer selection, outreach, briefing, and reporting.',
  },
  {
    name: 'Campaign Management Pro',
    fee: 'From 2,500,000 MMK',
    desc: 'Multi-channel concept, KOL coordination, and full campaign supervision.',
  },
];

const motionUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: 'easeOut' as const },
};

export default function ServicesPage() {
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
            Premium Marketing Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="mt-6 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl"
          >
            Practical support for{' '}
            <span className="bg-gradient-to-r from-[#f3d38a] via-[#fff2c4] to-[#f3d38a] bg-clip-text text-transparent">
              content, design, TikTok, ads, POSM, and campaigns
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mt-6 max-w-3xl text-lg leading-8 text-white/68"
          >
            Orbit helps businesses look stronger, respond faster, and grow with a
            clearer monthly marketing structure.
          </motion.p>
        </div>
      </section>

      <motion.section
        {...motionUp}
        className="mx-auto max-w-7xl px-6 py-20 md:px-10"
      >
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f3d38a]">
            Core Services
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Stronger presentation, stronger consistency, stronger growth support
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {coreServices.map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
            >
              <div className="h-10 w-10 rounded-2xl bg-[#f3d38a]/15 shadow-[0_0_30px_rgba(243,211,138,0.12)]" />
              <h3 className="mt-5 text-2xl font-semibold">{service.title}</h3>

              <div className="mt-5 space-y-3">
                {service.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-6 text-white/75"
                  >
                    {item}
                  </div>
                ))}
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
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f3d38a]">
              Add-On Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Upgrade design quality, campaign performance, or channel reach
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {addOns.map((item) => (
              <div
                key={item.name}
                className="rounded-[2rem] border border-white/10 bg-black/20 p-7"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">{item.name}</h3>
                    <p className="mt-4 max-w-xl leading-7 text-white/65">
                      {item.desc}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#f3d38a]/20 bg-[#f3d38a]/10 px-4 py-3 text-sm font-semibold text-[#f3d38a]">
                    {item.fee}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        {...motionUp}
        className="mx-auto max-w-7xl px-6 py-20 md:px-10"
      >
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f3d38a]">
            Project & Campaign Services
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            For launches, retail presence, activations, and higher-impact campaigns
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projectServices.map((item) => (
            <div
              key={item.name}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7"
            >
              <h3 className="text-2xl font-semibold">{item.name}</h3>
              <p className="mt-4 text-2xl font-semibold text-[#f3d38a]">
                {item.fee}
              </p>
              <p className="mt-4 leading-7 text-white/65">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        {...motionUp}
        className="mx-auto max-w-7xl px-6 pb-24 md:px-10"
      >
        <div className="rounded-[2.2rem] border border-[#f3d38a]/22 bg-gradient-to-b from-[#f3d38a]/12 to-white/[0.03] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#f3d38a]">
                Ready To Scale
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Start with one monthly package, then add support when you need more reach
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                Begin with the package that matches your current business stage,
                then add TikTok, ads, POSM, or campaign support as your growth needs increase.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">
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