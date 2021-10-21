import React, {useState} from "react";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import axios from "axios";
import "../styles/confirmation.css";

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": {color: "#fce883"},
            "::placeholder": {color: "#87bbfd"}
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
};

const Confirmation = ({orderList, bill}) => {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


        if (!error) {
            try {
                const {id} = paymentMethod;

                const response = await axios.post("http://localhost:4000/payment", {

                // "https://the-bean-cafe.herokuapp.com/payment"

                    // payment in cents
                    amount: bill * 100,
                    id: id
                })
                
                if (response.data.success) {
                    console.log("Successful payment.");
                    setSuccess(true);
                }


            } catch (error) {
                console.log("Error", error);
            }
        } else {
            console.log(error.message)
        }
            }

    return <section className="confirmation">
        <h2 className="confirmation-title">Order Confirmation</h2>
        <h4 className="confirmation-bill">${bill}</h4>
        {orderList.map((item) => {
            return <p className="confirmation-item">{item}</p>
        })}

        {/* stripe */}
        {!success ? 
         <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS} />
                </div>
            </fieldset>
            <button className="stripe-btn">Pay</button>
        </form>
        :
        <div>
            <h2>Payment complete!</h2>
        </div>
        }

    </section>
}

export default Confirmation;