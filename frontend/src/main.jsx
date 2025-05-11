import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './styles/index.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/features.css'
import './styles/steps.css'
import './styles/menu.css'
import './styles/footer.css'
import './styles/login.css'
import './styles/cart.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);