import React, { useState } from 'react';
import { AddToCart } from '../Icons';

const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts/";

const Desserts = ({ products, updateQuantities }) => {
  const [quantities, setQuantities] = useState({});

  const handleAddToCart = (name) => {
    const newQuantities = { ...quantities, [name]: 1 };
    setQuantities(newQuantities);
    updateQuantities(newQuantities); // Pass to parent component
  };

  const handleDecrement = (name) => {
    const newQuantities = { ...quantities };
    if (newQuantities[name] > 1) {
      newQuantities[name] -= 1;
    } else {
      delete newQuantities[name];
    }
    setQuantities(newQuantities);
    updateQuantities(newQuantities); // Pass to parent component
  };

  const handleIncrement = (name) => {
    const newQuantities = { ...quantities, [name]: (quantities[name] || 0) + 1 };
    setQuantities(newQuantities);
    updateQuantities(newQuantities); // Pass to parent component
  };

  return (
    <div className="desserts-container">
      {products.map((dessert) => (
        <div className="dessert-box" key={dessert.name} style={{ marginLeft: '3%' }}>
          <div className="dessert-img-box">
            <picture>
              <source
                media="(min-width:1024px)"
                srcSet={`${BASE_URL}/${dessert.images.desktop}`}
              />
              <source
                media="(min-width:768px)"
                srcSet={`${BASE_URL}/${dessert.images.tablet}`}
              />
              <img
                className="img"
                src={`${BASE_URL}/${dessert.images.mobile}`}
                alt={dessert.name}
                style={{ width: '100%' }}
              />
            </picture>
            {quantities[dessert.name] ? (
              <div className="red-box">
                <button className="round-btn" onClick={() => handleDecrement(dessert.name)}>
                  -
                </button>
                <span className="quantity">{quantities[dessert.name]}</span>
                <button className="round-btn" onClick={() => handleIncrement(dessert.name)}>
                  +
                </button>
              </div>
            ) : (
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(dessert.name)}>
                <AddToCart style={{ marginRight: '8px' }} />
                Add to cart
              </button>
            )}
          </div>
          <p>{dessert.name}</p>
          <h4>{dessert.category}</h4>
          <h3>
            {dessert.price * 10 % 10 === 0
              ? dessert.price.toFixed(0)
              : dessert.price.toFixed(1)}
            $
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Desserts;
