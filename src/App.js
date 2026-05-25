import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Vehicles from "./components/Vehicles";
import Destinations from "./components/Destinations";
import Home from "./components/Home";
//import FleetShowcase from "./components/Vehicles";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white min-h-screen">
        <Navbar />

        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/Vehicles" element={<Vehicles />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;