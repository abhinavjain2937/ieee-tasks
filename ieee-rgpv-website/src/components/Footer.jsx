const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Activities", href: "#activities" },
  { label: "Events", href: "#events" },
  { label: "Join Us", href: "#join" },
];

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-ieee-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">IEEE</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">IEEE RGPV Student Branch</p>
                <p className="text-gray-500 text-xs">Bhopal, Madhya Pradesh</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Empowering students at RGPV in technology, innovation, and
              professional development since day one.
            </p>
          </div>

          {/* Quick links column */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm">
              <span>📍 RGPV Campus, Bhopal, MP</span>
              <a
                href="https://ieeergpv.in"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                🌐 ieeergpv.in
              </a>
              <span>📧 contact@ieeergpv.in</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} IEEE RGPV Student Branch. All rights
          reserved. | Institute of Electrical and Electronics Engineers
        </div>
      </div>
    </footer>
  );
}

export default Footer;
