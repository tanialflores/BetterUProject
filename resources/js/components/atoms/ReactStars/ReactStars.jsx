import React from "react";
import { useState } from "react";
import StarRatings from "react-star-ratings";

//Styles
import "./ReactStars.scss";

const ReactStars = ({ numberStar, size, starHoverColor }) => {

    const [rating, setRating] = useState()

    const changeRating = (newRating) => {
        setRating(newRating)
    }


    return (
        <div className="ReactStars">
            <StarRatings
                rating={numberStar ? numberStar : rating}
                starDimension={size}
                starSpacing="1px"
                starRatedColor="#df1683"
                changeRating={changeRating}
                starHoverColor={starHoverColor}
            />
        </div>
    );
};

export default ReactStars;
