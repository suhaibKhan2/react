import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove)); // Remove item
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <img src={product.image} alt={product.name} className="cart-image" />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button onClick={() => removeFromCart(product)}>Remove</button>
            </div>
          ))}
          <button onClick={() => navigate("/payment")}>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
