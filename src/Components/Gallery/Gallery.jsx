import React from 'react';
import './Gallery.css';
import picture1 from '../../assets/Picture1.jpg';
import picture2 from '../../assets/Picture2.jpg';
import picture3 from '../../assets/Picture3.jpg';
import picture4 from '../../assets/Picture4.jpg';
import picture5 from '../../assets/picture5.jpg';
import picture6 from '../../assets/picture6.jpg';
import picture7 from '../../assets/picture7.jpg';
import picture8 from '../../assets/picture8.jpg';

const Gallery = () => {
  const data = [
    { src: picture1, title: 'Bridal Elegance', desc: 'Bold & intricate' },
    { src: picture2, title: 'Floral Charm', desc: 'Soft and stylish' },
    { src: picture3, title: 'Modern Fusion', desc: 'Trendy look' },
    { src: picture4, title: 'Classic Touch', desc: 'Elegant lines' },
    { src: picture5, title: 'Royal Blooms', desc: 'Rich & graceful' },
    { src: picture6, title: 'Layered Beauty', desc: 'Delicate strokes' },
    { src: picture7, title: 'Peacock Style', desc: 'Floral Art Twist' },
    { src: picture8, title: 'Tradition Revived', desc: 'Deep Cultural lines' },
  ];

  return (
    <div className='Galleries' id='gallery'>
      {data.map((item, index) => (
        <div className='Gallery' key={index}>
          <div className="img-container">
            <img src={item.src} alt={item.title} className={index === 1 ? 'stretch' : ''} />
            <div className="overlay">
              <div className="overlay-icon">❤️</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;