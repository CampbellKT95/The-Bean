import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js";
import Confirmation from "./Confirmation";

const PUBLIC_KEY = "pk_test_51JmTYsGJJ10lSfKEDizIK2Wh1wWKkUzpHSqnz2IWGr8omIdUkmA2pj1jYWn3r0CQJNL5xY0ASeNPhronhVSqkHNw00MoNgvReX"

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = ({orderList, bill}) => {
    return <Elements stripe={stripeTestPromise}>
            <Confirmation orderList={orderList} bill={bill}/>
        </Elements>
}

export default StripeContainer;
