import {Button} from "../populiar-product/Button";
import {PriceBar} from "../populiar-product/PriceBar";
import {CartSVG} from "../svg/CartSVG";
import {WishlistSVG} from "../svg/WishlistSVG";


export function SliderProduct({price, oldPrice, imgFront, imgBack}) {

    return (
        <div className="product-card sp">
            <p className="suggestions">Hot</p>
            <img className="product-card__img-1" src={imgFront} alt="product-1"/>
            <img className="product-card__img-2" src={imgBack} alt="product-1-2"/>
            <div className="action-bar">
                <button className="btn-svg">
                    <WishlistSVG/>
                </button>
                <button className="btn-svg">
                    <WishlistSVG/>
                </button>
                <button className="btn-svg">
                    <WishlistSVG/>
                </button>
                <div className="action-bar__tooltip-1">
                    Add To Wishlist
                </div>
                <div className="action-bar__tooltip-2">
                    Compare
                </div>
            </div>

            <div className="product-description">
                <p className="product-card__category">Snack</p>
                <p className="description ">All Natural Italian-Style Chicken
                    Meatballs</p>
                <div className="rating-bar">
                    <div className="rating-stars">
                        <div className="rating-stars--quantity">
                        </div>
                    </div>
                </div>
                <p className="product-card__manufacturer-bar">By <a
                    className="manufacturer"
                    href="#">NestFood</a>
                </p>
                <div className="trade-bar">
                    <PriceBar price={price} oldPrice={oldPrice}/>


                    <div className="product-card__line"></div>

                    <Button className="home-slider-2__products-btn"
                            text={'Add To Cart'}
                            svg={<CartSVG/>}/>
                </div>

            </div>
        </div>

    )
}