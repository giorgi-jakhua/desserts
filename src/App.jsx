import React, { useState } from 'react';
import './App.css';
import dessertsProducts from './data.json';
import Desserts from './components/Desserts';
import Cart from './components/Cart';

function App() {
  const [quantities, setQuantities] = useState({});
  // ობიექტის სთეითი შევქმენი რომლის გასაღები იქნება პროდუქტის სახელი, ხოლო მნიშვნელობა პროდუქტის რაოდენობა
  const handleAddToCart = (name) => {
    const newQuantities = { ...quantities, [name]: 1 };
    setQuantities(newQuantities);
  };
  // ეს ფუნქცია მაქვს გამოყენებული addToCart ღილაკზე. ეს ფუნქცია ცვლის სთეითს შემდეგნაირად: სთეითში არსებულ გასაღებებსა და მნიშვნელობებს(თუ აქამდე იყო რაიმე) დაამატებს ახალ გასაღებს და მნიშვნელობას. გასაღები იქნება ის პროდუქტი რომლის ღილაკსაც დავაჭირეთ, ხოლო მნიშვნელობა იქნება 1. 
  const handleDecrement = (name) => {
    const newQuantities = { ...quantities };
    if (newQuantities[name] > 1) {
      newQuantities[name] -= 1;
    } else {
      delete newQuantities[name];
    }
    setQuantities(newQuantities);
  };
  // // ამ ფუნქციას ცვლილება შეაქვს სთეითში შემდეგნაირად: როცა იმ ღილაკს დავაჭერთ რომელზეც ეს ფუნქცია მაქვს გამოყენებული რომელი დესერტისაც იყო ის ღილაკი, quantities ობიექტში იმ დესერტის მნიშვნელობას გამოაკლდება 1, ხოლო თუ ამ გამოკლების შედეგად მნიშვნელობა 0 გახდება ეს დესერტი წაიშლება quantities ობიექტიდან
  const handleIncrement = (name) => {
    const newQuantities = { ...quantities, [name]: quantities[name] + 1 };
    setQuantities(newQuantities);
  };
  // ამ ფუნქციას ცვლილება შეაქვს სთეითში შემდეგნაირად: როცა იმ ღილაკს დავაჭერთ რომელზეც ეს ფუნქცია მაქვს გამოყენებული რომელი დესერტისაც იყო ის ღილაკი, quantities ობიექტში იმ დესერტის მნიშვნელობას დაემატება 1
  const removeFromCart = (name) => {
    const newQuantities = { ...quantities };
    delete newQuantities[name];
    setQuantities(newQuantities);
  };
  // როცა იმ ღილაკს დავაჭერთ რომელზეც ეს ფუნქცია მაქვს გამოყენებული შესაბამისი დესერტი, რომლისაც ეს ღილაკი იყო წაიშლება quantities ობიექტიდან
  return (
    <>
      <h1>Desserts</h1>
      <div className="container">
        <Desserts
          handleAddToCart={handleAddToCart}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          quantities={quantities}
          products={dessertsProducts}
        />
        <Cart
          quantities={quantities}
          products={dessertsProducts}
          removeFromCart={removeFromCart}
        />
        {/* {კომპონენტებისთვის გადაცემული მაქვს ფროფები} */}
      </div>
    </>
  );
}

export default App;
