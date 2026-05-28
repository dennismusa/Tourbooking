import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import safarilinklogo from "../assets/safarilinklogo.jpg";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "text-yellow-400" : "text-white";

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      {/* TOP BAR */}
      <div className="backdrop-blur-xl bg-black/40 border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3">
         <img
           src={safarilinklogo}
           alt="Safari Link Logo"
           className="w-10 h-10 rounded-full object-cover shadow-md"
                />

            <span className="text-lg font-bold text-yellow-500">
             Amboseli link safari
              </span>
              </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <Link className="hover:text-yellow-300 text-white/90" to="/">Home</Link>
              <Link className="hover:text-yellow-300 text-white/90" to="/destinations">Destinations</Link>
              <Link className="hover:text-yellow-300 text-white/90" to="/gallery">Gallery</Link>
              <Link className="hover:text-yellow-300 text-white/90" to="/vehicles">Vehicles</Link>
              <Link className="hover:text-yellow-300 text-white/90" to="/contact">Contact</Link>

              <a
                href="https://wa.me/254724605140"
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2 rounded-full font-semibold"
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
      </div>

      {/* OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-black/90 backdrop-blur-2xl shadow-2xl z-50 transform transition-transform duration-500 md:hidden flex flex-col
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-white font-bold text-lg">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl"
          >
            ✕
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-6 px-6 py-10 text-sm">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`${isActive("/")} hover:text-yellow-300 transition`}
          >
            🏠 Home
          </Link>

          <Link
            to="/destinations"
            onClick={() => setMenuOpen(false)}
            className={`${isActive("/destinations")} hover:text-yellow-300`}
          >
            🗺️ Destinations
          </Link>

          <Link
            to="/gallery"
            onClick={() => setMenuOpen(false)}
            className={`${isActive("/gallery")} hover:text-yellow-300`}
          >
            📸 Gallery
          </Link>

          <Link
            to="/vehicles"
            onClick={() => setMenuOpen(false)}
            className={`${isActive("/vehicles")} hover:text-yellow-300`}
          >
            🚙 Vehicles
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={`${isActive("/contact")} hover:text-yellow-300`}
          >
            📞 Contact
          </Link>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-auto p-6 border-t border-white/10">
          <a
            href="https://wa.me/254724605140"
            target="_blank"
            rel="noreferrer"
            className="block text-center bg-yellow-400 hover:bg-yellow-300 text-black py-3 rounded-xl font-semibold text-sm transition"
          >
            Book Safari Now
          </a>

          <p className="text-center text-gray-500 text-[11px] mt-3">
            24/7 Safari Booking • Fast Response
          </p>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;