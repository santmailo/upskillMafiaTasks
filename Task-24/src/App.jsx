import "./App.css";
import { Outlet } from "react-router-dom";
import { ProductsProvider } from "./Contexts/ProductContext.jsx";
import { CartProvider } from "./Contexts/CartContext";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart.jsx";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Navbar />
        <div className="flex">
          <Outlet />
          <Cart />
        </div>
        {/* <Outlet /> */}
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
