import { useRatingContext } from "../Contexts/RatingContext";

const ThankyouCard = () => {
    const { ratingValue } = useRatingContext();

    return (<>
        <div className="card">
            <div className="card-thankyou">
                <img src={require("./Images/illustration-thank-you.svg").default} alt=""/>
                <h4>You selected {ratingValue} out of 5</h4>
                <h1>Thank you!</h1>
                <p>We appreciate you taking the time to give a rating. 
                    If you ever need more support, don’t hesitate to get in touch!
                </p>            
            </div>
        </div>
    </>);
};

export default ThankyouCard;