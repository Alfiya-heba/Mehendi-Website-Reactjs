import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Bookings.css';

const Bookings = () => {
  const [result, setResult] = useState('');
  const [showPopup, setShowPopup] = useState(false);
<<<<<<< HEAD
=======
  const [loading, setLoading] = useState(false);
>>>>>>> 0db5ff1fa2edda67b0f5d3f10452079b12bb3aa5

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

<<<<<<< HEAD
  const onSubmit = (event) => {
    event.preventDefault();
    setResult('');

=======
  const onSubmit = async (event) => {
    event.preventDefault();
>>>>>>> 0db5ff1fa2edda67b0f5d3f10452079b12bb3aa5
    const formData = new FormData(event.target);

    // Basic validation
    if (
      !formData.get('name') ||
      !formData.get('contact') ||
<<<<<<< HEAD
=======
      !formData.get('email') ||
>>>>>>> 0db5ff1fa2edda67b0f5d3f10452079b12bb3aa5
      !formData.get('date') ||
      !formData.get('location')
    ) {
      setResult('⚠️ Please fill all required fields.');
      return;
    }

<<<<<<< HEAD
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
=======
    setLoading(true);
    setResult('');

    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    // Set up auto-reply to the customer
    formData.append('replyto', formData.get('email')); // their email
    formData.append(
      'autoresponse',
      `Hi ${formData.get('name')} 👋,\n\nThank you for booking with Mehendi by Heba! 💚\n\nI’ve received your booking for ${formData.get('date')} at ${formData.get('location')}.\n\nI'll reach out to confirm soon. Feel free to reply if you have any questions.\n\n- Heba 🌿`
    );

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully!');
        event.target.reset();
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          window.location.href = 'https://www.instagram.com/mehendi_by_heba_';
        }, 3000);
      } else {
        setResult('Something went wrong. Please try again.');
      }
    } catch (error) {
      setResult('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
>>>>>>> 0db5ff1fa2edda67b0f5d3f10452079b12bb3aa5
  };

  return (
    <div className="bookings-section" id="bookings" data-aos="fade-up">
      <div className="bookings-content">
        <h2>Book Your Mehendi Appointment</h2>
        <p>
<<<<<<< HEAD
          Whether it’s a wedding, festival, or celebration — let's add a touch of elegance to your occasion.
          Fill out the form below to book via WhatsApp.
=======
          Whether it’s a wedding, festival, or celebration — let's add a touch of elegance to your occasion. You can contact me or fill out the form below.
>>>>>>> 0db5ff1fa2edda67b0f5d3f10452079b12bb3aa5
        </p>

        <ul>
          <li><strong>📞 Phone:</strong> 84310 25128</li>
<<<<<<< HEAD
          <li>
            <strong>📸 Instagram:</strong>{' '}
            <a
              href="https://www.instagram.com/mehendi_by_heba_"
              target="_blank"
              rel="noopener noreferrer"
            >
=======
          <li><strong>📧 Email:</strong> <a href="mailto:mehendibyheba@gmail.com">mehendibyheba@gmail.com</a></li>
          <li>
            <strong>📸 Instagram:</strong>{' '}
            <a href="https://www.instagram.com/mehendi_by_heba_" target="_blank" rel="noopener noreferrer">
>>>>>>> 0db5ff1fa2edda67b0f5d3f10452079b12bb3aa5
              @mehendi_by_heba_
            </a>
          </li>
        </ul>

        <form onSubmit={onSubmit} className="booking-form">
<<<<<<< HEAD
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
=======
          <input type="text" name="name" placeholder="Your Name" required aria-label="Your Name" />
          <input type="email" name="email" placeholder="Your Email" required aria-label="Email Address" />
          <input type="tel" name="contact" placeholder="Contact Number" required aria-label="Contact Number" />
          <input type="date" name="date" required aria-label="Booking Date" />
          <input type="text" name="location" placeholder="Location / Address" required aria-label="Location" />
          <textarea name="message" placeholder="Tell me about your occasion..." rows="4" aria-label="Message"></textarea>
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Submit Booking'}
>>>>>>> 0db5ff1fa2edda67b0f5d3f10452079b12bb3aa5
          </button>
        </form>

        {result && <div className="result-message">{result}</div>}
<<<<<<< HEAD
=======

        <div className="whatsapp-link">
          <p>Prefer chatting? Book directly via WhatsApp!</p>
          <a
            href="https://wa.me/918431025128"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            📲 Message on WhatsApp
          </a>
        </div>
>>>>>>> 0db5ff1fa2edda67b0f5d3f10452079b12bb3aa5
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
<<<<<<< HEAD
            <h3>📲 Redirecting to WhatsApp</h3>
            <p>Please send the message to confirm your booking.</p>
=======
            <h3>🎉 Thank you!</h3>
            <p>Your booking request has been received. Redirecting you to Instagram...</p>
>>>>>>> 0db5ff1fa2edda67b0f5d3f10452079b12bb3aa5
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;
