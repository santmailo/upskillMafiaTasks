import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addProduct } from "./store/actions.js";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      data.forEach((product) => dispatch(addProduct(product)));
    };
    fetchProducts();
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <div className="flex">
        <Outlet />
        <Cart />
      </div>
    </>
  );
}

export default App;
