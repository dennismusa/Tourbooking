import React from "react";

import cruiser1 from "../assets/cruiser1.jpg";
import cruiser2 from "../assets/cruiser2.jpg";
import cruiser4 from "../assets/cruiser4.jpg";
import cruiser5 from "../assets/cruiser5.jpg";

function Gallery() {
  const galleryItems = [
    {
      image: cruiser1,
      title: "4x4 Safari Land Cruiser",
      description:
        "Engineered for extreme off-road safari conditions in Amboseli, Tsavo, and Maasai Mara. Built with reinforced suspension, high ground clearance, and panoramic viewing windows for wildlife photography.",
      features: ["4x4 Drive", "Pop-up Roof", "Wildlife Ready"],
    },
    {
      image: cruiser2,
      title: "Off-Road Safari Experience",
      description:
        "Designed for rugged terrain exploration across Kenya’s national parks. Ideal for photographers and adventure travelers seeking close wildlife encounters in comfort and safety.",
      features: ["All Terrain", "Spacious Interior", "Safari Guides Ready"],
    },
    {
      image: cruiser4,
      title: "Tour Vans for Group Safaris",
      description:
        "Comfortable and reliable safari vans designed for families, tour groups, and educational trips. Offers ample seating, luggage space, and excellent visibility.",
      features: ["9–12 Seats", "Air Ventilation", "Group Friendly"],
    },
    {
      image: cruiser5,
      title: "Luxury Safari Vehicles",
      description:
        "Premium safari experience with executive seating, enhanced comfort, and smooth travel across Kenya’s scenic parks. Perfect for VIP clients and private tours.",
      features: ["VIP Comfort", "Leather Seats", "Private Tours"],
    },
    {
      image: cruiser1,
      title: "Airport Transfer Vehicles",
      description:
        "Reliable and punctual airport transfer services between Nairobi, Amboseli, and surrounding safari destinations. Ensures comfort and safety after long flights.",
      features: ["24/7 Availability", "Professional Drivers", "On-Time Pickup"],
    },
    {
      image: cruiser2,
      title: "4WD Safari Cruiser (Elite Edition)",
      description:
        "High-performance safari cruiser built for deep wilderness exploration. Ideal for long-distance game drives and extended safari expeditions.",
      features: ["Heavy Duty 4WD", "Long Range Travel", "Comfort Suspension"],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">

      {/* HERO SECTION */}
      <section className="relative bg-black text-white py-28 text-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
          style={{ backgroundImage: `url(${cruiser1})` }}
        />

        <div className="relative z-10 px-6">
          <p className="uppercase tracking-[6px] text-yellow-400 font-semibold mb-4">
            Safari Gallery
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Explore Our Fleet
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-8">
            Discover our premium safari vehicles designed for comfort, safety,
            and unforgettable wildlife experiences across Kenya’s top national parks.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
              </div>

              {/* CONTENT */}
              <div className="p-7">

                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h2>

                <p className="text-gray-600 leading-7 mb-5">
                  {item.description}
                </p>

                {/* FEATURES */}
                <div className="flex flex-wrap gap-2">
                  {item.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16 mt-10">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Kimana Safari Vehicles
            </h2>
            <p className="text-gray-400 leading-7">
              Premium safari transport services across Amboseli, Tsavo, and Kenya’s top wildlife destinations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Home</li>
              <li>Fleet</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>📍 Kimana, Kenya</li>
              <li>📞 +254 724 605140</li>
              <li>✉ info@safari-vehicles.com</li>
            </ul>
          </div>

        </div>

        <div className="text-center text-gray-500 mt-10 border-t border-gray-800 pt-6">
          © 2026 Safari Vehicles Kenya. All Rights Reserved.
        </div>

      </footer>

    </div>
  );
}

export default Gallery;