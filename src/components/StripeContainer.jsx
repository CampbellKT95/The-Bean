import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"

const PUBLIC_KEY = "pk_test_51JmTYsGJJ10lSfKEDizIK2Wh1wWKkUzpHSqnz2IWGr8omIdUkmA2pj1jYWn3r0CQJNL5xY0ASeNPhronhVSqkHNw00MoNgvReX"

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
    return <Elements stripe={stripeTestPromise}>
            <Confirmation />
        </Elements>
}
