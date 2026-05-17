const REASONS = [
  {
    emoji: "📚",
    title: "Learn & Grow",
    desc: "Access IEEE Xplore, online courses, and certification programs.",
  },
  {
    emoji: "💼",
    title: "Career Boost",
    desc: "IEEE membership is respected by top employers globally.",
  },
  {
    emoji: "🌍",
    title: "Global Network",
    desc: "Connect with engineers and researchers from 160+ countries.",
  },
];

function WhyJoin() {
  return (
    <section id="join" className="py-20 px-4 bg-ieee-blue">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">
          Why Join
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
          Be Part of Something Bigger
        </h2>
        <p className="text-blue-100 text-base mb-12 max-w-xl mx-auto">
          IEEE membership opens doors to global opportunities, mentorship, and
          a career edge that sets you apart from the rest.
        </p>

        {/* 3 reason cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="bg-white/10 border border-white/10 rounded-2xl p-6 text-left"
            >
              <p className="text-2xl mb-3">{reason.emoji}</p>
              <h3 className="text-white font-bold text-sm mb-2">{reason.title}</h3>
              <p className="text-blue-200 text-xs leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="https://ieeergpv.in"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-10 py-3.5 rounded-full text-sm shadow-xl transition-all"
        >
          Apply to Join IEEE RGPV →
        </a>
      </div>
    </section>
  );
}

export default WhyJoin;
