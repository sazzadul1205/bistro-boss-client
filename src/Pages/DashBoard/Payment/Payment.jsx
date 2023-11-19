import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY)

const Payment = () => {
    return (
        <div>
            <SharedTitle
                heading={'payment'}
                subHeading={'--- Please submit your payment ---'}></SharedTitle>
            <div>
                <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
                </Elements>

            </div>
        </div>
    );
};

export default Payment;