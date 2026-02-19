import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Bookings.css';

const Bookings = () => {
  const [result, setResult] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    setResult('');

    const formData = new FormData(event.target);

    // Basic validation
    if (
      !formData.get('name') ||
      !formData.get('contact') ||
      !formData.get('date') ||
      !formData.get('location')
    ) {
      setResult('⚠️ Please fill all required fields.');
      return;
    }

    const name = formData.get('name');
    const contact = formData.get('contact');
    const date = formData.get('date');
    const location = formData.get('location');
    const message = formData.get('message') || '';

    const whatsappMessage = `
Hello Heba 👋
I’d like to book a Mehendi appointment 🌿

Name: ${name}
Contact: ${contact}
Date: ${date}
Location: ${location}
Message: ${message}
    `;

    const whatsappURL = `https://wa.me/918431025128?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      window.open(whatsappURL, '_blank');
    }, 1000);

    event.target.reset();
  };

  return (
    <div className="bookings-section" id="bookings" data-aos="fade-up">
      <div className="bookings-content">
        <h2>Book Your Mehendi Appointment</h2>
        <p>
          Whether it’s a wedding, festival, or celebration — let's add a touch of elegance to your occasion.
          Fill out the form below to book via WhatsApp.
        </p>

        <ul>
          <li><strong>📞 Phone:</strong> 84310 25128</li>
          <li>
            <strong>📸 Instagram:</strong>{' '}
            <a
              href="https://www.instagram.com/mehendi_by_heba_"
              target="_blank"
              rel="noopener noreferrer"
            >
              @mehendi_by_heba_
            </a>
          </li>
        </ul>

        <form onSubmit={onSubmit} className="booking-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            aria-label="Your Name"
          />

          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            required
            aria-label="Contact Number"
          />

          <input
            type="date"
            name="date"
            required
            aria-label="Booking Date"
          />

          <input
            type="text"
            name="location"
            placeholder="Location / Address"
            required
            aria-label="Location"
          />

          <textarea
            name="message"
            placeholder="Tell me about your occasion..."
            rows="4"
            aria-label="Message"
          ></textarea>

          <button type="submit">
            Submit Booking
          </button>
        </form>

        {result && <div className="result-message">{result}</div>}
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>📲 Redirecting to WhatsApp</h3>
            <p>Please send the message to confirm your booking.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;
