import s from './Products.module.css'
export function RatingStars({ratingRevieWs}){

    return(
        <div className={s['rating-bar']}>
            <div className={s['rating-stars']}>
                <div className={s['rating-stars--quantity']}>
                </div>
            </div>
            <span className={s['rating-reviews']}>
                               {ratingRevieWs}
            </span>
        </div>
    )
}