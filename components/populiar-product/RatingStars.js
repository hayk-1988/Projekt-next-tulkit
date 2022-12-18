

export function RatingStars({ratingRevieWs}){

    return(
        <div className="rating-bar">
            <div className="rating-stars">
                <div className="rating-stars--quantity">
                </div>
            </div>
            <span className="rating-reviews">
                               {ratingRevieWs}
            </span>
        </div>
    )
}