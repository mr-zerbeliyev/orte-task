import React from "react";

const Cart = ({ cartItems, getTotalPrice, setDiscountApplied, checkout }) => {
  return (
    <div className="border">
      <h2>Cart</h2>
      {cartItems?.map((cartItem) => (
        <div className="border mx-auto" style={{ width: 200 }}>
          <p>Product</p>
          <p>Price: {cartItem.price}$</p>
        </div>
      ))}
      <p>Total: {getTotalPrice()}$</p>
      <div className="mb-2">
        <button onClick={setDiscountApplied} className="me-2">
          Apply 20% discount
        </button>
        <button onClick={checkout}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
