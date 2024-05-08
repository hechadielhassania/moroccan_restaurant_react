import React from 'react';

const MenuDetails = ({ selectedItem }) => {
  if (!selectedItem) return null;

  return (
    <div className="menu-details">
      <h2>{selectedItem.name}</h2>
      <p>{selectedItem.price}</p>
      <p>{selectedItem.description}</p>
    </div>
  );
};

export default MenuDetails;
