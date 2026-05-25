import React, { useState } from "react";
import { Link } from "react-router-dom";

import cruiser1 from "../assets/cruiser1.jpg";
import cruiser2 from "../assets/cruiser2.jpg";
import cruiser4 from "../assets/cruiser4.jpg";
import cruiser5 from "../assets/cruiser5.jpg";

function FleetShowcase() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const fleet = [
    {
      name: "Toyota Land Cruiser",
      image: cruiser1,
      gallery: [cruiser1, cruiser2],
      seats: "7 Seats",
      type: "4x4 Safari Jeep",
      price: "150",
      category: "4x4",
      rating: 4.9,
      transmission: "Automatic",
      fuel: "Diesel",
      location: "Amboseli & Tsavo",
      description:
        "Powerful 4x4 safari jeep designed for rugged terrain, wildlife photography, and premium comfort during long game drives.",
      features: [
        "Pop-up Roof",
        "Charging Ports",
        "Cool Box",
        "Professional Guide",
      ],
    },
    {
      name: "Safari Tour Van",
      image: cruiser2,
      gallery: [cruiser2, cruiser4],
      seats: "9 Seats",
      type: "Tour Van",
      price: "120",
      category: "group",
      rating: 4.7,
      transmission: "Manual",
      fuel: "Diesel",
      location: "Nairobi & Amboseli",
      description:
        "Affordable and comfortable safari van ideal for families and group adventures across Kenya’s top destinations.",
      features: [
        "Large Windows",
        "Air Conditioning",
        "Roof Hatch",
        "Group Friendly",
      ],
    },
    {
      name: "Luxury Land Cruiser",
      image: cruiser5,
      gallery: [cruiser5, cruiser1],
      seats: "6 Seats",
      type: "VIP Safari Vehicle",
      price: "220",
      category: "luxury",
      rating: 5.0,
      transmission: "Automatic",
      fuel: "Diesel",
      location: "Luxury Safari Routes",
      description:
        "Luxury safari vehicle offering elite comfort, premium interiors, photography-friendly design, and VIP safari experiences.",
      features: [
        "Luxury Interior",
        "WiFi",
        "Mini Fridge",
        "VIP Service",
      ],
    },
    {
      name: "Extended Safari Van",
      image: cruiser4,
      gallery: [cruiser4, cruiser2],
      seats: "10 Seats",
      type: "Group Tour Vehicle",
      price: "180",
      category: "group",
      rating: 4.6,
      transmission: "Manual",
      fuel: "Diesel",
      location: "Group Safari Tours",
      description:
        "Large capacity safari van perfect for tour companies, school trips, and travel groups exploring Kenya.",
      features: [
        "Extra Luggage Space",
        "Comfort Seats",
        "Safari Roof",
        "Group Packages",
      ],
    },
  ];

  const filteredFleet = fleet.filter((v) => {
    const matchesSearch = v.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" || v.category === filter;

    return matchesSearch && matchesFilter;
  });

  const getWhatsAppLink = (vehicle) => {
    const message = `Hello, I want to book the ${vehicle.name} (${vehicle.type}) for $${vehicle.price} per day. Please assist me.`;

    return `https://wa.me/254724605140?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <div className="bg-white text-gray-900 overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">

        {/* background */}
        <div className="absolute inset-0">
          <img
            src={cruiser1}
            alt="Safari Fleet"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

          <p className="uppercase tracking-[6px] text-yellow-400 font-semibold mb-5">
            Premium Safari Fleet
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Luxury Safari Vehicles For Every Adventure
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-8 max-w-3xl mx-auto mb-10">
            Explore Kenya’s breathtaking wildlife destinations with our modern,
            reliable, and fully equipped safari vehicles designed for comfort,
            safety, and unforgettable journeys.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="https://wa.me/254724605140"
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold transition shadow-xl"
            >
              Book Safari Vehicle
            </a>

            <Link
              to="/contact"
              className="border border-white/40 hover:bg-white hover:text-black px-8 py-4 rounded-2xl transition"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>

      {/* FILTERS */}
      <section className="py-14 px-4 sm:px-6 md:px-8 bg-gray-50 border-b">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 justify-between items-center">

          {/* search */}
          <div className="w-full lg:w-[350px]">
            <input
              type="text"
              placeholder="Search safari vehicles..."
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white shadow-sm"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* filters */}
          <div className="flex flex-wrap gap-3 justify-center">

            {["all", "4x4", "luxury", "group"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${
                  filter === cat
                    ? "bg-yellow-500 text-black shadow-lg"
                    : "bg-white border border-gray-200 hover:border-yellow-500"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}

          </div>

        </div>
      </section>

      {/* VEHICLE GRID */}
      <section className="py-24 px-4 sm:px-6 md:px-8">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-yellow-500 font-semibold mb-4">
              Safari Collection
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Explore Our Premium Fleet
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
              From luxury Land Cruisers to group safari vans, we provide the
              perfect vehicle for every safari experience across Kenya.
            </p>

          </div>

          {filteredFleet.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-700 mb-3">
                No Vehicles Found
              </h3>

              <p className="text-gray-500">
                Try another search or filter option.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

              {filteredFleet.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >

                  {/* image */}
                  <div className="relative overflow-hidden h-80">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                    <div className="absolute top-4 left-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      {item.category.toUpperCase()}
                    </div>

                    <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                      ⭐ {item.rating}
                    </div>

                    <div className="absolute bottom-5 left-5 text-white">
                      <h3 className="text-2xl font-bold">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-200">
                        {item.type}
                      </p>
                    </div>

                  </div>

                  {/* content */}
                  <div className="p-6">

                    <div className="grid grid-cols-2 gap-4 mb-5">

                      <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-sm text-gray-500 mb-1">
                          Seats
                        </p>

                        <h4 className="font-bold">
                          {item.seats}
                        </h4>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-sm text-gray-500 mb-1">
                          Transmission
                        </p>

                        <h4 className="font-bold">
                          {item.transmission}
                        </h4>
                      </div>

                    </div>

                    <p className="text-gray-600 leading-7 mb-6">
                      {item.description}
                    </p>

                    {/* features */}
                    <div className="flex flex-wrap gap-2 mb-6">

                      {item.features.map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs bg-yellow-50 text-yellow-700 border border-yellow-100 px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}

                    </div>

                    {/* footer */}
                    <div className="flex items-center justify-between mb-6">

                      <div>
                        <p className="text-sm text-gray-500">
                          Starting From
                        </p>

                        <h3 className="text-3xl font-bold text-yellow-600">
                          ${item.price}
                          <span className="text-sm text-gray-500">
                            {" "}
                            / day
                          </span>
                        </h3>
                      </div>

                    </div>

                    {/* buttons */}
                    <div className="flex flex-col gap-3">

                      <button
                        onClick={() => setSelectedVehicle(item)}
                        className="w-full bg-black hover:bg-yellow-500 hover:text-black text-white py-3 rounded-xl font-semibold transition"
                      >
                        Explore Vehicle
                      </button>

                      <a
                        href={getWhatsAppLink(item)}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-xl font-semibold transition"
                      >
                        Book on WhatsApp
                      </a>

                    </div>

                  </div>
                </div>
              ))}

            </div>
          )}

        </div>
      </section>

      {/* WHY CHOOSE US */}
     <section className="relative py-28 px-4 sm:px-6 md:px-10 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">

  {/* Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-400/10 blur-[140px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-300/10 blur-[120px] rounded-full"></div>

  <div className="relative max-w-7xl mx-auto text-center">

    {/* Title */}
    <p className="uppercase tracking-[8px] text-yellow-500 font-semibold mb-5">
      Why Choose Us
    </p>

    <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
      Trusted Safari Transport Experts
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-8 mb-20">
      We deliver unforgettable safari experiences through professional drivers,
      modern 4x4 vehicles, and deep knowledge of Kenya’s most iconic wildlife destinations.
    </p>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* CARD 1 */}
      <div className="group relative p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

        <div className="relative z-10">

          <div className="text-6xl mb-6 group-hover:scale-110 transition duration-300">
            🚙
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Modern Safari Fleet
          </h3>

          <p className="text-gray-600 leading-8">
            Clean, powerful 4x4 safari vehicles designed for comfort,
            safety, and off-road adventure across Kenya’s national parks.
          </p>

        </div>
      </div>

      {/* CARD 2 */}
      <div className="group relative p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

        <div className="relative z-10">

          <div className="text-6xl mb-6 group-hover:scale-110 transition duration-300">
            🦁
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Local Safari Experts
          </h3>

          <p className="text-gray-600 leading-8">
            Experienced guides with deep knowledge of wildlife behavior,
            migration routes, and hidden game-viewing spots.
          </p>

        </div>
      </div>

      {/* CARD 3 */}
      <div className="group relative p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

        <div className="relative z-10">

          <div className="text-6xl mb-6 group-hover:scale-110 transition duration-300">
            ⭐
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Premium Experience
          </h3>

          <p className="text-gray-600 leading-8">
            Smooth booking process, reliable service, and unforgettable safari
            journeys tailored to your travel style and budget.
          </p>

        </div>
      </div>

    </div>
  </div>
</section>

      {/* CTA */}
      <section className="relative py-24 px-6 bg-black text-white text-center overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.15),transparent_60%)]"></div>

        <div className="relative max-w-4xl mx-auto">

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready For Your Next Safari?
          </h2>

          <p className="text-gray-300 text-lg leading-8 mb-10">
            Book your safari vehicle today and experience Kenya’s wildlife in
            comfort, safety, and style.
          </p>

          <a
            href="https://wa.me/254724605140"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-4 rounded-2xl transition shadow-lg"
          >
            Start Booking
          </a>

        </div>
      </section>

      {/* MODAL */}
      {selectedVehicle && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">

          <div className="bg-white max-w-5xl w-full rounded-3xl overflow-hidden relative animate-fadeIn max-h-[95vh] overflow-y-auto">

            {/* close */}
            <button
              onClick={() => setSelectedVehicle(null)}
              className="absolute top-5 right-5 z-20 bg-black text-white w-10 h-10 rounded-full"
            >
              ✕
            </button>

            <div className="grid lg:grid-cols-2">

              {/* image */}
              <div className="h-full">
                <img
                  src={selectedVehicle.image}
                  alt={selectedVehicle.name}
                  className="w-full h-full object-cover lg:min-h-[600px]"
                />
              </div>

              {/* content */}
              <div className="p-8 md:p-10">

                <p className="uppercase tracking-[4px] text-yellow-500 font-semibold mb-3">
                  Premium Safari Vehicle
                </p>

                <h2 className="text-4xl font-bold mb-5">
                  {selectedVehicle.name}
                </h2>

                <p className="text-gray-600 leading-8 mb-8">
                  {selectedVehicle.description}
                </p>

                <div className="grid grid-cols-2 gap-5 mb-8">

                  <div className="bg-gray-100 rounded-2xl p-5">
                    <p className="text-gray-500 text-sm mb-1">
                      Seats
                    </p>

                    <h3 className="font-bold text-lg">
                      {selectedVehicle.seats}
                    </h3>
                  </div>

                  <div className="bg-gray-100 rounded-2xl p-5">
                    <p className="text-gray-500 text-sm mb-1">
                      Price
                    </p>

                    <h3 className="font-bold text-lg text-yellow-600">
                      ${selectedVehicle.price}/day
                    </h3>
                  </div>

                  <div className="bg-gray-100 rounded-2xl p-5">
                    <p className="text-gray-500 text-sm mb-1">
                      Fuel
                    </p>

                    <h3 className="font-bold text-lg">
                      {selectedVehicle.fuel}
                    </h3>
                  </div>

                  <div className="bg-gray-100 rounded-2xl p-5">
                    <p className="text-gray-500 text-sm mb-1">
                      Location
                    </p>

                    <h3 className="font-bold text-lg">
                      {selectedVehicle.location}
                    </h3>
                  </div>

                </div>

                <div className="mb-8">

                  <h3 className="text-xl font-bold mb-4">
                    Included Features
                  </h3>

                  <div className="flex flex-wrap gap-3">

                    {selectedVehicle.features.map((f, i) => (
                      <span
                        key={i}
                        className="bg-yellow-50 text-yellow-700 border border-yellow-100 px-4 py-2 rounded-full text-sm"
                      >
                        {f}
                      </span>
                    ))}

                  </div>

                </div>

                <div className="flex flex-col sm:flex-row gap-4">

                  <a
                    href={getWhatsAppLink(selectedVehicle)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-4 rounded-xl font-bold transition"
                  >
                    Book on WhatsApp
                  </a>

                  <button
                    onClick={() => setSelectedVehicle(null)}
                    className="flex-1 border border-gray-300 hover:bg-gray-100 py-4 rounded-xl font-semibold transition"
                  >
                    Close
                  </button>

                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-red-950 text-white py-16">

        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>
            <h2 className="text-3xl font-bold text-yellow-500 mb-5">
              Kimana Safari
            </h2>

            <p className="text-gray-400 leading-8">
              Premium safari vehicle hire services across Kenya with trusted
              local drivers and unforgettable safari experiences.
            </p>
          </div>

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
                <Link
                  to="/vehicles"
                  className="hover:text-yellow-500 transition"
                >
                  Fleet
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="hover:text-yellow-500 transition"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-500 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">
              Services
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>Safari Vehicle Hire</li>
              <li>Luxury Tours</li>
              <li>Airport Transfers</li>
              <li>Photography Safaris</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">
              Contact
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
              className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-3 rounded-xl transition"
            >
              WhatsApp Booking
            </a>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-14 pt-8 text-center text-gray-500">
          © 2026 Kimana Safari Vehicles. All Rights Reserved.
        </div>

      </footer>

    </div>
  );
}

export default FleetShowcase;