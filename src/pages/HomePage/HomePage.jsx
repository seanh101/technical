import React, { useEffect, useState, useMemo } from 'react';
import './HomePage.css';
import technicalImage from './technical1.jpeg';
import technicalImage2 from './technical2.jpeg';
import technicalImage3 from './technical3.jpg';
import technicalImage4 from './border.jpeg';
import facebookLogo from './facebook1.png';
import instagramLogo from './instagram.png';

function HomePage() {
  const [currentImage, setCurrentImage] = useState(technicalImage);
  const [imageIndex, setImageIndex] = useState(0);

  const images = useMemo(() => [technicalImage, technicalImage2, technicalImage3, technicalImage4], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the delay time as needed

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  useEffect(() => {
    setCurrentImage(images[imageIndex]);
  }, [imageIndex, images]);

  return (
    <div className="home-page">
      <h1>Technical</h1>
      <h4>Est. 2000</h4>
      <div className="social-media-links">
        <a href="https://www.facebook.com/TechnicalSkateShop" target="_blank" rel="noopener noreferrer">
          <img src={facebookLogo} alt="Facebook" className="social-media-logo" />
        </a>
        <a href="https://www.instagram.com/technical_skateshop/" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="Instagram" className="social-media-logo" />
        </a>
      </div>
      <div className="image-gallery">
        <img className="rotating-image" src={currentImage} alt="Rotating" />
      </div>
      <div className="other-images">
        <p>Conveniently located in Norwell, MA, our store serves as a haven for skateboarders seeking premium technical gear and a sense of community. Drop by Technical Skate Shop today!</p>
      </div>
      <iframe
        title="Technical Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2957.4774264781745!2d-70.86564822452657!3d42.16146824762597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e49e2c7869edfd%3A0xed660d995a35d6a2!2sTechnical!5e0!3m2!1sen!2sus!4v1689372822672!5m2!1sen!2sus"
        style={{ border: 0, width: '100%', height: '100%', minHeight: '450px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default HomePage;

