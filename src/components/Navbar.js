import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import safarilinklogo from "../assets/safarilinklogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) =>
    location.pathname === path ? "text-yellow-300" : "text-white/90";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
      border-b border-red-950/40
      ${
        scrolled
          ? "bg-gradient-to-r from-blue-950/85 via-red-950/85 to-blue-950/85 shadow-2xl py-2"
          :  "bg-gradient-to-r from-sky-900 to-red-900 py-4"
      }`}
    >
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={safarilinklogo}
              alt="Safari Logo"
              className="w-10 h-10 rounded-full object-cover shadow-md"
            />
            <span className="text-lg font-bold text-yellow-300">
              Amboseli Link Safari
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">

            <Link className="hover:text-yellow-300 text-white/90" to="/">
              Home
            </Link>

            <Link className="hover:text-yellow-300 text-white/90" to="/destinations">
              Destinations
            </Link>

            <Link className="hover:text-yellow-300 text-white/90" to="/gallery">
              Gallery
            </Link>

            <Link className="hover:text-yellow-300 text-white/90" to="/vehicles">
              Vehicles
            </Link>

            <Link className="hover:text-yellow-300 text-white/90" to="/contact">
              Contact
            </Link>

            <a
              href="https://wa.me/254724605140"
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2 rounded-full font-semibold transition"
            >
              Book Safari
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 transition-opacity md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm z-50
        transform transition-transform duration-500 md:hidden flex flex-col
        bg-gradient-to-b from-red-950 to-red-900 shadow-2xl
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-white font-bold text-lg">Menu</h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl hover:text-yellow-300 transition"
          >
            ✕
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-6 px-6 py-8 text-sm font-medium">

          <Link to="/" onClick={() => setMenuOpen(false)}
            className={`${isActive("/")} hover:text-yellow-300 transition`}>
            🏠 Home
          </Link>

          <Link to="/destinations" onClick={() => setMenuOpen(false)}
            className={`${isActive("/destinations")} hover:text-yellow-300 transition`}>
            🗺️ Destinations
          </Link>

          <Link to="/gallery" onClick={() => setMenuOpen(false)}
            className={`${isActive("/gallery")} hover:text-yellow-300 transition`}>
            📸 Gallery
          </Link>

          <Link to="/vehicles" onClick={() => setMenuOpen(false)}
            className={`${isActive("/vehicles")} hover:text-yellow-300 transition`}>
            🚙 Vehicles
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}
            className={`${isActive("/contact")} hover:text-yellow-300 transition`}>
            📞 Contact
          </Link>

        </div>

        {/* CTA */}
        <div className="mt-auto p-6 border-t border-white/10">
          <a
            href="https://wa.me/254724605140"
            target="_blank"
            rel="noreferrer"
            className="block text-center bg-yellow-400 hover:bg-yellow-300 text-black py-3 rounded-xl font-semibold transition"
          >
            Book Safari Now
          </a>

          <p className="text-center text-white/60 text-[11px] mt-3">
            24/7 Safari Booking • Fast Response
          </p>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;