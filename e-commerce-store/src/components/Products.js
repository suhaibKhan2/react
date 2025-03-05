import React from "react";
import products from "../data"; // Import products from data.js
import "./studies.css"; // Ensure styles are applied
import "../studies.css";

function Products() {
  return (
    <div className="products-container">
      <h2>Product Catalogue</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
