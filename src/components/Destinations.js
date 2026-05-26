import React from "react";
import { Link } from "react-router-dom";

import amboseli from "../assets/amboseli2.jpg";
import tsavo1 from "../assets/tsavo1.jpg";
import tsavo2 from "../assets/tsavo2.jpg";
import chyulu1 from "../assets/chyulu1.jpg";
import chyulu2 from "../assets/chyulu2.jpg";
import video8 from "../assets/video8.mp4";

function Destinations() {
  const destinations = [
    {
      name: "Amboseli National Park",
      image: amboseli,
      description:
        "Home of giant elephant herds with breathtaking views of Mount Kilimanjaro. A photographer’s paradise and one of Africa’s most iconic safari landscapes.",
      highlights: ["Elephants", "Kilimanjaro Views", "Big Five Safaris"],
    },
    {
      name: "Tsavo East & West",
      image: tsavo1,
      description:
        "Kenya’s largest wildlife ecosystem featuring red elephants, lions, volcanic hills, rivers, and endless savannah wilderness.",
      highlights: ["Red Elephants", "Mzima Springs", "Big Game Drives"],
    },
    {
      name: "Chyulu Hills",
      image: chyulu2,
      description:
        "A volcanic paradise with rolling green hills, caves, lava flows, and some of the most cinematic safari views in Kenya.",
      highlights: ["Hiking Trails", "Caves", "Photography"],
    },
    {
      name: "Lake Naivasha",
      image: chyulu1,
      description:
        "A peaceful freshwater lake surrounded by hippos, flamingos, and lush birdlife — perfect for relaxation and boat safaris.",
      highlights: ["Boat Safari", "Bird Watching", "Hippos"],
    },
    {
      name: "Lake Magadi",
      image: chyulu1,
      description:
        "A surreal pink soda lake known for flamingos, salt flats, and dramatic desert scenery.",
      highlights: ["Flamingos", "Salt Flats", "Scenic Drives"],
    },
    {
      name: "Mount Kenya Region",
      image: tsavo2,
      description:
        "Snow-capped peaks, alpine forests, and wildlife-rich trails offering a unique high-altitude safari experience.",
      highlights: ["Hiking", "Snow Peaks", "Forest Safari"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-gray-900">

      {/* HERO */}
      {/* HERO */}
<section className="relative min-h-[70vh] sm:min-h-[75vh] flex items-center justify-center text-center px-4 sm:px-6 overflow-hidden">

  {/* VIDEO BACKGROUND */}
  <video
    className="absolute inset-0 w-full h-full object-cover scale-105"
    src={video8}
    autoPlay
    muted
    loop
    playsInline
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/65" />

  {/* SOFT GOLD GLOW */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.12),transparent_65%)]" />

  {/* CONTENT */}
  <div className="relative max-w-3xl mx-auto text-white px-2 sm:px-4">

    <p className="uppercase tracking-[5px] text-yellow-400 text-xs sm:text-sm mb-3">
      Safari Destinations
    </p>

    <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
      Explore Kenya’s Iconic Safari Landscapes
    </h1>

    <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-7 max-w-xl mx-auto">
      Discover wildlife parks, lakes, and volcanic landscapes across Kenya with unforgettable safari experiences.
    </p>

  </div>

</section>

      {/* GRID */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-10">
  <div className="max-w-7xl mx-auto">

    {/* SECTION HEADER */}
    <div className="text-center mb-14 sm:mb-20">

      <p className="uppercase tracking-[6px] text-yellow-500 text-xs sm:text-sm mb-3">
        Top Safari Locations
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Discover Kenya’s Best Destinations
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-7">
        Each destination offers unique wildlife, landscapes, and unforgettable safari experiences.
      </p>

    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">

      {destinations.map((dest, i) => (
        <div
          key={i}
          className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-1 border border-gray-100"
        >

          {/* IMAGE */}
          <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">

            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          </div>

          {/* CONTENT */}
          <div className="p-5 sm:p-6">

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
              {dest.name}
            </h3>

            <p className="text-gray-600 text-sm sm:text-base leading-6 mb-4">
              {dest.description}
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mb-5">

              {dest.highlights.map((h, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 border border-yellow-100"
                >
                  {h}
                </span>
              ))}

            </div>

            {/* BUTTON */}
            <a
              href={`https://wa.me/254724605140?text=${encodeURIComponent(
                `Hello, I want to visit ${dest.name}`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-black font-bold py-3 rounded-xl transition shadow-md hover:shadow-yellow-300/40 text-sm sm:text-base"
            >
              Plan Safari Trip
            </a>

          </div>
        </div>
      ))}

    </div>
  </div>
</section>

      {/* CTA */}
      <section className="relative py-20 sm:py-28 px-4 text-center overflow-hidden text-white">

  {/* DARK BACKGROUND */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

  {/* GOLD GLOW EFFECT */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.18),transparent_60%)]"></div>

  <div className="relative max-w-3xl mx-auto">

    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-5">
      Want a Custom Safari Experience?
    </h2>

    <p className="text-gray-300 text-sm sm:text-lg leading-7 mb-10">
      We design personalized safari packages based on your budget, travel dates, and wildlife interests.
    </p>

    <a
      href="https://wa.me/254724605140"
      target="_blank"
      rel="noreferrer"
      className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 sm:px-10 py-4 rounded-xl shadow-lg transition"
    >
      Talk to a Safari Expert
    </a>

  </div>
</section>

<footer className="bg-red-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-500 mb-5">
              Kimana Safari
            </h2>

            <p className="text-gray-400 leading-8">
              Professional safari vehicle hire services in Kimana and Amboseli.
              Safe, comfortable, and unforgettable safari experiences.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link to="/" className="hover:text-yellow-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/vehicles" className="hover:text-yellow-500 transition">
                  Fleet
                </Link>
              </li>

              <li>
                <Link to="/gallery" className="hover:text-yellow-500 transition">
                  Gallery
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-yellow-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Services
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>Safari Vehicle Hire</li>
              <li>Airport Transfers</li>
              <li>Group Tours</li>
              <li>Private Safari Trips</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Contact Info
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>📍 Kimana, Amboseli - Kenya</li>
              <li>📞 +254 724605140</li>
              <li>✉ info@kimanasafari.com</li>
            </ul>

            <a
              href="https://wa.me/254724605140"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-black font-bold px-4 sm:px-6 md:px-8 py-3 rounded-lg transition"
            >
              WhatsApp Booking
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-14 pt-8 text-center text-gray-500">
          © 2026 Kimana Safari Vehicles. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default Destinations;