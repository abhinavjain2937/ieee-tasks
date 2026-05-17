const ACTIVITIES = [
  {
    emoji: "🖥️",
    title: "Technical Workshops",
    desc: "Hands-on sessions on AI, IoT, Web Dev, Embedded Systems, and more.",
    bg: "bg-blue-50",
  },
  {
    emoji: "⚡",
    title: "Hackathons",
    desc: "24–48 hour innovation sprints to build real solutions to real problems.",
    bg: "bg-yellow-50",
  },
  {
    emoji: "🎤",
    title: "Expert Talks",
    desc: "Guest lectures by industry leaders, researchers, and IEEE fellows.",
    bg: "bg-green-50",
  },
  {
    emoji: "📄",
    title: "Research Support",
    desc: "Guidance on publishing papers and accessing IEEE Xplore digital library.",
    bg: "bg-purple-50",
  },
  {
    emoji: "🏆",
    title: "Competitions",
    desc: "Represent RGPV at national and international IEEE competitions.",
    bg: "bg-red-50",
  },
  {
    emoji: "🤝",
    title: "Networking",
    desc: "Connect with alumni, professionals, and peers across IEEE's global network.",
    bg: "bg-orange-50",
  },
];

function ActivityCard({ emoji, title, desc, bg }) {
  return (
    <div className="bg-white rounded-2xl p-7 card-lift border border-gray-100 shadow-sm">
      <div className={`w-14 h-14 ${bg} rounded-xl flex items-center justify-center text-2xl mb-5`}>
        {emoji}
      </div>
      <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function Activities() {
  return (
    <section id="activities" className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-ieee-blue uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Core Activities
          </h2>
        </div>

        {/* 3-column responsive grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ACTIVITIES.map((activity) => (
            <ActivityCard key={activity.title} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Activities;
