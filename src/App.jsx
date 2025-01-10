import React, { useState } from 'react';
import './App.css';
import dessertsProducts from './data.json';
import Desserts from './components/desserts';
import Cart from './components/cart';

function App() {
  const [quantities, setQuantities] = useState({});

  const updateQuantities = (newQuantities) => {
    setQuantities(newQuantities);
  };

  return (
    <>
      <h1>Desserts</h1>
      <div className="container">
        
        <Desserts products={dessertsProducts} updateQuantities={updateQuantities} />
        <Cart quantities={quantities} />
      </div>
    </>
  );
}

export default App;
