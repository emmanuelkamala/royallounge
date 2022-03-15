import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './MoreMenu.css';

const MoreMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="What more menu to your plate?" />
      <h1 className="headtext__cormorant">Here is our other Menu</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Main Course</p>
        <div className="app__specialMenu_menu_items">
          {
            data.mains.map((main, index) => (
              <MenuItem key={main.title + index} title={main.title} price={main.price} tags={main.tags} />
            ))
          }
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.salad} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Hot Starters</p>
        <div className="app__specialMenu_menu_items">
          {
            data.hots.map((hot, index) => (
              <MenuItem key={hot.title + index} title={hot.title} price={hot.price} tags={hot.tags} />
            ))
          }
        </div>
      </div>
    </div>
  </div>
);

export default MoreMenu;
