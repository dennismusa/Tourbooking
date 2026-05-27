import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

//import cruiser1 from "../assets/cruiser1.jpg";
//import cruiser2 from "../assets/cruiser2.jpg";
import chala2 from "../assets/chala2.jpg";
import jipe1 from "../assets/jipe1.jpg";
import tsavo12 from "../assets/tsavo12.jpg";
import kandili3 from "../assets/kandili3.jpg";
import amboseli1 from "../assets/amboseli1.jpg";
import kandili7 from "../assets/kandili7.jpg";
import kandili8 from "../assets/kandili8.jpg";
import chyulu4 from "../assets/chyulu4.jpg";
import tour1 from "../assets/tour1.jpg";
import kandili1 from "../assets/kandili1.jpg";
import kandili5 from "../assets/kandili5.jpg";
import kandili10 from "../assets/kandili10.jpg";
import kandili9 from "../assets/kandili9.jpg";
function Home() {
  const images = [kandili5, kandili1, kandili10, kandili10, tour1];
  const [index, setIndex] = useState(0);

  // ================= REVIEWS STATE =================
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [loading] = useState(false);
const [loadingReviews] = useState(false);
const [success] = useState(false);

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyACVav3SoF1trHeLZyVfmIYF6ZyBJ82fcgFVpwD4jneDp4BjuNG3cUSbY91OW6S6rhJQ/exec";
 

  
  // ================= LOAD REVIEWS (IMPORTANT PART 1) =================
  useEffect(() => {
    fetch(GOOGLE_SCRIPT_URL)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reverse()); // newest first
      })
      .catch((err) => console.log("Error loading reviews:", err));
  }, []);

  // ================= SLIDER =================
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  // ================= SUBMIT REVIEW (IMPORTANT PART 2) =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !message) return;

    const review = {
      name,
      message,
      rating,
      date: new Date().toISOString(),
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(review),
      });

      // instantly update UI
      setReviews((prev) => [review, ...prev]);

      setName("");
      setMessage("");
      setRating(5);
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      
 <section
  id="home"
  className="relative min-h-[65vh] sm:min-h-[70vh] md:min-h-[75vh] flex items-center overflow-hidden pt-20 sm:pt-24"
>

  {/* BACKGROUND SLIDER */}
  <div className="absolute inset-0 overflow-hidden">

    {images.map((img, i) => (
      <div
        key={i}
        className="absolute inset-0 bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
          opacity: i === index ? 1 : 0,
          transform: i === index ? "scale(1.01)" : "scale(1.05)",
          transition: "opacity 1.2s ease, transform 8s ease",
        }}
      />
    ))}

  </div>

  {/* DARK OVERLAY (SOFTER FOR SMALLER HERO) */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,215,0,0.10),transparent_65%)]" />

  {/* CONTENT */}
  <div className="relative z-10 w-full px-5 sm:px-8 md:px-12">
    <div className="max-w-6xl mx-auto">

      <div className="max-w-xl text-white">

        {/* TAG */}
        <p className="uppercase tracking-[5px] text-yellow-400 mb-4 font-semibold text-xs sm:text-sm">
          Premium Safari Experience
        </p>

        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Explore Kenya With{" "}
          <span className="text-yellow-400">Luxury Safari Vehicles</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-7 mb-6">
          Reliable safari transport in Amboseli, Tsavo & Chyulu Hills with comfort,
          safety, and expert local guides.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

          <a
            href="https://wa.me/254724605140"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl shadow-md transition text-center"
          >
            Book Safari Now
          </a>

          <Link
            to="/vehicles"
            className="border border-yellow-400/40 bg-white/5 hover:bg-yellow-400 hover:text-black text-white px-6 py-3 rounded-xl transition backdrop-blur-md text-center"
          >
            Explore Fleet
          </Link>

        </div>

      </div>
    </div>
  </div>

  {/* DOT NAVIGATION (SMALLER + CLEANER) */}
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
    {images.map((_, i) => (
      <button
        key={i}
        onClick={() => setIndex(i)}
        className={`rounded-full transition-all duration-300 ${
          i === index
            ? "w-7 h-2 bg-yellow-400"
            : "w-2 h-2 bg-white/30 hover:bg-white/60"
        }`}
      />
    ))}
  </div>

</section>

      {/* ABOUT SECTION */}
    <section className="py-20 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-gray-100">
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

