import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Products from "./Components/Products.jsx";
import Payment from "./Components/Payment.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Products />} />
          <Route path="/payment" element={<Payment />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
