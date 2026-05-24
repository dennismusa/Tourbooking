import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Glass effect container */}
      <div className="backdrop-blur-md bg-black/40 border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide text-white hover:text-yellow-300 transition"
          >
            Kimana Safari Vehicles
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">

            <Link className="text-white/90 hover:text-yellow-300 transition" to="/">
              Home
            </Link>

            <Link className="text-white/90 hover:text-yellow-300 transition" to="/gallery">
              Gallery
            </Link>

            <Link className="text-white/90 hover:text-yellow-300 transition" to="/vehicles">
              Vehicles
            </Link>

            <Link className="text-white/90 hover:text-yellow-300 transition" to="/contact">
              Contact
            </Link>

            {/* CTA Button */}
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noreferrer"
              className="ml-4 bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition shadow-md"
            >
              Book Now
            </a>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;