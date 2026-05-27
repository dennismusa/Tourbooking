import React from "react";

import { Link } from "react-router-dom";
function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking request sent successfully!");
  };

  return (
    <div className="bg-black text-white">

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT INFO */}
          <div>
            <p className="uppercase tracking-[5px] text-yellow-400 font-semibold mb-4">
              Get In Touch
            </p>

            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Plan Your Amboseli Safari Today
            </h2>

            <p className="text-gray-400 text-lg leading-8 mb-10">
              Book reliable safari vehicles in Kimana and Amboseli. We provide
              professional drivers, well-maintained 4x4 vehicles, and 24/7 support
              for all safari needs.
            </p>

            <div className="space-y-5 text-lg text-gray-300">
              <p>📍 <span className="text-white font-semibold">Kimana, Amboseli - Kenya</span></p>
              <p>📞 +254724605140</p>
              <p>✉ info@kimanasafari.com</p>
            </div>

            <a
              href="https://wa.me/254724605140"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-10 bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 rounded-xl transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* FORM */}
          <div className="bg-white text-black rounded-2xl p-10 shadow-2xl">

            <h3 className="text-3xl font-bold mb-6">
              Booking Request
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
              />

              <input
                type="text"
                name="phone"
                required
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
              />

              <select
                name="vehicle"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
              >
                <option value="">Select Vehicle</option>
                <option>Safari Land Cruiser</option>
                <option>Tour Van</option>
                <option>Luxury Land Cruiser</option>
                <option>Group Safari Van</option>
              </select>

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 rounded-xl transition"
              >
                Send Request
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-10">
            Our Location in Kimana
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800">

            <iframe
              title="Kimana Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31831.1!2d37.513!3d-2.803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0b1b1a1a1a1a%3A0x0!2sKimana%2C%20Kenya!5e0!3m2!1sen!2ske!4v0000000000000"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              className="w-full"
            ></iframe>

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

export default Contact;