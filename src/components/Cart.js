import React from "react";
import "./Cart.css";
const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.location.reload();
  };

  const cartItems = cart.map((item) => (
    <div key={item.id} className="cart_items_container">
      <div className="info_container">
        <h1>{item.title}</h1>
        <h3>
          {item.price} $ {item.quantity}x
        </h3>
      </div>
      <div className="action_container">
        <p>Total: {item.price * item.quantity} $</p>
        <button onClick={() => handleRemoveFromCart(item.id)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  ));

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart_container">
      <h2>CART</h2>
      {cartItems.length ? (
        <>
          {cartItems}
          <h3 className="total_h3">Total Cart: {total} $</h3>
          <button>Purchase</button>
        </>
      ) : (
        <div className="cart_empty">
          <p>Your cart is empty</p>
          <i className="fa-sharp fa-solid fa-cart-shopping"></i>
        </div>
      )}
    </div>
  );
};

export default Cart;
