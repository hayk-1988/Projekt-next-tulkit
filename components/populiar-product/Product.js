import {Button} from "./Button";
import {RatingStars} from "./RatingStars";
import {PriceBar} from "./PriceBar";
import {CartSVG} from "../svg/CartSVG";
import {WishlistSVG} from "../svg/WishlistSVG";


export function Product({ price, image, id, children, val}) {
    let data = {
        quantity: 1,
        productId: id
    }

    return (
        <div className="product-card">
            <div>{val}</div>
            <p className="suggestions">{'badgeLabel'}</p>
            <img className="product-card__img-1" src={image} alt={val}/>
            <img className="product-card__img-2" src={image} alt="product-1-2"/>
            <div className="action-bar">
                <Button className={'btn-svg'} svg={<WishlistSVG/>}/>
                <Button className={'btn-svg'} svg={<WishlistSVG/>}/>
                <Button className={'btn-svg'} svg={<WishlistSVG/>}/>

                <div className="action-bar__tooltip-1">
                    Add To Wishlist
                </div>
                <div className="action-bar__tooltip-2">
                    Compare
                </div>
            </div>
            <div className="product-description">
                <p className="product-card__category">{'category'}</p>
                {children}
                <RatingStars ratingRevieWs={'(4.0)'}/>

                <p className="product-card__manufacturer-bar">By
                    <a className="manufacturer"
                       href="#">{'manufacturer'}</a>
                </p>
                <div className="trade-bar">

                    <PriceBar price={price} oldPrice={val}/>
                    <Button
                        data={data}
                        className={"product-card__add-btn"}
                        text={'Add'}
                        svg={<CartSVG/>}
                    />

                </div>

            </div>
        </div>

    )
}