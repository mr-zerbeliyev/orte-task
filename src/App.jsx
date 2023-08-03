import { Card } from "react-bootstrap";
import "./App.css";
import Product from "./components/Product";
import productsMock from "./data/product.json";
import Cart from "./components/Cart";
import { useState } from "react";

const productList = Object.values(productsMock)[0][0];
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [discountApplied, setDiscountApplied] = useState(false);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + parseInt(item.price),
      0
    );
    return discountApplied ? totalPrice * 0.8 : totalPrice;
  };

  const checkout = () => {
    console.log("Cart Items:", cartItems);
    console.log("Total Amount:", getTotalPrice());

    setCartItems([])
    setDiscountApplied(false)
  };

  return (
    <div className="row gap-4">
      {Object.keys(productList).map((key) => (
        <div className="col">
          <Product addToCart={addToCart} key={key} product={productList[key]} />
        </div>
      ))}
      <div className="col">
        <Cart
          setDiscountApplied={setDiscountApplied}
          getTotalPrice={getTotalPrice}
          cartItems={cartItems}
          checkout={checkout}
        />
      </div>
    </div>
  );
}

export default App;
