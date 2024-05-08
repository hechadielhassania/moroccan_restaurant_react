// Menu.js
import React, { useState } from 'react';
import MenuItem from './MenuItem';
import menuData from '../menuData';

const Menu = () => {
  const [filteredItems, setFilteredItems] = useState(menuData);

  const handleClick = (category) => {
    if (category === 'All') {
      setFilteredItems(menuData);
    } else {
      const newFilteredItems = menuData.filter(item => item.category === category);
      setFilteredItems(newFilteredItems);
    }
  };

  const uniqueCategories = ['All', ...new Set(menuData.map(item => item.category))];

  return (
    <section className="menu">
      <div className="title">
        <h2>menu</h2>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        {uniqueCategories.map(category => (
          <button key={category} onClick={() => handleClick(category)} className="filter-btn">{category}</button>
        ))}
      </div>
      <div className="section-center">
        {filteredItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
