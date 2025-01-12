import React, { useState } from 'react';
import { AddToCart } from '../Icons';

const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts/";

const Desserts = ({ products, quantities, handleAddToCart, handleDecrement, handleIncrement }) => {
  return (
    <div className="desserts-container">
      {/* data.json-ში შემავალ მასივზე ვიყენებ map ფუნქციას და თითოეული მასივის ელემენტისთვის(desserts) გამომაქვს dessert-box, სადაც ვიყენებ ამ მასივში შემავალ ინფორმაციებს.*/}
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
                <AddToCart />
                Add to cart
              </button>
            )}
            {/* თუ quantities[dessert.name] არ არის undefined add-to-cart-btn-ის მაგივრად გამოაქვს წითელი ყუთი. quantities[dessert.name] არის არჩეული დესერტების რაოდენობები, ანუ quantities ობიექტის მნიშვნელობები. რადგან map გვაქვს გამოყენებული თითოეულ დესერტზე მოწმდება დინამიურად, თუ ობიექტში რაიმე ცვლილება შევა*/}
          </div>
          <p>{dessert.name}</p>
          <h4>{dessert.category}</h4>
          <h3>
            {dessert.price * 10 % 10 === 0
              ? dessert.price.toFixed(0)
              : dessert.price.toFixed(1)}
            $
            {/* {თუ პროდუქტის ფასი 10ზე გამრავლების შემდეგ 10-ზე გაყოფისას ნაშთს გვაძლევს (ანუ ვამოწმებთ ფასში ათწილადი ურევია თუ არა) ფასის რიცხვის შემდეგ წერტილი და ერთი ციფრი გამოიტანოს, ხოლო თუ არ გვაძლევს საერთოდ არ გამოიტანოს ფასის რიცხვის შემდეგ არაფერი} */}
          </h3>
        </div>
      ))}
    </div>
  );
};


export default Desserts;
