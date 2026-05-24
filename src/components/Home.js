import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import cruiser1 from "../assets/cruiser1.jpg";
import cruiser2 from "../assets/cruiser2.jpg";
import cruiser3 from "../assets/cruiser3.jpg";
import cruiser4 from "../assets/cruiser4.jpg";
import tsavo1 from "../assets/tsavo1.jpg";
import tsavo2 from "../assets/tsavo2.jpg";
import amboseli1 from "../assets/amboseli1.jpg";
import amboseli2 from "../assets/amboseli2.jpg";
import chyulu1 from "../assets/chyulu1.jpg";
import chyulu2 from "../assets/chyulu2.jpg";
//import video3 from "../assets/video3.mp4";
//import cruiser3 from "../assets/cruiser3.jpg";
//import cruiser4 from "../assets/cruiser4.jpg";
//import cruiser5 from "../assets/cruiser5.jpg";
function Home() {

  const images = [cruiser1, cruiser2, cruiser3, amboseli1, amboseli2, chyulu2, cruiser4];
  const [index, setIndex] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      
      {/* HERO SECTION */}
<section
  id="home"
  className="relative min-h-screen flex items-center overflow-hidden"
>

  {/* BACKGROUND SLIDER */}
  <div className="absolute inset-0">
    <div
      className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out scale-105"
      style={{ backgroundImage: `url(${images[index]})` }}
    />
  </div>

  {/* LAYERED OVERLAY (PRO LEVEL LOOK) */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

  {/* CONTENT */}
  <div className="relative z-10 w-full px-5 sm:px-8 md:px-12">
    <div className="max-w-7xl mx-auto">

      <div className="max-w-2xl text-white">

        <p className="uppercase tracking-[6px] text-yellow-400 mb-5 font-semibold animate-pulse">
          Booking Safari Experience
        </p>

       <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Explore Kenya With Premium Safari Vehicles
        </h1>

        <p className="text-gray-300 text-sm sm:text-base md:text-xl leading-7 md:leading-8 mb-8">
          Reliable safari transport services in Kimana and Amboseli for tourists,
          photographers, families, and adventure groups seeking unforgettable wildlife experiences.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto ">

          {/* PRIMARY CTA - WHATSAPP */}
          <a
            href="https://wa.me/254724605140?text=Hello%20I%20want%20to%20book%20a%20safari%20vehicle%20in%20Amboseli"
            target="_blank"
            rel="noreferrer"
            className="group relative bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-xl transition duration-300 shadow-lg hover:shadow-yellow-500/40 overflow-hidden"
          >
            <span className="relative z-10">Book on WhatsApp</span>

            {/* hover shine effect */}
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </a>

          {/* SECONDARY CTA */}
          <a
            href="/vehicles"
            className="border border-white/70 hover:bg-white hover:text-black px-8 py-4 rounded-xl transition duration-300 backdrop-blur-sm"
          >
            Explore Fleet
          </a>

        </div>

        {/* QUICK TRUST LINE */}
        <div className="mt-8 text-sm text-gray-400">
          ✔ 24/7 Support &nbsp; • &nbsp; ✔ Trusted Local Drivers &nbsp; • &nbsp; ✔ Fast Booking
        </div>

      </div>

    </div>
  </div>

  {/* DOT NAVIGATION */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
    {images.map((_, i) => (
      <button
        key={i}
        onClick={() => setIndex(i)}
        className={`transition-all duration-300 rounded-full ${
          i === index
            ? "w-8 h-2 bg-yellow-500"
            : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
        }`}
      />
    ))}
  </div>

</section>

      {/* ABOUT SECTION */}
    <section className="py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE SLIDER SIDE */}
        <div className="relative group">

          <img
            // eslint-disable-next-line no-undef
            src={images[index]}
            alt="Safari Vehicle"
            className="rounded-3xl shadow-2xl w-full h-[520px] object-cover transition duration-700 ease-in-out"
          />

          {/* Soft overlay */}
          <div className="absolute inset-0 rounded-3xl bg-black/10 group-hover:bg-black/20 transition"></div>

          {/* Badge */}
          <div className="absolute -bottom-8 -right-8 bg-yellow-500 text-black p-6 rounded-2xl shadow-xl">
            <h3 className="text-4xl font-bold">10+</h3>
            <p className="font-medium">Safari Vehicles</p>
          </div>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === index ? "bg-yellow-500" : "bg-white/50"
                }`}
              />
            ))}
          </div>

        </div>

        {/* TEXT SIDE */}
        <div>

          <p className="uppercase tracking-[6px] text-yellow-500 font-semibold mb-4">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Trusted Safari Transport in Kenya
          </h2>

          <p className="text-gray-600 text-lg leading-8 mb-10">
            We provide premium safari vehicle hire services across Amboseli,
            Tsavo, Chyulu Hills, and Maasai Mara with experienced local drivers
            ensuring safe and unforgettable journeys.
          </p>

          {/* STATS */}
          <div className="grid sm:grid-cols-2 gap-6">

            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md shadow-md hover:shadow-xl transition border border-gray-100">
              <h3 className="text-3xl font-bold text-yellow-500 mb-2">500+</h3>
              <p className="text-gray-700 font-medium">Happy Tourists</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md shadow-md hover:shadow-xl transition border border-gray-100">
              <h3 className="text-3xl font-bold text-yellow-500 mb-2">24/7</h3>
              <p className="text-gray-700 font-medium">Booking Support</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md shadow-md hover:shadow-xl transition border border-gray-100">
              <h3 className="text-3xl font-bold text-yellow-500 mb-2">Expert</h3>
              <p className="text-gray-700 font-medium">Local Drivers</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md shadow-md hover:shadow-xl transition border border-gray-100">
              <h3 className="text-3xl font-bold text-yellow-500 mb-2">Affordable</h3>
              <p className="text-gray-700 font-medium">Safari Packages</p>
            </div>

          </div>

        </div>

      </div>
    </section>


{/* TOP SAFARI DESTINATIONS */}
 {/* TOP SAFARI DESTINATIONS */}
<section className="py-28 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-white via-gray-50 to-gray-100">
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-20">
      <p className="uppercase tracking-[6px] text-yellow-500 font-semibold mb-4">
        Top Destinations
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Explore Kenya’s Safari Wonders
      </h2>

      <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
        Experience world-class wildlife encounters, breathtaking landscapes,
        and unforgettable safari adventures across Kenya’s most iconic parks.
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* AMBOSELI */}
      <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500">

        <div className="relative overflow-hidden">
          <img
            src={amboseli2}
            alt="Amboseli National Park"
            className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          <div className="absolute bottom-4 left-4 text-white">
            <span className="bg-yellow-500 text-black px-3 py-1 text-xs rounded-full font-semibold">
              Featured Safari
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-8">
          <h3 className="text-2xl font-bold mb-3">Amboseli National Park</h3>

          <p className="text-gray-600 leading-7 mb-6">
            Famous for large elephant herds and iconic Kilimanjaro views.
          </p>

          <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition font-semibold">
            Explore Amboseli
          </button>
        </div>
      </div>

      {/* CHYULU */}
      <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500">

        <div className="relative overflow-hidden">
          <img
            src={chyulu2}
            alt="Chyulu Hills"
            className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          <div className="absolute bottom-4 left-4 text-white">
            <span className="bg-green-500 text-black px-3 py-1 text-xs rounded-full font-semibold">
              Nature Escape
            </span>
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold mb-3">Chyulu Hills</h3>

          <p className="text-gray-600 leading-7 mb-6">
            Volcanic landscapes, caves, hiking trails, and scenic views.
          </p>

          <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition font-semibold">
            Explore Chyulu
          </button>
        </div>
      </div>

      {/* MAASAI MARA */}
      <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500">

        <div className="relative overflow-hidden">
          <img
            src={amboseli1}
            alt="Maasai Mara"
            className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          <div className="absolute bottom-4 left-4 text-white">
            <span className="bg-purple-500 text-white px-3 py-1 text-xs rounded-full font-semibold">
              Big Five Safari
            </span>
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold mb-3">Maasai Mara Reserve</h3>

          <p className="text-gray-600 leading-7 mb-6">
            World-famous migration and Big Five wildlife experience.
          </p>

          <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition font-semibold">
            Explore Maasai Mara
          </button>
        </div>
      </div>

      {/* LAKE NAIVASHA */}
      <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500">

        <div className="relative overflow-hidden">
          <img
            src={chyulu1}
            alt="Lake Naivasha"
            className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          <div className="absolute bottom-4 left-4 text-white">
            <span className="bg-blue-500 text-white px-3 py-1 text-xs rounded-full font-semibold">
              Scenic Lake
            </span>
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold mb-3">Lake Naivasha</h3>

          <p className="text-gray-600 leading-7 mb-6">
            Hippos, boat rides, bird watching, and peaceful safari escapes.
          </p>

          <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition font-semibold">
            Explore Naivasha
          </button>
        </div>
      </div>

      {/* TSAVO */}
      <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500">

        <div className="relative overflow-hidden">
          <img
            src={tsavo2}
            alt="Tsavo National Park"
            className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          <div className="absolute bottom-4 left-4 text-white">
            <span className="bg-red-500 text-white px-3 py-1 text-xs rounded-full font-semibold">
              Wildlife Giant
            </span>
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold mb-3">Tsavo National Park</h3>

          <p className="text-gray-600 leading-7 mb-6">
            Red elephants, lions, rivers, and raw African wilderness.
          </p>

          <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition font-semibold">
            Explore Tsavo
          </button>
        </div>
      </div>

      {/* NEW: HELL'S GATE */}
      <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500">

        <div className="relative overflow-hidden">
          <img
            src={chyulu2}
            alt="Hell's Gate National Park"
            className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          <div className="absolute bottom-4 left-4 text-white">
            <span className="bg-orange-500 text-white px-3 py-1 text-xs rounded-full font-semibold">
              Adventure Park
            </span>
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold mb-3">Hell’s Gate National Park</h3>

          <p className="text-gray-600 leading-7 mb-6">
            Cycling safaris, cliffs, gorges, and walking among wildlife in one of Kenya’s most unique parks.
          </p>

          <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition font-semibold">
            Explore Hell’s Gate
          </button>
        </div>
      </div>

    </div>
  </div>
</section>


{/* TOP DAY TRIPS */}
<section className="py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-yellow-500 font-semibold mb-4">
            Day Trips
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Popular Safari Day Trips
          </h2>

          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            Perfect short adventures for tourists staying around Amboseli and Kimana.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

          {/* Amboseli */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
            <img
              src={amboseli1}
              alt="Amboseli Safari"
              className="h-60 w-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="p-8">
              <div className="text-3xl mb-4">🦁</div>

              <h3 className="text-2xl font-bold mb-3">
                Amboseli Full Day Safari
              </h3>

              <p className="text-gray-600 leading-7 mb-6">
                Enjoy a full-day game drive experience with elephants, lions,
                giraffes, zebras, and Kilimanjaro views.
              </p>

              <div className="font-semibold text-yellow-500">
                Duration: 1 Day
              </div>
            </div>
          </div>

          {/* Chyulu */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
            <img
              src={chyulu1}
              alt="Chyulu Hills"
              className="h-60 w-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="p-8">
              <div className="text-3xl mb-4">⛰️</div>

              <h3 className="text-2xl font-bold mb-3">
                Chyulu Hills Adventure
              </h3>

              <p className="text-gray-600 leading-7 mb-6">
                Scenic drive through hills with hiking, caves, photography,
                and breathtaking landscapes.
              </p>

              <div className="font-semibold text-yellow-500">
                Duration: Half Day
              </div>
            </div>
          </div>

          {/* Tsavo */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
            <img
              src={tsavo1}
              alt="Tsavo Safari"
              className="h-60 w-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="p-8">
              <div className="text-3xl mb-4">🐘</div>

              <h3 className="text-2xl font-bold mb-3">
                Tsavo East Safari Trip
              </h3>

              <p className="text-gray-600 leading-7 mb-6">
                See red elephants, vast plains, lions, and Kenya’s raw wilderness
                experience.
              </p>

              <div className="font-semibold text-yellow-500">
                Duration: 1 Day
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    
    {/* WHY CHOOSE US */}
<section className="relative py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

  {/* subtle background glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-300/10 blur-3xl rounded-full"></div>

  <div className="max-w-7xl mx-auto text-center relative z-10">

    <p className="uppercase tracking-[6px] text-yellow-500 font-semibold mb-4">
      Why Choose Us
    </p>

    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Safari Travel Reimagined
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-8 mb-16">
      We combine comfort, safety, and local expertise to deliver unforgettable safari experiences across Amboseli, Tsavo, and beyond.
    </p>

    <div className="grid md:grid-cols-3 gap-10">

      {/* CARD 1 */}
      <div className="group relative p-10 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

        <div className="relative z-10">

          <div className="text-5xl mb-6 group-hover:scale-110 transition duration-300">
            🚙
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Premium Safari Vehicles
          </h3>

          <p className="text-gray-600 leading-7">
            Modern, well-maintained 4x4 vehicles built for rugged terrain and long safari journeys with maximum comfort.
          </p>

        </div>
      </div>

      {/* CARD 2 */}
      <div className="group relative p-10 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

        <div className="relative z-10">

          <div className="text-5xl mb-6 group-hover:scale-110 transition duration-300">
            🦁
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Authentic Safari Experience
          </h3>

          <p className="text-gray-600 leading-7">
            Guided by experienced local experts who know wildlife behavior, park routes, and the best viewing spots.
          </p>

        </div>
      </div>

      {/* CARD 3 */}
      <div className="group relative p-10 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

        <div className="relative z-10">

          <div className="text-5xl mb-6 group-hover:scale-110 transition duration-300">
            📍
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Local Safari Experts
          </h3>

          <p className="text-gray-600 leading-7">
            Deep knowledge of Amboseli, Tsavo, and Chyulu Hills ensures safe routes and unforgettable wildlife encounters.
          </p>

        </div>
      </div>

    </div>
  </div>
</section>


{/* CTA SECTION */}
<section className="relative py-28 px-4 sm:px-6 md:px-8 bg-black text-white overflow-hidden">

  {/* background effect */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.15),transparent_60%)]"></div>

  <div className="max-w-4xl mx-auto text-center relative z-10">

    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Ready For Your Safari Adventure?
    </h2>

    <p className="text-gray-300 text-lg leading-8 mb-10">
      Book your safari vehicle today and explore Kenya’s most iconic wildlife destinations with comfort and confidence.
    </p>

    <a
      href="https://wa.me/254724605140"
      target="_blank"
      rel="noreferrer"
      className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-10 py-4 rounded-xl transition duration-300 shadow-lg hover:shadow-yellow-500/30"
    >
      Book On WhatsApp
    </a>

    <p className="text-xs text-gray-400 mt-6">
      Fast response • Trusted drivers • 24/7 availability
    </p>

  </div>
</section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16">
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

export default Home;