"use client";

import { useState } from "react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    duration: "",
    country: "",
    destination: "",
    adults: 1,
    children: 0,
    arrivalDate: "",
    departureDate: "",
    level: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "adults" || name === "children"
          ? Number(value)
          : value,
    }));
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.email || !formData.phone) {
      return "Please fill in all required fields.";
    }
    if (formData.adults < 1) {
      return "At least 1 adult is required.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit booking");

      setSuccess(true);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        duration: "",
        country: "",
        destination: "",
        adults: 1,
        children: 0,
        arrivalDate: "",
        departureDate: "",
        level: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-center mb-2">
          Plan Your Safari Booking
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Fill in your details and we’ll design your perfect safari experience
        </p>

        {success && (
          <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-center">
            Booking submitted successfully! We will contact you within 24 hours.
          </div>
        )}

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Personal Info */}
          <div>
            <h2 className="font-semibold mb-2">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleChange}
                className="p-3 border rounded-lg"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="p-3 border rounded-lg"
              />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-semibold mb-2">Contact Details</h2>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-3"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          {/* Trip Info */}
          <div>
            <h2 className="font-semibold mb-2">Trip Details</h2>

            <div className="grid grid-cols-2 gap-4 mb-3">
              <input
                type="number"
                name="duration"
                placeholder="Duration (Days)"
                value={formData.duration}
                onChange={handleChange}
                className="p-3 border rounded-lg"
              />

              <input
                type="text"
                name="country"
                placeholder="Country of Residence"
                value={formData.country}
                onChange={handleChange}
                className="p-3 border rounded-lg"
              />
            </div>

            <input
              type="text"
              name="destination"
              placeholder="Destination (e.g. Maasai Mara)"
              value={formData.destination}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-3"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                name="adults"
                placeholder="Adults"
                value={formData.adults}
                onChange={handleChange}
                className="p-3 border rounded-lg"
              />

              <input
                type="number"
                name="children"
                placeholder="Children"
                value={formData.children}
                onChange={handleChange}
                className="p-3 border rounded-lg"
              />
            </div>
          </div>

          {/* Dates */}
          <div>
            <h2 className="font-semibold mb-2">Travel Dates</h2>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                name="arrivalDate"
                value={formData.arrivalDate}
                onChange={handleChange}
                className="p-3 border rounded-lg"
              />

              <input
                type="date"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleChange}
                className="p-3 border rounded-lg"
              />
            </div>
          </div>

          {/* Level */}
          <div>
            <h2 className="font-semibold mb-2">Safari Type</h2>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Select Level</option>
              <option value="budget">Budget</option>
              <option value="midrange">Mid-range</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded-lg text-white transition ${
              loading
                ? "bg-gray-400"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Submitting..." : "Submit Booking"}
          </button>
        </form>
      </div>
    </div>
  );
}