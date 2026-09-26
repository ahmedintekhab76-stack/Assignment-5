import { useState } from "react";
import logo from "../assets/logo-text.png";
import hamburgerIcon from "../assets/hamburger.png";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      {/* Desktop / tablet layout: logo left, links center, auth right */}
      <div className="mx-auto hidden max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:flex lg:px-8">
        <a href="#home" className="flex items-center">
          <img src={logo} alt="Dev Stack" className="h-7 w-auto" />
        </a>

        <nav className="flex items-center gap-8 text-sm font-medium text-slate-700">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={
                link === "Home"
                  ? "text-brand-gradient font-semibold"
                  : "hover:text-slate-900 transition-colors"
              }
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="#signin"
            className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
          >
            Sign In
          </a>
          <a
            href="#signup"
            className="bg-brand-gradient rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile layout: hamburger left, logo center, auth buttons right */}
      <div className="grid grid-cols-3 items-center px-4 py-3 md:hidden">
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="w-fit"
        >
          <img src={hamburgerIcon} alt="" className="h-6 w-6" />
        </button>

        <a href="#home" className="flex justify-center">
          <img src={logo} alt="Dev Stack" className="h-6 w-auto" />
        </a>

        <div className="flex min-w-0 items-center justify-end gap-2">
          <a href="#signin" className="whitespace-nowrap text-xs font-medium text-slate-700">
            Sign In
          </a>
          <a
            href="#signup"
            className="bg-brand-gradient whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold text-white"
          >
            Sign Up
          </a>
        </div>
      </div>

      {isMobileMenuOpen && <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />}
    </header>
  );
}

function MobileMenu({ onClose }) {
  return (
    <div className="md:hidden border-t border-slate-100 bg-white px-4 pb-4 pt-3">
      <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700">
        {NAV_LINKS.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={onClose} className="py-1">
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
}
