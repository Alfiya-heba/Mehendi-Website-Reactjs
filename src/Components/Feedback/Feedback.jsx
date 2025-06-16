import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [result, setResult] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult('Sending...');

    const formData = new FormData(e.target);
    formData.append('access_key', '149c4495-4ade-4382-b148-d350ab21f542');
    formData.append('subject', 'New Feedback Received from Mehendi Website');
    formData.append('from_name', 'Mehendi by Heba - Feedback Form');

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await res.json();
    if (data.success) {
      setResult('Thank you for your feedback!');
      e.target.reset();
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } else {
      setResult('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="feedback-section" id="feedback">
      <div className="feedback-container">
        <h2>We’d Love Your Feedback 💬</h2>
        <p>Your thoughts help us grow and improve. Share your experience with Mehendi by Heba!</p>

        <form onSubmit={onSubmit} className="feedback-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Feedback" required></textarea>
          <button type="submit">Send Feedback</button>
        </form>

        {result && <div className="feedback-message">{result}</div>}
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>🎉 Thank you!</h3>
            <p>Your feedback has been submitted successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
