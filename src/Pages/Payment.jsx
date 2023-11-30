import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import CheckPayment from "./CheckPayment";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const Payment = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="my-28">
      <div className="max-w-4xl mx-auto">
        <Elements stripe={stripePromise}>
          <CheckPayment id={id}></CheckPayment>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