{/* OUR SERVICES (PREMIUM VERTICAL VERSION) */}
<section className="py-24 md:py-32 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-white via-gray-50 to-gray-100">
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-20">
      <p className="uppercase tracking-[6px] text-yellow-500 font-semibold mb-4">
        Our Services
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Luxury Safari Experiences Tailored for You
      </h2>

      <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
        From rugged 4x4 safari cruisers to guided wildlife expeditions, we deliver
        unforgettable journeys across Amboseli, Tsavo, and Chyulu Hills.
      </p>
    </div>

    {/* GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* SERVICE 1 */}
      <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">

        {/* IMAGE TOP */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={kandili3}
            alt="Safari Vehicle Hire"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          <span className="absolute bottom-4 left-4 bg-yellow-500 text-black px-3 py-1 text-xs font-bold rounded-full">
            Vehicle Hire
          </span>
        </div>

        {/* TEXT BELOW */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3">
            Premium Safari Vehicle Hire
          </h3>

          <p className="text-gray-600 leading-7 text-sm mb-4">
            Travel in fully equipped 4x4 safari cruisers designed for comfort,
            safety, and off-road adventure across Kenya’s parks.
          </p>

          <ul className="text-xs text-gray-500 space-y-2 mb-4">
            <li>✔ Pop-up roof for wildlife viewing</li>
            <li>✔ Comfortable long-distance seating</li>
            <li>✔ Professional safari drivers</li>
          </ul>

          <div className="text-yellow-600 font-semibold text-sm">
            Best for: Families & photographers
          </div>
        </div>
      </div>

      {/* SERVICE 2 */}
      <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">

        <div className="relative h-64 overflow-hidden">
          <img
            src={kandili7}
            alt="Guided Safari"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          <span className="absolute bottom-4 left-4 bg-green-500 text-black px-3 py-1 text-xs font-bold rounded-full">
            Guided Tours
          </span>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-3">
            Expert Guided Wildlife Safaris
          </h3>

          <p className="text-gray-600 leading-7 text-sm mb-4">
            Explore Kenya with experienced local guides who know wildlife behavior,
            migration routes, and hidden viewing spots.
          </p>

          <ul className="text-xs text-gray-500 space-y-2 mb-4">
            <li>✔ Professional safari guides</li>
            <li>✔ Best sunrise & sunset drives</li>
            <li>✔ Wildlife tracking expertise</li>
          </ul>

          <div className="text-yellow-600 font-semibold text-sm">
            Best for: Wildlife photographers
          </div>
        </div>
      </div>

      {/* SERVICE 3 */}
      <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">

        <div className="relative h-64 overflow-hidden">
          <img
            src={kandili8}
            alt="Private Safari"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          <span className="absolute bottom-4 left-4 bg-purple-500 text-white px-3 py-1 text-xs font-bold rounded-full">
            Private Trips
          </span>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-3">
            Private Safari Packages
          </h3>

          <p className="text-gray-600 leading-7 text-sm mb-4">
            Enjoy personalized safari experiences designed for couples,
            families, and VIP travelers seeking privacy.
          </p>

          <ul className="text-xs text-gray-500 space-y-2 mb-4">
            <li>✔ Flexible schedules</li>
            <li>✔ Honeymoon safari options</li>
            <li>✔ Luxury tailored trips</li>
          </ul>

          <div className="text-yellow-600 font-semibold text-sm">
            Best for: Couples & VIP guests
          </div>
        </div>
      </div>

      {/* SERVICE 4 */}
      <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">

        <div className="relative h-64 overflow-hidden">
          <img
            src={kandili9}
            alt="Day Trips"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          <span className="absolute bottom-4 left-4 bg-blue-500 text-white px-3 py-1 text-xs font-bold rounded-full">
            Day Trips
          </span>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-3">
            Safari Day Trips
          </h3>

          <p className="text-gray-600 leading-7 text-sm mb-4">
            Short but powerful safari experiences to Amboseli, Tsavo, and nearby parks.
          </p>

          <ul className="text-xs text-gray-500 space-y-2 mb-4">
            <li>✔ Half & full-day safaris</li>
            <li>✔ Hotel pickup & drop-off</li>
            <li>✔ Affordable packages</li>
          </ul>

          <div className="text-yellow-600 font-semibold text-sm">
            Best for: Tourists & short stays
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* TOP DAY TRIPS */}
<section className="py-20 md:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-gray-100">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="text-center mb-14">
      <p className="uppercase tracking-[4px] text-yellow-500 font-semibold mb-4">
        Day Trips
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        Popular Safari Day Trips
      </h2>

      <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
        Carefully designed safari experiences combining wildlife, landscapes, culture, and adventure around Amboseli and nearby regions.
      </p>
    </div>

    {/* Horizontal Scroll Row */}
    <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">

      {[
        {
          img: amboseli1,
          icon: "🦁",
          title: "Amboseli Full-Day Safari",
          desc: "A complete game drive experience inside Amboseli National Park, home to large elephant herds, lions, giraffes, zebras, and breathtaking views of Mount Kilimanjaro. Perfect for wildlife photography and first-time visitors.",
          highlights: "Elephants • Lions • Kilimanjaro Views",
          duration: "1 Full Day",
        },
        {
          img: chyulu4,
          icon: "⛰️",
          title: "Chyulu Hills Adventure",
          desc: "A scenic escape into volcanic hills featuring caves, rolling green landscapes, hiking trails, and panoramic viewpoints. Ideal for nature lovers and photographers.",
          highlights: "Hiking • Caves • Scenic Views",
          duration: "Half Day",
        },
        {
          img: tsavo12,
          icon: "🐘",
          title: "Tsavo East Safari",
          desc: "Explore one of Kenya’s largest parks, famous for its red elephants, wide open savannahs, and raw untouched wilderness. A true African safari experience.",
          highlights: "Red Elephants • Savannah • Big Wildlife",
          duration: "1 Full Day",
        },
        {
          img: chala2,
          icon: "🌊",
          title: "Lake Chala Excursion",
          desc: "A hidden crater lake on the Kenya–Tanzania border offering crystal-clear waters, kayaking, hiking trails, and peaceful natural surroundings away from crowds.",
          highlights: "Kayaking • Crater Lake • Peaceful Nature",
          duration: "Half Day",
        },
        {
          img: jipe1,
          icon: "🐟",
          title: "Lake Jipe Experience",
          desc: "A quiet and scenic lake known for bird watching, hippos, fishing culture, and stunning reflections of Mount Kilimanjaro on calm mornings.",
          highlights: "Bird Watching • Hippos • Kilimanjaro Views",
          duration: "Half Day",
        },
      ].map((trip, i) => (
        <div
          key={i}
          className="min-w-[300px] sm:min-w-[340px] bg-white rounded-3xl overflow-hidden shadow-lg snap-center hover:shadow-2xl transition"
        >
          <img
            src={trip.img}
            alt={trip.title}
            className="h-52 w-full object-cover"
          />

          <div className="p-6">

            {/* Icon + Title */}
            <div className="text-2xl mb-2">{trip.icon}</div>

            <h3 className="text-xl font-bold mb-2">
              {trip.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-6 mb-4">
              {trip.desc}
            </p>

            {/* Highlights */}
            <div className="text-xs text-gray-500 mb-3">
              <span className="font-semibold text-gray-700">Highlights:</span>{" "}
              {trip.highlights}
            </div>

            {/* Duration */}
            <div className="text-yellow-500 font-semibold text-sm">
              Duration: {trip.duration}
            </div>

          </div>
        </div>
      ))}

    </div>
  </div>
</section>

    
    {/* WHY CHOOSE US */}
<section className="relative py-20 md:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

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





{/* ================= REVIEWS SECTION ================= */}
<section className="py-24 md:py-32 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-gray-50 to-white">
  
<div className="relative space-y-5 max-h-[650px] overflow-y-auto pr-2 scroll-smooth
  scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-100
  hover:scrollbar-thumb-yellow-500">

  {/* TOP FADE (hides harsh cut-off) */}
  <div className="pointer-events-none absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white to-transparent z-10" />

  {/* BOTTOM FADE */}
  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent z-10" />


    {/* HEADER */}
    <div className="text-center mb-14">
      <p className="uppercase tracking-[6px] text-yellow-500 font-semibold mb-3">
        Testimonials
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        What Our Tourists Say
      </h2>

      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Real experiences from travelers who explored Kenya with our safari services.
      </p>
    </div>

    {/* CONTENT GRID */}
    <div className="grid lg:grid-cols-2 gap-14 items-start">

      {/* ================= FORM ================= */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8">

        <h3 className="text-2xl font-bold mb-6 text-gray-800">
          Leave a Review
        </h3>

        {/* SUCCESS MESSAGE */}
        {success && (
          <div className="mb-4 bg-green-50 text-green-700 px-4 py-3 rounded-xl text-sm">
            Thank you! Your review has been submitted 🌍
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* NAME */}
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            maxLength={30}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />

          {/* MESSAGE */}
          <textarea
            placeholder="Share your safari experience..."
            value={message}
            maxLength={300}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 h-32 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition resize-none"
          />

          <div className="text-xs text-gray-400 text-right">
            {message.length}/300
          </div>

          {/* STAR RATING (CLICKABLE) */}
          <div>
            <label className="text-sm text-gray-600 font-medium block mb-2">
              Rating:
            </label>

            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className="text-2xl transition"
                >
                  {star <= rating ? "⭐" : "☆"}
                </button>
              ))}
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={!name || !message || loading}
            className={`w-full font-bold py-3 rounded-xl transition shadow-md ${
              !name || !message || loading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-yellow-500 hover:bg-yellow-600 text-black"
            }`}
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>

          <p className="text-xs text-gray-400 text-center">
            Your review helps other travelers choose better safari experiences.
          </p>

        </form>
      </div>

      {/* ================= REVIEWS DISPLAY ================= */}
      <div>

        <h3 className="text-2xl font-bold mb-6 text-gray-800">
          Recent Reviews
        </h3>

        {/* LOADING STATE */}
        {loadingReviews ? (
          <div className="bg-white rounded-2xl p-10 text-center border">
            <p className="text-gray-500">Loading reviews...</p>
          </div>
        ) : (
          <div className="space-y-5 max-h-[600px] overflow-y-auto pr-2">

            {reviews.length === 0 ? (
              <div className="bg-white border border-dashed border-gray-300 rounded-2xl p-10 text-center">
                <p className="text-gray-500 font-medium">
                  No reviews yet
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Be the first to share your experience 🌍
                </p>
              </div>
            ) : (
              reviews.map((r, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
                >

                  {/* HEADER */}
                  <div className="flex items-center justify-between mb-2">

                    {/* AVATAR */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold">
                        {r.name?.charAt(0)?.toUpperCase()}
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {r.name}
                        </h4>
                        <p className="text-xs text-gray-400">
                          {new Date(r.date || Date.now()).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    {/* STARS */}
                    <span className="text-yellow-500 text-sm">
                      {"⭐".repeat(r.rating)}
                    </span>
                  </div>

                  {/* MESSAGE */}
                  <p className="text-gray-600 text-sm leading-7">
                    {r.message}
                  </p>

                </div>
              ))
            )}

          </div>
        )}

      </div>

    </div>
  </div>
</section>

{/* FOOTER */}
{/* FOOTER */}
<footer className="bg-red-950 text-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

    {/* Brand */}
    <div>
      <h2 className="text-3xl font-bold text-yellow-500 mb-2">
        Amboseli link safari
      </h2>

      <p className="text-xs text-gray-500 mb-1">
        Website designed & developed by Dennis Musa
      </p>

      <p className="text-gray-400 leading-8 mb-3">
        Professional safari vehicle hire services in Kimana and Amboseli. Safe, comfortable, and unforgettable safari experiences.
      </p>

      <a
        href="https://dennismusa.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="text-yellow-500 hover:underline text-sm font-semibold"
      >
        View Developer Portfolio
      </a>
    </div>

    {/* Links */}
    <div>
      <h3 className="text-xl font-bold mb-5">Quick Links</h3>

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
      <h3 className="text-xl font-bold mb-5">Services</h3>

      <ul className="space-y-4 text-gray-400">
        <li>Safari Vehicle Hire</li>
        <li>Airport Transfers</li>
        <li>Group Tours</li>
        <li>Private Safari Trips</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-xl font-bold mb-5">Contact Info</h3>

      <ul className="space-y-4 text-gray-400">
        <li>📍 Kimana, Amboseli - Kenya</li>
        <li>📞 +254 724605140</li>
        <li>✉ amboselilink@gmail.com</li>
      </ul>

      <a
        href="https://wa.me/254724605140"
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-lg transition"
      >
        WhatsApp Booking
      </a>
    </div>
  </div>

  {/* Bottom */}
  <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
    © 2026 Amboseli Link Safari Vehicles. All Rights Reserved.
  </div>
</footer>
    </div>
  );
}

export default Home;