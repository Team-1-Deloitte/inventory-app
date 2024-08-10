import React from 'react'


const Item = ({ itemData, handleDelete, handleViewDetails, handleAddToCart }) => {
  const { name, description, price, category, image } = itemData;

  return (
    <div className="item">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Category: {category}</p>
      <img src={image} alt={name} />
      <div className="item-buttons">
        <button onClick={() => handleViewDetails(itemData.id)}>View Details</button>
        <button onClick={() => handleDelete(itemData.id)}>Delete Item</button>
        <button onClick={() => handleAddToCart(itemData)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Item