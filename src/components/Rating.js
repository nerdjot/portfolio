import React, { Children } from 'react';
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im"
import './Rating.css'
const Rating = ({piRating, piOutOf}) =>{
    const RatingList = [];
    for(let liCount = 1; liCount <= piOutOf; liCount++){
        if (liCount <= piRating){
            RatingList.push(
                <div key={liCount} className="rating-character-activate" ><ImStarFull></ImStarFull></div>
            );
        }
        else if (liCount-1<piRating)
        {
            RatingList.push(
                <div key={liCount} className="rating-character-activate" ><ImStarHalf></ImStarHalf></div>
            );
        }
        else{
            RatingList.push(
                <div key={liCount} className="rating-character-inactivate" ><ImStarEmpty></ImStarEmpty></div>
            );
        }
    }
    return (
        <div className="rating-comp">
            {RatingList}
        </div>
    ); 
}

export default Rating;