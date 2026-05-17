const HIGHLIGHTS = [
  { emoji: "✅", text: "Global network of 400,000+ professionals" },
  { emoji: "✅", text: "Access to IEEE Xplore — 5M+ research papers" },
  { emoji: "✅", text: "Official student branch at RGPV, Bhopal" },
];

const FEATURE_CARDS = [
  {
    emoji: "🎓",
    title: "Student-Led",
    desc: "Completely run by passionate students of RGPV",
    bg: "bg-blue-50",
    titleColor: "text-gray-800",
    descColor: "text-gray-500",
  },
  {
    emoji: "🌐",
    title: "Global Reach",
    desc: "Connected to IEEE chapters worldwide",
    bg: "bg-ieee-blue",
    titleColor: "text-white",
    descColor: "text-blue-100",
    mt: true,
  },
  {
    emoji: "💡",
    title: "Innovation Hub",
    desc: "Fostering creativity through projects & labs",
    bg: "bg-yellow-50",
    titleColor: "text-gray-800",
    descColor: "text-gray-500",
  },
  {
    emoji: "🤝",
    title: "Community",
    desc: "A strong network of passionate tech enthusiasts",
    bg: "bg-gray-900",
    titleColor: "text-white",
    descColor: "text-gray-400",
    mt: true,
  },
];

function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left — text content */}
          <div>
            <p className="text-sm font-semibold text-ieee-blue uppercase tracking-widest mb-3">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              What is IEEE RGPV <br /> Student Branch?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              The IEEE RGPV Student Branch is a student-run chapter of the{" "}
              <strong>Institute of Electrical and Electronics Engineers</strong>{" "}
              — the world's largest technical professional organization with
              over 400,000 members worldwide.
            </p>
            <p className="text-gray-600 leading-relaxed mb-7">
              We are dedicated to advancing technology for the benefit of
              humanity by organizing workshops, hackathons, technical talks,
              and connecting students with global industry opportunities.
            </p>

            {/* Highlight list */}
            <div className="flex flex-col gap-3">
              {HIGHLIGHTS.map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-ieee-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 2x2 mini feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {FEATURE_CARDS.map((card) => (
              <div
                key={card.title}
                className={`${card.bg} rounded-2xl p-6 card-lift ${card.mt ? "mt-6" : ""}`}
              >
                <p className="text-3xl mb-3">{card.emoji}</p>
                <h3 className={`font-bold text-sm mb-2 ${card.titleColor}`}>
                  {card.title}
                </h3>
                <p className={`text-xs leading-relaxed ${card.descColor}`}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
