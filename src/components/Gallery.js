import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// SLIDER IMAGES
import kandili1 from "../assets/kandili1.jpg";
import kandili2 from "../assets/kandili2.jpg";
import kandili3 from "../assets/kandili3.jpg";
import kandili4 from "../assets/kandili4.jpg";

// EXPERIENCE IMAGES
import cruiser1 from "../assets/cruiser1.jpg";
import cruiser2 from "../assets/cruiser2.jpg";
import cruiser4 from "../assets/cruiser4.jpg";
import cruiser5 from "../assets/cruiser5.jpg";

function Gallery() {
  // =====================
  // HERO SLIDER
  // =====================
  const slides = [kandili1, kandili2, kandili3, kandili4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // =====================
  // EXPERIENCES DATA
  // =====================
  const experiences = [
    {
      image: cruiser1,
      title: "Sunrise Game Drives",
      description:
        "Experience magical early morning safaris as wildlife becomes active under the golden African sunrise.",
      highlights: ["Early Morning", "Big Five", "Golden Views"],
    },
    {
      image: cruiser2,
      title: "Elephant Herd Encounters",
      description:
        "Get close to massive elephant herds in Amboseli with Kilimanjaro views.",
      highlights: ["Elephants", "Photography", "Kilimanjaro"],
    },
    {
      image: cruiser4,
      title: "Group Safari Adventures",
      description:
        "Perfect for families and groups exploring Kenya together.",
      highlights: ["Group Travel", "Comfort Vans", "Shared Experience"],
    },
    {
      image: cruiser5,
      title: "Luxury Safari Experience",
      description:
        "Premium safari comfort with executive seating and exclusive wildlife viewing.",
      highlights: ["VIP Comfort", "Private Tours", "Luxury"],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen">

      {/* ================= HERO SLIDER ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden">

        {/* SLIDES */}
        {slides.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover scale-105"
            />
          </div>
        ))}

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 px-6 text-white max-w-4xl">

          <p className="uppercase tracking-[6px] text-yellow-400 mb-4 text-sm sm:text-base">
            Safari Experiences
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Explore Kenya’s Wildlife in Motion
          </h1>

          <p className="text-gray-300 text-sm sm:text-lg leading-7 sm:leading-8">
            Real safari journeys captured across Kenya — Amboseli, Tsavo, and beyond.
          </p>

        </div>
      </section>

      {/* ================= EXPERIENCE GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">

        {/* HEADER */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
            Safari Experience Highlights
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-lg leading-7 sm:leading-8">
            Every journey is more than transport — it’s a real African safari experience filled with wildlife, landscapes, and unforgettable moments.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">

          {experiences.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
            >

              {/* IMAGE */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-6">

                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-7 mb-4">
                  {item.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold"
                    >
                      {h}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-20 sm:py-28 px-6 text-center text-white overflow-hidden">

        {/* NEW BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.18),transparent_70%)]" />

        <div className="relative max-w-3xl mx-auto">

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-5">
            Want to Experience This in Real Life?
          </h2>

          <p className="text-gray-300 text-sm sm:text-lg mb-10 leading-7 sm:leading-8">
            Book your safari with us and enjoy real wildlife encounters, guided tours, and unforgettable African adventures.
          </p>

          <a
            href="https://wa.me/254724605140"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 sm:px-10 py-4 rounded-xl shadow-lg transition"
          >
            Book Safari Experience
          </a>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-red-950 text-white py-16">

        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-yellow-500 mb-5">
              Kimana Safari
            </h2>
            <p className="text-gray-400 leading-7">
              Creating unforgettable safari experiences across Kenya with professional guides and well-equipped safari vehicles.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/vehicles">Fleet</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Safari Tours</li>
              <li>Group Trips</li>
              <li>Luxury Safaris</li>
              <li>Photography Tours</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>📍 Kimana, Kenya</li>
              <li>📞 +254 724605140</li>
              <li>✉ info@kimanasafari.com</li>
            </ul>

            <a
              href="https://wa.me/254724605140"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-xl"
            >
              WhatsApp Booking
            </a>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          © 2026 Kimana Safari. All Rights Reserved.
        </div>

      </footer>

    </div>
  );
}

export default Gallery;