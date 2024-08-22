import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductLookup from "./component/ProductLookup";
import OrderTracking from "./component/OrderTracking";
import Feedback from "./component/Feedback";
import Payment from "./component/Payment";
import Interaction from "./component/Interaction";
import Cart from "./component/Cart"; 
import { CartProvider } from "./context/CartContext";
import { NavLink } from "react-router-dom";
function App() {
  return (
    <CartProvider>
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" href="#">
            Retailer App
          </NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Product Lookup
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/order-tracking">
                  Order Tracking
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/feedback">
                  Feedback
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/payment">
                  Payment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/interaction">
                  Interaction
                </Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/home" element={<ProductLookup />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/interaction" element={<Interaction />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}



export default App;
