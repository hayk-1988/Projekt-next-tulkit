import {Button} from "./Button";
import {RatingStars} from "./RatingStars";
import {PriceBar} from "./PriceBar";
import {CartSVG} from "../svg/CartSVG";
import {WishlistSVG} from "../svg/WishlistSVG";
import s from './Products.module.css'

export function Product({ price, image, id, children, val}) {
    let data = {
        quantity: 1,
        productId: id
    }

    return (
        <div className={s['product-card']}>
            <div>{val}</div>
            <p className={s['suggestions']}>{'badgeLabel'}</p>
            <img className={s['product-card__img-1']} src={image} alt={val}/>
            <img className={s['product-card__img-2']} src={image} alt="product-1-2"/>
            <div className={s['action-bar']}>
                <Button className={s['btn-svg']} svg={<WishlistSVG/>}/>
                <Button className={s['btn-svg']} svg={<WishlistSVG/>}/>
                <Button className={s['btn-svg']} svg={<WishlistSVG/>}/>

                <div className={s['action-bar__tooltip-1']}>
                    Add To Wishlist
                </div>
                <div className={s['action-bar__tooltip-2']}>
                    Compare
                </div>
            </div>
            <div className={s['product-description']}>
                <p className={s['product-card__category']}>{'category'}</p>
                {children}
                <RatingStars ratingRevieWs={'(4.0)'}/>

                <p className={s['product-card__manufacturer-bar']}>By
                    <a className={s['manufacturer']}
                       href="#">{'manufacturer'}</a>
                </p>
                <div className={s['trade-bar']}>

                    <PriceBar price={price} oldPrice={val}/>
                    <Button
                        data={data}
                        className={s['product-card__add-btn']}
                        text={'Add'}
                        svg={<CartSVG/>}
                    />

                </div>

            </div>
        </div>

    )
}