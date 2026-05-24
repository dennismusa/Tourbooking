import React from "react";
import { Link } from "react-router-dom";


import cruiser1 from "../assets/cruiser1.jpg";
//import cruiser2 from "../assets/cruiser2.jpg";
//import cruiser3 from "../assets/cruiser3.jpg";
//import cruiser4 from "../assets/cruiser4.jpg";
//import cruiser5 from "../assets/cruiser5.jpg";
function Home() {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${cruiser1})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl text-white">
            <p className="uppercase tracking-[6px] text-yellow-400 mb-4 font-semibold">
              Amboseli Safari Experience
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Explore Kenya With Premium Safari Vehicles
            </h1>

            <p className="text-lg md:text-2xl text-gray-300 leading-8 mb-10">
              Reliable safari transport services in Kimana and Amboseli for
              tourists, families, photographers, and adventure groups.
            </p>

            <div className="flex flex-wrap gap-5">
              
             <Link
  to="/vehicles"
  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-lg transition duration-300"
>
  Explore Fleet
</Link>

<Link
  to="/contact"
  className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg transition duration-300"
>
  Book Safari
</Link>

            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <div className="relative">
            <img
              src={cruiser1}
              alt="Safari Vehicle"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />

            <div className="absolute -bottom-8 -right-8 bg-yellow-500 text-black p-6 rounded-2xl shadow-xl">
              <h3 className="text-4xl font-bold">10+</h3>
              <p className="font-medium">Premium Vehicles</p>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <p className="uppercase tracking-[4px] text-yellow-500 font-semibold mb-4">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Trusted Safari Transport In Amboseli
            </h2>

            <p className="text-gray-600 text-lg leading-8 mb-8">
              We provide comfortable, safe, and professional safari vehicle
              hire services for tourists visiting Amboseli National Park,
              Kimana Sanctuary, Tsavo, and Maasai cultural destinations.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              
              <div className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
                <h3 className="text-3xl font-bold text-yellow-500 mb-2">
                  500+
                </h3>

                <p className="text-gray-600 font-medium">
                  Happy Tourists
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
                <h3 className="text-3xl font-bold text-yellow-500 mb-2">
                  24/7
                </h3>

                <p className="text-gray-600 font-medium">
                  Booking Support
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
                <h3 className="text-3xl font-bold text-yellow-500 mb-2">
                  Professional
                </h3>

                <p className="text-gray-600 font-medium">
                  Local Drivers
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
                <h3 className="text-3xl font-bold text-yellow-500 mb-2">
                  Affordable
                </h3>

                <p className="text-gray-600 font-medium">
                  Safari Packages
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-100 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          
          <p className="uppercase tracking-[4px] text-yellow-500 font-semibold mb-4">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Experience Safari Travel Differently
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            
            <div className="bg-white p-10 rounded-3xl shadow-md hover:shadow-2xl transition">
              <div className="text-5xl mb-6">🚘</div>

              <h3 className="text-2xl font-bold mb-4">
                Premium Vehicles
              </h3>

              <p className="text-gray-600 leading-7">
                Well-maintained safari vehicles designed for comfort and safety.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-md hover:shadow-2xl transition">
              <div className="text-5xl mb-6">🦁</div>

              <h3 className="text-2xl font-bold mb-4">
                Authentic Safari Experience
              </h3>

              <p className="text-gray-600 leading-7">
                Explore wildlife, landscapes, and culture with experienced local guides.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-md hover:shadow-2xl transition">
              <div className="text-5xl mb-6">📍</div>

              <h3 className="text-2xl font-bold mb-4">
                Local Expertise
              </h3>

              <p className="text-gray-600 leading-7">
                Deep knowledge of Amboseli routes, attractions, and hidden gems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-yellow-500 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready For Your Safari Adventure?
          </h2>

          <p className="text-lg text-black leading-8 mb-10">
            Book your safari vehicle today and enjoy unforgettable experiences
            across Amboseli and Kenya.
          </p>

          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-black text-white px-10 py-4 rounded-lg font-bold hover:bg-gray-900 transition duration-300"
          >
            Book On WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          
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
              <li>📞 +254 7XX XXX XXX</li>
              <li>✉ info@kimanasafari.com</li>
            </ul>

            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-lg transition"
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