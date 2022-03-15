import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './OtherMenu.css';

const OtherMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Drinks and Desserts to quench your thirst" />
      <h1 className="headtext__cormorant">Our Special Drinks and Desserts</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Hot Drinks</p>
        <div className="app__specialMenu_menu_items">
          {
            data.hotDrinks.map((hotDrink, index) => (
              <MenuItem key={hotDrink.title + index} title={hotDrink.title} price={hotDrink.price} tags={hotDrink.tags} />
            ))
          }
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Soft Drinks</p>
        <div className="app__specialMenu_menu_items">
          {
            data.softDrinks.map((softDrink, index) => (
              <MenuItem key={softDrink.title + index} title={softDrink.title} price={softDrink.price} tags={softDrink.tags} />
            ))
          }
        </div>

        <p className="app__specialMenu-menu_heading">Desserts</p>
        <div className="app__specialMenu_menu_items">
          {
            data.desserts.map((dessert, index) => (
              <MenuItem key={dessert.title + index} title={dessert.title} price={dessert.price} tags={dessert.tags} />
            ))
          }
        </div>
      </div>
    </div>
  </div>
);

export default OtherMenu;
