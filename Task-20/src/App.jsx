import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Products from "./Products";
import Cart from "./Cart";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container">
        <Products
          cartItems={cartItems}
          setCartItems={setCartItems}
          total={total}
          setTotal={setTotal}
        />
        <Cart
          products={cartItems}
          setProducts={setCartItems}
          total={total}
          setTotal={setTotal}
        />
      </div>
    </>
  );
}

export default App;
