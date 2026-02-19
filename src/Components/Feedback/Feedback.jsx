import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !feedback) {
      alert("Please fill all fields");
      return;
    }

    const message = `Hello Heba 💚
I’d like to share my feedback for Mehendi by Heba.

Name: ${name}

Feedback:
${feedback}`;

    const whatsappNumber = "918431025128";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    setShowPopup(true);

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      setShowPopup(false);
    }, 1200);
  };

  return (
    <div className="feedback-section" id="feedback">
      <div className="feedback-container">
        <h2>Share Your Feedback 💬</h2>
        <p>Your words mean a lot to us. Thank you for choosing Mehendi by Heba 💚</p>

        <form onSubmit={handleSubmit} className="feedback-form">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            rows="5"
            placeholder="Write your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>

          <button type="submit">Send Feedback on WhatsApp</button>
        </form>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>💚 Thank you!</h3>
            <p>Redirecting you to WhatsApp…</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
