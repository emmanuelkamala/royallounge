import React from 'react';
import { FiInstagram, FiFacebook } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact us</h1>
        <p className="p__opensans"><strong>Physical Address:</strong>156 St. Mary’s road, Sheffield, S2 4ax</p>
        <p className="p__opensans"><strong>Phone:</strong>0114 201 9675</p>
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
        <p className="p__opensans">Sunday - Thursday: 3pm to Late</p>
        <p className="p__opensans"></p>
        <p className="p__opensans">Friday - Saturday: 3pm - 2:30am

</p>
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
