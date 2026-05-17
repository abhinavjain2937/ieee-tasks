function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-ieee-blue via-ieee-blue-dark to-ieee-blue-darker pt-28 pb-24 px-4 overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-xs font-medium px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Actively Recruiting — Apply Before May 18
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5 animate-fade-up">
          Empowering <br />
          <span className="text-yellow-300">Future Engineers</span> <br />
          at RGPV
        </h1>

        {/* Subheading */}
        <p className="text-blue-100 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          IEEE RGPV Student Branch — building a community of innovators,
          researchers, and tech leaders at Rajiv Gandhi Proudyogiki
          Vishwavidyalaya, Bhopal.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#join"
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3 rounded-full transition-all text-sm shadow-lg"
          >
            Join IEEE RGPV →
          </a>
          <a
            href="#about"
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-3 rounded-full transition-all text-sm"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
