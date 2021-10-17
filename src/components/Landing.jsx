import React from "react";
import "../styles/landing.css";

const Landing = ({clearDropdown}) => {

    return (
        <div onClick={clearDropdown}>
            <main className="landing">
                <section className="overlay">
                    <h2 className="landing-title-text">The Bean</h2>
                    <h4 className="landing-sub-text">Experience coffee as it was meant to be</h4>
                    <button className="order-btn">Order Pickup</button>
                </section>

            </main>           
        </div>


    )
}

export default Landing;
