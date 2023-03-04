import React from "react";

// function Cart() {
//   return (
//     <div>
//         <h1>Hello cart!</h1>
//     </div>
//   );
// }

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.location.reload();
  };

  const cartItems = cart.map((item) => (
    <div key={item.id}>
      <p>{item.title}</p>
      <p>
        {item.price} руб. x {item.quantity} шт.
      </p>
      <p>Итого: {item.price * item.quantity} руб.</p>
      <button onClick={() => handleRemoveFromCart(item.id)}>
        Удалить из корзины
      </button>
    </div>
  ));

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Корзина</h2>
      {cartItems.length ? (
        <>
          {cartItems}
          <h3>Итого: {total} руб.</h3>
        </>
      ) : (
        <p>Ваша корзина пуста</p>
      )}
    </div>
  );
};

export default Cart;
