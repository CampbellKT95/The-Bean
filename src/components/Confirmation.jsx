import React, {useState} from "react";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import axios from "axios";
import "../styles/confirmation.css";

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

                //will need to edit the post below for correct post
                const response = await axios.post("http://localhost:3000/payment", {

                    // payment in cents, will have to change this with state value
                    amount: 1000,
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

        {/* add a back button */}

    </section>
}

export default Confirmation;