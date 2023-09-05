import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails({ onAddToCart }) {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [productId]);

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} style={{ maxWidth: "100%" }} />
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <button onClick={handleAddToCart}>Add to cart</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetails;

