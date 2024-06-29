import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { About, Dashboard, LogIn, SignUp } from "./components/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<About />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
        </Route>
        <Route path="/login" element={<LogIn />}></Route>,
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
