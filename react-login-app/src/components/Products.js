import React from "react";
import "./styles.css"; // Ensure this file exists and is properly linked

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    image: "https://example.com/iphone15pro.png", // Replace with actual image URL
    price: "₹1,59,900",
  },
  {
    id: 2,
    name: "MacBook Air M2",
    image: "https://example.com/macbookair.png",
    price: "₹1,14,900",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    image: "https://example.com/sonyheadphones.png",
    price: "₹29,990",
  },
  {
    id: 4,
    name: "Apple Watch Series 9",
    image: "https://example.com/applewatch.png",
    price: "₹41,900",
  },
];

function Products() {
  return (
    <div className="products-container">
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
