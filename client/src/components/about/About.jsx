import Aos from "aos";
import "./styles.css"

const About = () => {

    return (
        <section className="about" id="About">
            <div className="about-text-container" data-aos="fade-right">
                <h4> Our family </h4>
                <article className="about-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </article>

            </div>

            <div className="img-grid" data-aos="fade-left">
                <div className="about-img-container">
                    <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="coffee-cups" className="about-img-1" />
                    <img src="https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="shop-front" className="about-img-2" />
                    <img src="https://images.unsplash.com/photo-1546889270-7605b5b38aa1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=663&q=80" alt="outdoor-seating" className="about-img-3" />
                </div>
            </div>
        </section>
    )
}

export default About;