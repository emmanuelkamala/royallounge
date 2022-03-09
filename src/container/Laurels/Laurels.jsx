import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ rec: { imgUrl, title, subtitle }}) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="recognition" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87'}}>{title}</p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="recognition">
    <div className="app__wrapper_info">
      <SubHeading title="Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
        {
          data.recognition.map((rec) => <AwardCard rec={rec} key={rec.title} />)
        }
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="food" />
    </div>
  </div>
);

export default Laurels;
