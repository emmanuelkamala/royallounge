import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem'}}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Phone: 0114 201 9675</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0'}}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: </p>
        <p className="p__opensans">Sat - Sun: </p>
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;
