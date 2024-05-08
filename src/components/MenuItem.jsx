// MenuItem.js
import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <article className="menu-item">
      <img src={item.image} alt="menu item" className="photo" />
      <div className="item-info">
        <header>
          <h4>{item.name}</h4>
          <h4 className="price">{item.price}</h4>
        </header>
        <p className="item-text">{item.description}</p>
      </div>
    </article>
  );
};

export default MenuItem;
