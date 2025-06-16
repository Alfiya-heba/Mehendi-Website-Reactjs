import React from 'react';
import './About.css';
import about_img from '../../assets/about-us.jpg';
// import play_icon from '../../assets/play-icon.png';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-left">
        <img src={about_img} alt="about-img" className='about-img' />
        {/* <img src={play_icon} alt="play_icon" className='play-icon' /> */}
      </div>
      <div className="about-right">
        <h3>Mehendi By Heba</h3>
        <h2>Hi, I'm Alfiya Heba</h2>
        <p><b>The hands behind Mehendi by Heba.</b> What started as a hobby turned into a beautiful journey of adorning hands and hearts with intricate henna designs...</p>
        <p><b>With every cone, I create art that celebrates culture, love, and identity.</b> From floral patterns to bridal motifs, I blend traditional aesthetics with modern creativity...</p>
        <p><b>This isn’t just a profession—it's my passion.</b> I’m grateful for every hand I've had the chance to decorate and every smile it brings...</p>

        <div className="why-choose-me">
          <h3>Why Choose Me?</h3>
          <ul>
            <li><strong>Personalized Designs:</strong> Tailored to match your style.</li>
            <li><strong>Creative & Neat Work:</strong> Detailed and symmetrical art.</li>
            <li><strong>Skin-Safe, Natural Cones:</strong> Rich color, zero harm.</li>
            <li><strong>Traditional Meets Trendy:</strong> Blending styles beautifully.</li>
            <li><strong>Comfort of Home Service:</strong> I come to you.</li>
            <li><strong>Artist You Can Trust:</strong> Each design is made with heart.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;