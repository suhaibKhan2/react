import React from "react";
import products from "../data";

function Products({ cart, setCart }) {
  const addToCart = (product) => {
    setCart([...cart, product]); // Add product to cart
  };

  return (
    <div className="products-container">
      <h2>Product Catalogue</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
