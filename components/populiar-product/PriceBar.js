
import s from './Products.module.css'

export function PriceBar({price, oldPrice}){

    return(
        <div className={s['price-bar']}>
            <p className={s['new-price']}>
                {price}
            </p>
            <p className={s['old-price']}>
                {oldPrice}
            </p>
        </div>

    )
}