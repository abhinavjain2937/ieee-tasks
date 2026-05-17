// Replace these with real team member names and photos from ieeergpv.in
const TEAM = [
  { initial: "C", role: "Chairperson", bg: "bg-ieee-blue", textColor: "text-white" },
  { initial: "V", role: "Vice Chair",  bg: "bg-gray-900",  textColor: "text-white" },
  { initial: "S", role: "Secretary",   bg: "bg-yellow-400", textColor: "text-gray-900" },
  { initial: "T", role: "Treasurer",   bg: "bg-green-500",  textColor: "text-white" },
];

function TeamCard({ initial, role, bg, textColor }) {
  return (
    <div className="bg-white rounded-2xl p-6 text-center card-lift border border-gray-100 shadow-sm">
      {/* Avatar circle with initial */}
      <div
        className={`w-16 h-16 ${bg} rounded-full flex items-center justify-center ${textColor} font-bold text-xl mx-auto mb-4`}
      >
        {initial}
      </div>
      <h3 className="font-bold text-gray-900 text-sm">{role}</h3>
      <p className="text-gray-400 text-xs mt-1">IEEE RGPV SB</p>
    </div>
  );
}

function Team() {
  return (
    <section id="team" className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-ieee-blue uppercase tracking-widest mb-3">
            Our People
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            The Core Team
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {TEAM.map((member) => (
            <TeamCard key={member.role} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
