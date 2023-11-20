import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../pages/home/category/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GET_AWAY_KEY)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading={'Payment'} subHeading={'Please Pay to eat'}></SectionTitle>
            <div>
               <Elements stripe={stripePromise} >
                 <CheckoutForm />
               </Elements>
            </div>
        </div>
    );
};

export default Payment;