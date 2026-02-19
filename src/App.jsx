import React from 'react';
import 'aos/dist/aos.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Gallery from './Components/Gallery/Gallery.jsx';
import Title from './Components/Title/Title.jsx';
import About from './Components/About/About.jsx';
import Bookings from './Components/Bookings/Bookings.jsx';
import Feedback from './Components/Feedback/Feedback.jsx';
import Footer from './Components/Footer/Footer.jsx';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Crafted By Heba' title='Our Most Loved Creations' />
        <Gallery />
        <About />
        <Bookings />
        <Feedback/>
        <Footer />
      </div>
      
    </div>
  );
};

export default App;
