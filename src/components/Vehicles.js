import React, { useState } from "react";

import cruiser1 from "../assets/cruiser1.jpg";
import cruiser2 from "../assets/cruiser2.jpg";
import cruiser5 from "../assets/cruiser5.jpg";
import cruiser4 from "../assets/cruiser4.jpg";

function FleetShowcase() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const fleet = [
    {
      name: "Toyota Land Cruiser",
      image: cruiser1,
      seats: "7 Seats",
      type: "4x4 Safari Jeep",
      price: "150",
      category: "4x4",
      rating: 4.9,
    },
    {
      name: "Safari Tour Van",
      image: cruiser2,
      seats: "9 Seats",
      type: "Tour Van",
      price: "120",
      category: "group",
      rating: 4.7,
    },
    {
      name: "Luxury Land Cruiser",
      image: cruiser5,
      seats: "6 Seats",
      type: "VIP Safari Vehicle",
      price: "220",
      category: "luxury",
      rating: 5.0,
    },
    {
      name: "Extended Safari Van",
      image: cruiser4,
      seats: "10 Seats",
      type: "Group Tour Vehicle",
      price: "180",
      category: "group",
      rating: 4.6,
    },
  ];

  const filteredFleet = fleet.filter((v) => {
    const matchesSearch = v.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || v.category === filter;
    return matchesSearch && matchesFilter;
  });

  const getWhatsAppLink = (vehicle) => {
    const message = `Hello, I want to book the ${vehicle.name} (${vehicle.type}) for $${vehicle.price} per day. Please assist me.`;
    return `https://wa.me/254724605140?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO */}
      <section className="bg-black text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Premium Safari Fleet
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Luxury, comfort, and reliability for your unforgettable Kenya safari experience.
          </p>
        </div>
      </section>

      {/* CONTROLS */}
      <section className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-4 justify-between">

        <input
          type="text"
          placeholder="Search vehicles..."
          className="w-full md:w-1/3 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-yellow-500"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-3 flex-wrap">
          {["all", "4x4", "luxury", "group"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                filter === cat
                  ? "bg-yellow-500 text-black"
                  : "bg-white border text-gray-700"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* VEHICLES */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        {filteredFleet.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No vehicles found.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {filteredFleet.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 text-xs font-bold rounded-full">
                    {item.category.toUpperCase()}
                  </div>

                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 text-xs rounded-full">
                    ⭐ {item.rating}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <h2 className="text-xl font-bold mb-1">{item.name}</h2>

                  <p className="text-gray-600 text-sm mb-2">{item.type}</p>

                  <p className="text-gray-700 mb-3">👥 {item.seats}</p>

                  {/* PRICE */}
                  <div className="text-2xl font-bold text-yellow-600 mb-4">
                    ${item.price} <span className="text-sm text-gray-500">/ day</span>
                  </div>

                  {/* BUTTON */}
                  <a
                    href={getWhatsAppLink(item)}
                    target="_blank"
                    rel="noreferrer"
                    className="block bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-xl font-semibold transition"
                  >
                    Book on WhatsApp
                  </a>

                </div>
              </div>
            ))}

          </div>
        )}
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-14">
            Why Choose Our Fleet?
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-left">

            <div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-3">Comfort First</h3>
              <p className="text-gray-600">
                Spacious, clean, and well-maintained safari vehicles.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-3">Expert Drivers</h3>
              <p className="text-gray-600">
                Experienced local safari guides with deep knowledge.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-3">Best Pricing</h3>
              <p className="text-gray-600">
                Affordable safari packages for all travelers.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-500 py-16 text-center px-6">
        <h2 className="text-4xl font-bold text-black mb-4">
          Ready For Your Safari?
        </h2>

        <a
          href="https://wa.me/254724605140"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-4 bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-900 transition"
        >
          Book Instantly
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-14 text-center">
        © 2026 Kimana Safari Vehicles. All Rights Reserved.
      </footer>

    </div>
  );
}

export default FleetShowcase;