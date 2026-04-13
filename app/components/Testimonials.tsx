const testimonials = [
  {
    name: 'Shwe Moe Fashion',
    type: 'Sample client scenario',
    quote:
      'Orbit helped our brand feel more premium and more consistent across Facebook content and promotions.',
  },
  {
    name: 'Mingalar Home Mart',
    type: 'Sample client scenario',
    quote:
      'The content plan gave us a clearer monthly direction instead of random posting and last-minute ideas.',
  },
  {
    name: 'Golden Tea Corner',
    type: 'Sample client scenario',
    quote:
      'The visual design made our business look more trustworthy and easier for customers to remember.',
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[#f3d38a]">
          Sample Client Scenarios
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
          Placeholder feedback for layout preview
        </h2>
        <p className="mt-4 text-white/55">
          These are sample testimonials for design preview only. Replace them with
          real client feedback later.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7"
          >
            <p className="text-lg leading-8 text-white/75">“{item.quote}”</p>
            <p className="mt-6 font-semibold text-[#f3d38a]">{item.name}</p>
            <p className="mt-1 text-sm uppercase tracking-[0.18em] text-white/40">
              {item.type}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}