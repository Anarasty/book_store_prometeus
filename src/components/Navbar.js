import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png"
          alt="My Bookstore"
        />
        <p>Logo1</p>
      </div>
      <div className="nav-buttons">
        <button className="cart-button">Cart</button>
        <button className="profile-button">Profile</button>
      </div>
    </nav>
  );
}

export default Navbar;
