import { useEffect, useRef, useState } from "react";
import { useRatingContext } from "../Contexts/RatingContext";

const RatingCard = () => {
    const { setHasRating, ratingValue, setRatingValue } = useRatingContext();
    const ratingRef = useRef();
    const [ fadeOut , setFadeOut ] = useState(false);

    useEffect(() => {
        const ratingButtons = [...ratingRef.current.children];

        ratingButtons.forEach((b) => {
            b.addEventListener("click", () => {
                ratingButtons.forEach((b) => b.removeAttribute("active"));
                b.setAttribute("active", true);
                setRatingValue(b.textContent);
            });
        });
    }, [setRatingValue])

    function handleSubmit(e) {
        e.preventDefault()
        if(ratingValue) {
            setFadeOut(true)
            setTimeout(() => setHasRating(true), 500)
        } else {
            return;
        }
    }

    return (<>
        <div className={`card ${fadeOut ? "fade-out" : ""}`}>
            <div className="card-main">
                <img src={require("./Images/icon-star.svg").default} alt=""/>
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. 
                All feedback is appreciated to help us improve our offering!
                </p>            
            </div>

            <form className="rating-form" onSubmit={handleSubmit}>
                <div className="rating" ref={ratingRef}>
                    <button className="b-rating" type="button">1</button>
                    <button className="b-rating" type="button">2</button>
                    <button className="b-rating" type="button">3</button>
                    <button className="b-rating" type="button">4</button>
                    <button className="b-rating" type="button">5</button>
                </div>
                <button type="submit" className="rating-submit">Submit</button>
            </form>
        </div>
    </>);
};

export default RatingCard;