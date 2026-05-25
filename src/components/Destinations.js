import React from "react";
import { Link } from "react-router-dom";

import amboseli from "../assets/amboseli2.jpg";
import tsavo1 from "../assets/tsavo1.jpg";
import tsavo2 from "../assets/tsavo2.jpg";
import chyulu1 from "../assets/chyulu1.jpg";
import chyulu2 from "../assets/chyulu2.jpg";

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
      <section className="relative py-28 text-center px-6 overflow-hidden">

        {/* soft glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.15),transparent_65%)]"></div>

        <div className="relative max-w-4xl mx-auto">

          <p className="uppercase tracking-[6px] text-yellow-500 font-semibold mb-4">
            Safari Destinations
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Explore Kenya’s Most Iconic Safari Landscapes
          </h1>

          <p className="text-gray-600 text-lg leading-8">
            Discover breathtaking wildlife parks, scenic lakes, volcanic hills,
            and world-famous safari ecosystems across Kenya.
          </p>

        </div>
      </section>

      {/* GRID */}
      <section className="px-6 md:px-12 pb-28">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {destinations.map((dest, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >

              {/* IMAGE */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h2 className="text-2xl font-bold mb-2 text-gray-900">
                  {dest.name}
                </h2>

                <p className="text-gray-600 leading-7 mb-5 text-sm md:text-base">
                  {dest.description}
                </p>

                {/* highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {dest.highlights.map((h, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 border border-yellow-100"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* button */}
                <Link
                  to="/vehicles"
                  className="inline-flex w-full justify-center bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-xl transition shadow-sm hover:shadow-yellow-200"
                >
                  Plan Safari Trip
                </Link>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="relative text-center px-6 pb-28">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Want a Custom Safari Experience?
          </h2>

          <p className="text-gray-600 text-lg mb-10 leading-8">
            We design personalized safari routes based on your budget, travel
            dates, and wildlife interests across Kenya.
          </p>

          <a
            href="https://wa.me/254724605140"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-4 rounded-xl shadow-md transition"
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