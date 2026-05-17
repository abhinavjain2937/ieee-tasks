// Edit these stats to match real IEEE RGPV data if available
const STATS = [
  { value: "500+", label: "Active Members" },
  { value: "50+",  label: "Events Hosted" },
  { value: "10+",  label: "Industry Partners" },
  { value: "8+",   label: "Awards Won" },
];

function StatCard({ value, label }) {
  return (
    <div className="stat-accent bg-white rounded-xl p-5 text-center shadow-sm">
      <p className="text-3xl font-extrabold text-ieee-blue">{value}</p>
      <p className="text-gray-500 text-sm mt-1 font-medium">{label}</p>
    </div>
  );
}

function Stats() {
  return (
    <section className="bg-gray-50 py-14 px-4 border-y border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
