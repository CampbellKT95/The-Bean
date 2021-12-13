import "./expStyles.css";
import React, {useState, useEffect} from "react";
import {reviewsData} from "../../data/reviewsData";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaYelp, FaStar } from "react-icons/fa";
import Aos from "aos";

const Reviews = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    const [currentReview, setCurrentReview] = useState(0);
    const [followingReview, setNextReview] = useState(1);
    const [pastReview, setPrevReview] = useState(reviewsData.length - 1);

    // const display = reviewsData.filter((item) => item.id === currentReview);
    // const currentDisplay = display[0];

    const nextReview = () => {
        if (currentReview === reviewsData.length - 2) {
            setPrevReview(currentReview)
            setNextReview(0)
            setCurrentReview(currentReview + 1)
        } else if (currentReview === reviewsData.length -1) {
            setPrevReview(currentReview)
            setNextReview(1)
            setCurrentReview(0)
        } else {
            setPrevReview(currentReview)
            setNextReview(currentReview + 2)
            setCurrentReview(currentReview + 1)
        }
    }

    const prevReview = () => {
        if (currentReview === 0) {
            setCurrentReview(reviewsData.length - 1);
            setNextReview(0);
            setPrevReview(reviewsData.length - 2);
        } else if (currentReview === 1) {
            setCurrentReview(currentReview - 1);
            setNextReview(1);
            setPrevReview(reviewsData.length - 1);      
        }else {
            setNextReview(currentReview)
            setCurrentReview(currentReview - 1)
            setPrevReview(currentReview - 2);
        }
    }

    return (
        <section className="reviews-container" id="Reviews">
            <div className="previous-review">
                <img src={reviewsData[pastReview].image} alt={reviewsData[pastReview].name} className="reviews-img" />
                <h4 className="reviews-name">{reviewsData[pastReview].name}</h4>
                <p className="reviews-quote">{reviewsData[pastReview].quote}</p>
            </div>

            <div key={reviewsData[currentReview].id} className="show">
                <img src={reviewsData[currentReview].image} alt={reviewsData[currentReview].name} className="reviews-img" />
                <h4 className="reviews-name">{reviewsData[currentReview].name}</h4>
                <p className="reviews-quote">{reviewsData[currentReview].quote}</p>
                <button className="next-btn" onClick={prevReview}><FaAngleDoubleLeft /></button>
                <button className="prev-btn" onClick={nextReview}><FaAngleDoubleRight /></button>
            </div>

            <div className="next-review">
                <img src={reviewsData[followingReview].image} alt={reviewsData[followingReview].name} className="reviews-img" />
                <h4 className="reviews-name">{reviewsData[followingReview].name}</h4>
                <p className="reviews-quote">{reviewsData[followingReview].quote}</p>
            </div>

        </section>
    )
}

export default Reviews;