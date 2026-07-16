import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
//import BookingPage from "./components/Bookingpage";
import Home from "./components/Home";
import Vehicles from "./components/Vehicles";
//import Destinations from "./components/Destinations";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import "./i18n";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white min-h-screen">

        <Navbar />

        <main className="pt-20">

          <Routes>

            {/* DEFAULT REDIRECT */}
            <Route path="/" element={<Navigate to="/en/home" />} />

            {/* MULTILINGUAL ROUTES */}
            <Route path="/:lang/home" element={<Home />} />
            <Route path="/:lang/vehicles" element={<Vehicles />} />
           
            <Route path="/:lang/gallery" element={<Gallery />} />
            <Route path="/:lang/contact" element={<Contact />} />

            {/* BACKWARD COMPATIBILITY (optional) */}
            <Route path="/home" element={<Navigate to="/en/home" />} />
            <Route path="/vehicles" element={<Navigate to="/en/vehicles" />} />
           
            <Route path="/gallery" element={<Navigate to="/en/gallery" />} />
            <Route path="/contact" element={<Navigate to="/en/contact" />} />

          </Routes>

        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;