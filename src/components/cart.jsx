const Cart = ({ quantities }) => {
    return (
      <div className="cart">
        <h1>Your Cart ({Object.keys(quantities).length})</h1>
        <p>Your added items will appear here</p>
      </div>
    );
  };
  
  export default Cart;
  