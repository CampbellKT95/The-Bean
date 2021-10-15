import React from "react";
import "../styles/landing.css"

const Landing = () => {

    //instead of background image, have a background pattern and include images on the page? Or just make it position absolute

    return (
        <main className="landing">
            <section className="overlay">
                <h2 className="landing-title-text">The Bean</h2>
                <h4 className="landing-sub-text">Experience coffee as it was meant to be</h4>
            </section>

        </main>

    )
}

export default Landing;
