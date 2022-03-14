import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your pallete" />
      <h1 className="headtext__cormorant">Our Special Menu</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Fresh Salads</p>
        <div className="app__specialMenu_menu_items">
          {
            data.salads.map((salad, index) => (
              <MenuItem key={salad.title + index} title={salad.title} price={salad.price} tags={salad.tags} />
            ))
          }
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Cold Starters</p>
        <div className="app__specialMenu_menu_items">
          {
            data.starters.map((starter, index) => (
              <MenuItem key={starter.title + index} title={starter.title} price={starter.price} tags={starter.tags} />
            ))
          }
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
