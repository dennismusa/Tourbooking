import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import safarilinklogo from "../assets/safarilinklogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const location = useLocation();
  const { i18n, t } = useTranslation();

  // SCROLL EFFECTS
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // LOAD LANGUAGE
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) i18n.changeLanguage(savedLang);
  }, [i18n]);

 const changeLanguage = (e) => {
  const lang = e.target.value;
  i18n.changeLanguage(lang);
  localStorage.setItem("lang", lang);
  window.location.reload(); // 🔥 forces full re-render fix
};

  // FIXED ACTIVE ROUTE (handles /en/home etc.)
  // eslint-disable-next-line no-unused-vars
  const isActive = (path) =>
    location.pathname.includes(path)
      ? "text-yellow-300"
      : "text-white/90";

  // LINK STYLE
  const linkStyle =
    "relative text-white/90 hover:text-yellow-300 transition-all duration-300 " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 " +
    "after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <>
      {/* SCROLL BAR */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[9999]">
        <div
          className="h-full bg-yellow-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        border-b border-white/10 backdrop-blur-xl
        ${
          scrolled
            ? "bg-black/40 shadow-2xl py-2"
            : "bg-gradient-to-r from-sky-900/80 via-blue-900/70 to-red-900/70 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={safarilinklogo}
                alt="Safari Logo"
                className="w-10 h-10 rounded-full object-cover shadow-md group-hover:scale-110 transition"
              />
              <span className="text-lg font-bold text-yellow-300 group-hover:tracking-wide transition">
                Amboseli Link Safari
              </span>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-7 text-sm font-medium">

              <Link className={linkStyle} to="/">
                {t("home", "Home")}
              </Link>

              <Link className={linkStyle} to="/destinations">
                {t("destinations", "Destinations")}
              </Link>

              <Link className={linkStyle} to="/gallery">
                {t("gallery", "Gallery")}
              </Link>

              <Link className={linkStyle} to="/vehicles">
                {t("vehicles", "Vehicles")}
              </Link>

              <Link className={linkStyle} to="/contact">
                {t("contact", "Contact")}
              </Link>

              {/* LANGUAGE SELECT */}
              <select
                onChange={changeLanguage}
                value={i18n.language}
                className="bg-white/5 backdrop-blur-md border border-white/20
                text-white px-3 py-1 rounded-lg text-sm cursor-pointer
                hover:bg-white/10 hover:border-yellow-300 transition-all duration-300"
              >
                <option value="en">🇬🇧 English</option>
                <option value="de">🇩🇪 German</option>
                <option value="fr">🇫🇷 French</option>
                <option value="es">🇪🇸 Spanish</option>
              </select>

              {/* CTA */}
              <a
                href="https://wa.me/254724605140"
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2 rounded-full font-semibold
                transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30"
              >
                {t("book", "Book Safari")}
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-white text-3xl hover:text-yellow-300 transition"
            >
              ☰
            </button>
          </div>
        </div>

        {/* OVERLAY */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`fixed inset-0 bg-black/60 md:hidden transition-opacity
          ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        />

        {/* MOBILE MENU */}
        <div
          className={`fixed top-0 right-0 h-full w-[85%] max-w-sm z-50
          transform transition-transform duration-500 md:hidden flex flex-col
          bg-black/70 backdrop-blur-xl shadow-2xl
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >

          {/* HEADER */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-white font-bold text-lg">Menu</h2>

            <button
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl hover:text-yellow-300 transition hover:rotate-90"
            >
              ✕
            </button>
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-6 px-6 py-8 text-sm font-medium">

            <Link to="/" onClick={() => setMenuOpen(false)}
              className="text-white/90 hover:text-yellow-300 transition transform hover:translate-x-2">
              🏠 {t("home", "Home")}
            </Link>

            <Link to="/destinations" onClick={() => setMenuOpen(false)}
              className="text-white/90 hover:text-yellow-300 transition transform hover:translate-x-2">
              🗺️ {t("destinations", "Destinations")}
            </Link>

            <Link to="/gallery" onClick={() => setMenuOpen(false)}
              className="text-white/90 hover:text-yellow-300 transition transform hover:translate-x-2">
              📸 {t("gallery", "Gallery")}
            </Link>

            <Link to="/vehicles" onClick={() => setMenuOpen(false)}
              className="text-white/90 hover:text-yellow-300 transition transform hover:translate-x-2">
              🚙 {t("vehicles", "Vehicles")}
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}
              className="text-white/90 hover:text-yellow-300 transition transform hover:translate-x-2">
              📞 {t("contact", "Contact")}
            </Link>

            {/* MOBILE LANGUAGE */}
            <select
              onChange={changeLanguage}
              value={i18n.language}
              className="mt-4 bg-white/5 border border-white/20 text-white px-3 py-2 rounded-lg"
            >
              <option value="en">🇬🇧 English</option>
              <option value="de">🇩🇪 German</option>
              <option value="fr">🇫🇷 French</option>
              <option value="es">🇪🇸 Spanish</option>
            </select>
          </div>

          {/* CTA */}
          <div className="mt-auto p-6 border-t border-white/10">
            <a
              href="https://wa.me/254724605140"
              target="_blank"
              rel="noreferrer"
              className="block text-center bg-yellow-400 hover:bg-yellow-300 text-black py-3 rounded-xl font-semibold
              transition transform hover:scale-105"
            >
              {t("bookNow", "Book Safari Now")}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;