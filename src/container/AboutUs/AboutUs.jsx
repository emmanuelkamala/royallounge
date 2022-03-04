import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.R} alt="symbol" className="app__aboutus-r" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about spoon" className="spoon__img" />
        <p className="p__opensans">
          Welcome to our venue Royal Lounge, we are located at St Mary`s road in the heart of Sheffield the venue is not very far from Sheffield united Stadium. 
          We are offering all sorts of drinks, from soft drinks to alcohol and cocktails. We are also Bringing the best Lebanese cuisine in Sheffield.</p>
        <button type="button" className="custom__button">Read More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about spoon" className="knife__img" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">More...</h1>
        <img src={images.spoon} alt="about spoon" className="spoon__img" />
        <p className="p__opensans">
          Visit us to try our Cold starters like Hummus or Hot starters like Sambusak or try our Royal Vegan Platter or Royal Mezze Meat . 
          We also have plenty of Parking space for our customers and outside seating area for customers who prefer to sit outside. 
          We also cater for Corporate events, Birthday Parties and Weddings. 
        </p>
        <button type="button" className="custom__button">Read More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
