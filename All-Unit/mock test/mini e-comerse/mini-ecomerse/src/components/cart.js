import React, { useState } from "react";

function Cart() {
  const [items, setItems] = useState([]);

  const handleAddToCart = (product) => {
    setItems([...items, product]);
  };

  const handleRemoveFromCart = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <h1>Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.title} - {item.price}
              <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
