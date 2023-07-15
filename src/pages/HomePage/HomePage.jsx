import React from 'react';
import './HomePage.css';
import technicalImage from './technical1.jpeg';
import technicalImage2 from './technical2.jpeg';
import technicalImage3 from './technical3.jpg';
import technicalImage4 from './border.jpeg';
import facebookLogo from './facebook1.png';
import instagramLogo from './instagram.png';

function HomePage() {
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

      <div className="other-images">
        <img className="home-logo" src={technicalImage} alt="Technical Logo" />
        <p>At Technical, we understand the unique needs and preferences of technical skateboarders. That's why we meticulously curate our inventory to offer a comprehensive range of top-tier decks, trucks, wheels, bearings, and other essential components. Whether you're an experienced shredder or just starting your skateboarding journey, our knowledgeable team is here to assist you in finding the perfect setup to enhance your skills and achieve your goals.</p>
        <img className="home-logo" src={technicalImage2} alt="Technical Logo 2" />
        <p>More than just a retail store, Technical is a gathering place for like-minded skaters. We foster a vibrant community by hosting events, workshops, and skate sessions, providing opportunities for riders of all levels to connect, learn, and push their boundaries together. Our passion for skateboarding extends beyond selling products; we are devoted to supporting the growth and development of the local skate scene.</p>
        <img className="home-logo" src={technicalImage3} alt="Technical Logo 3" />
        <p>With a welcoming and inclusive atmosphere, Technical embraces skaters of all ages and backgrounds. Whether you're a street, park, or transition skater, our friendly staff is dedicated to delivering exceptional customer service and personalized advice. We strive to create an environment where you feel inspired and supported on your skateboarding journey.</p>
        <img className="home-logo" src={technicalImage4} alt="Technical Logo 4" />
        <p>Conveniently located in Norwell, our store serves as a haven for skateboarders seeking premium technical gear and a sense of community. Drop by Technical, immerse yourself in the world of technical skateboarding, and discover the latest innovations that can elevate your riding experience to new heights.</p>
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
