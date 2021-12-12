import "./styles.css";
import React, {useState, useEffect} from "react";
import {reviewsData} from "../../data/reviewsData";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaYelp, FaStar } from "react-icons/fa";
import Aos from "aos";

const Reviews = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    const [currentReview, setCurrentReview] = useState(0);

    const display = reviewsData.filter((item) => item.id === currentReview);
    const currentDisplay = display[0]

    const nextReview = () => {
        if (currentReview < reviewsData.length - 1) {
            setCurrentReview(currentReview + 1)
        } else {
            setCurrentReview(0)
        }
    }

    const prevReview = () => {
        if (currentReview === 0) {
            setCurrentReview(reviewsData.length - 1)
        } else {
            setCurrentReview(currentReview - 1)
        }
    }

    return (
        <section className="reviews-container" id="Reviews">
            <div data-aos="fade-up">
                <a href="https://www.yelp.com/" className="yelp"> <FaYelp /> 
                </a>
                <h4 className="yelp-text">Find more reviews on yelp</h4>
            </div>

            <div key={currentDisplay.id} className="show">
                <img src={currentDisplay.image} alt={currentDisplay.name} className="reviews-img" />
                <h4 className="reviews-name">{currentDisplay.name}</h4>
                <p className="reviews-quote">{currentDisplay.quote}</p>
                <button className="next-btn" onClick={nextReview}><FaAngleDoubleLeft /></button>
                <button className="prev-btn" onClick={prevReview}><FaAngleDoubleRight /></button>
            </div>

            <div data-aos="fade-up">
                <a href="https://guide.michelin.com/en/restaurants" className="michelin-star"> <FaStar /> </a>
                <h4 className="michelin-star-text">Our Michelin stars</h4>
            </div>
        </section>
    )
}

export default Reviews;