import { useState } from "react";

// Navigation links — edit this array to add/remove links
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Activities", href: "#activities" },
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Desktop row */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-ieee-blue rounded-lg flex items-center justify-center animate-pulse-ring">
              <span className="text-white font-bold text-xs">IEEE</span>
            </div>
            <div>
              <p className="font-bold text-sm text-ieee-blue leading-tight">
                IEEE RGPV
              </p>
              <p className="text-gray-500 text-xs leading-tight">
                Student Branch
              </p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-underline text-sm font-medium text-gray-600 hover:text-ieee-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#join"
              className="bg-ieee-blue text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-ieee-blue-dark transition-colors"
            >
              Join Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              // X icon
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-3 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-600 px-2 py-1 hover:text-ieee-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setMenuOpen(false)}
              className="bg-ieee-blue text-white text-sm font-semibold px-5 py-2 rounded-full text-center mt-1 hover:bg-ieee-blue-dark transition-colors"
            >
              Join Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
