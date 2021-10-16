import React, {useState} from "react";
import {reviewsData} from "../data/reviewsData";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import "../styles/reviews.css";


//add styling to review section

const Reviews = () => {

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
        <section>

            <div key={currentDisplay.id} className="show">
                <img src={currentDisplay.image} alt={currentDisplay.name} className="reviews-img" />
                <h4 className="reviews-name">{currentDisplay.name}</h4>
                <p className="reviews-quote">{currentDisplay.quote}</p>
                <button onClick={nextReview}><FaAngleDoubleLeft /></button>
                <button onClick={prevReview}><FaAngleDoubleRight /></button>
            </div>

        </section>

    )
}

export default Reviews;