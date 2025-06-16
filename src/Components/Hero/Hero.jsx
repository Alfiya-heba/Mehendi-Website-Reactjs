import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero container' id='home'>
      <div className='hero-text'>
        <h1>Adorning hands, celebrating hearts.</h1>
        <p>
          At Mehendi by Heba, we believe mehendi is more than just art — it’s a tradition, an emotion, and a celebration of identity. Each design is crafted with care, love, and attention to detail, bringing out the beauty of every occasion. Whether it's a wedding, festival, or a special day, our work reflects your joy and story in every stroke.
        </p>
        <button className='btn'>
          <a href="#gallery">Explore More</a>
        </button>
      </div>
    </div>
  );
};

export default Hero;