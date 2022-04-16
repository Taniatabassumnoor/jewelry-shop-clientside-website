import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51JxXBjK4hBPuAKI7Y6BMIBQBDvrzTBncS8lUZu03YPhOYZIUqbXdHQbIyHeirtj6fCeM3DgTzcYv3XMFGgWZXQF700r8UMHcU6"
);
const Pay = () => {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/getpayment/${paymentId}`)
      .then((res) => res.json())
      .then((data) => setPayment(data));
  }, [paymentId]);
  return (
    <div>
      <h1>Payment system coming soon. {paymentId} </h1>
      <p>Price is {payment.price}</p>
      {payment?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm payment={payment} />
        </Elements>
      )}
    </div>
  );
};

export default Pay;
