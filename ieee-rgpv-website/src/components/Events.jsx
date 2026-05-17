const EVENTS = [
  {
    tag: "Workshop",
    tagColor: "text-blue-200",
    headerBg: "bg-ieee-blue",
    title: "Web Dev Bootcamp",
    subtitle: "React + Tailwind CSS",
    subtitleColor: "text-blue-200",
    date: "June 2026",
    desc: "Learn modern frontend development from scratch to deployment.",
  },
  {
    tag: "Hackathon",
    tagColor: "text-yellow-300",
    headerBg: "bg-gray-900",
    title: "IEEEXtreme 2026",
    subtitle: "24-hour coding challenge",
    subtitleColor: "text-gray-400",
    date: "October 2026",
    desc: "Compete globally with teams from 100+ countries simultaneously.",
  },
  {
    tag: "Guest Talk",
    tagColor: "text-yellow-800",
    headerBg: "bg-yellow-400",
    title: "AI & Future Tech",
    subtitle: "Guest Speaker Series",
    subtitleColor: "text-yellow-800",
    date: "July 2026",
    desc: "Industry experts share insights on machine learning and emerging tech.",
    titleColor: "text-gray-900",
  },
];

// Calendar SVG icon reused in each card
function CalendarIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

function EventCard({ tag, tagColor, headerBg, title, subtitle, subtitleColor, date, desc, titleColor }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-lift">
      {/* Coloured header */}
      <div className={`${headerBg} p-6`}>
        <p className={`${tagColor} text-xs font-semibold uppercase tracking-widest mb-1`}>
          {tag}
        </p>
        <h3 className={`font-bold text-lg ${titleColor ?? "text-white"}`}>{title}</h3>
        <p className={`${subtitleColor} text-sm mt-1`}>{subtitle}</p>
      </div>

      {/* White body */}
      <div className="bg-white p-5">
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
          <CalendarIcon />
          {date}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function Events() {
  return (
    <section id="events" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-ieee-blue uppercase tracking-widest mb-3">
            Upcoming
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Events &amp; Programs
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {EVENTS.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
