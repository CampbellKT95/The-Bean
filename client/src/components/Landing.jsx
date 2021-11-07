import React from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import "../styles/landing.css";

const Landing = ({clearDropdown}) => {

    return (
        <div onClick={clearDropdown}>
            <main className="landing">
                <section className="overlay">
                    <h2 className="landing-title-text">The Bean</h2>
                    <h4 className="landing-sub-text">Experience coffee as it was meant to be</h4>


                    <motion.div 
                    whileHover={{
                        scale: 1.1
                    }}>
                        <Link to="/order" classname="landing-link"><button className="order-btn">Order Pickup</button></Link>
                    </motion.div>
            
                </section>

            </main>           
        </div>


    )
}

export default Landing;
