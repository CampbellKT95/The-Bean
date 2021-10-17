import "../styles/contact.css"

const Contact = () => {


    return <>
        <footer className="contact-container" id="Contact">
            <h1 className="contact-title">Stop on in!</h1>
            <h4 className="phone">xxx-xxx-xxxx</h4>
            <h4 className="address"><a href="https://www.google.com/maps/place/Starbucks/@25.8064072,-80.2731875,12z/data=!4m9!1m2!2m1!1sstarbucks+miami!3m5!1s0x88d9b15515c69919:0x18e9fa71c5de3a66!8m2!3d25.805128!4d-80.189199!15sCg9zdGFyYnVja3MgbWlhbWkiA4gBAVoRIg9zdGFyYnVja3MgbWlhbWmSAQtjb2ZmZWVfc2hvcA">100 Bean St, Miami, FL</a></h4>
            <div className="hours">
                <h4>Mon-Sun</h4>
                <p>6am - 9pm</p>
            </div>
            <button className="footer-order-btn">Order Pickup</button>

        </footer>
    </>
}

export default Contact;