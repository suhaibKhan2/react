import React, { useState } from "react";

function Payment() {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    setPaymentSuccess(true); // Simulate successful payment
  };

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      {paymentSuccess ? (
        <p>✅ Payment Successful! Thank you for your purchase.</p>
      ) : (
        <button onClick={handlePayment}>Pay Now</button>
      )}
    </div>
  );
}

export default Payment;
