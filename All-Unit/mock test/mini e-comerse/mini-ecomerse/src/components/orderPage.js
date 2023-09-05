import React, { useState, useEffect } from "react";

function OrderPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-orders")
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      {orders.length === 0 ? (
        <p>You haven't placed any orders yet.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <h2>Order {order.id}</h2>
              <p>Date: {order.date}</p>
              <p>Items:</p>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.title} - {item.price}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderPage;
