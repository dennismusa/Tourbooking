import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      {/* GLASS BACKGROUND */}
      <div className="backdrop-blur-xl bg-black/40 border-b border-yellow-400/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-lg shadow-lg">
                🦁
              </div>

              <div>
                <h1 className="text-white font-bold text-lg sm:text-2xl tracking-wide group-hover:text-yellow-300 transition">
                  Kimana Safari
                </h1>

                <p className="text-gray-300 text-xs tracking-[2px] uppercase hidden sm:block">
                  Premium Safari Vehicles
                </p>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">

              <Link
                className="text-white/90 hover:text-yellow-300 transition duration-300"
                to="/"
              >
                Home
              </Link>

              <Link
                className="text-white/90 hover:text-yellow-300 transition duration-300"
                to="/gallery"
              >
                Gallery
              </Link>

              <Link
                className="text-white/90 hover:text-yellow-300 transition duration-300"
                to="/vehicles"
              >
                Vehicles
              </Link>

              <Link
                className="text-white/90 hover:text-yellow-300 transition duration-300"
                to="/contact"
              >
                Contact
              </Link>

              {/* CTA BUTTON */}
              <a
                href="https://wa.me/254724605140?text=Hello%20I%20want%20to%20book%20a%20safari%20vehicle"
                target="_blank"
                rel="noreferrer"
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold transition duration-300 shadow-lg hover:shadow-yellow-400/30"
              >
                Book Safari
              </a>

            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white text-3xl"
            >
              {menuOpen ? "✕" : "☰"}
            </button>

          </div>

        </div>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen
            ? "max-h-[400px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-5 text-white shadow-2xl">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-300 transition text-lg"
          >
            Home
          </Link>

          <Link
            to="/gallery"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-300 transition text-lg"
          >
            Gallery
          </Link>

          <Link
            to="/vehicles"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-300 transition text-lg"
          >
            Vehicles
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-300 transition text-lg"
          >
            Contact
          </Link>

          {/* MOBILE CTA */}
          <a
            href="https://wa.me/254724605140?text=Hello%20I%20want%20to%20book%20a%20safari%20vehicle"
            target="_blank"
            rel="noreferrer"
            className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-center text-black py-3 rounded-xl font-bold transition duration-300"
          >
            Book on WhatsApp
          </a>

        </div>
      </div>

    </nav>
  );
}

export default Navbar;