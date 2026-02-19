import React, { useState } from "react";
import "./Bookings.css";

const Bookings = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !date || !service) {
      alert("Please fill all fields");
      return;
    }

    const message = `Hello, I'd like to enquire about Mehendi services.
Name: ${name}
Phone: ${phone}
Date: ${date}
Service: ${service}`;

    const whatsappNumber = "918431025128";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    setShowPopup(true);

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      setShowPopup(false);
    }, 1500);
  };

  return (
    <div className="bookings-section">
      <div className="bookings-content">
        <h2>Book Your Mehendi</h2>
        <p>Fill the details below and connect with us instantly on WhatsApp</p>

        <form onSubmit={handleSubmit} className="booking-form">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Select Service</option>
            <option value="Eid Mehendi">Eid Mehendi</option>
            <option value="Arabic Mehendi">Arabic Mehendi</option>
            <option value="Simple Mehendi">Simple Mehendi</option>
          </select>

          <button type="submit">Submit Booking</button>
        </form>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-box">
              <p>Redirecting to WhatsApp…</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
