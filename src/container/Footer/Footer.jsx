import React from 'react';
import { FiInstagram, FiFacebook } from 'react-icons/fi';
import { FooterOverlay } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact us</h1>
        <p className="p__opensans"></p>
        <p className="p__opensans"></p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.logo} alt="footer logo" />
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others"</p>
        <img src={images.spoon} alt="avatar" className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans"></p>
        <p className="p__opensans">Saturday - Sunday:</p>
        <p className="p__opensans"></p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        2022 The Royal Lounge Sheffield. All Rights Reserved.
      </p>
    </div>
  </div>
);

export default Footer;
