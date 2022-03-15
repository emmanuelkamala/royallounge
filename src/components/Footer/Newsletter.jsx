import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Come and Enjoy" /> 
      <p className="headtext__cormorant" style={{ textAlign: 'center'}}>"You don’t need to have a Rolls-Royce kitchen to serve a great meal."</p> 
    </div>
  </div>
);

export default Newsletter;
