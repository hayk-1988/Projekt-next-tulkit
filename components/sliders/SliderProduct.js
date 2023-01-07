import {Button} from "../populiar-product/Button";
import {PriceBar} from "../populiar-product/PriceBar";
import {CartSVG} from "../svg/CartSVG";
import {WishlistSVG} from "../svg/WishlistSVG";
import productStyle from '../populiar-product/Products.module.css'
export function SliderProduct({price, oldPrice, imgFront, imgBack}) {


    return (
        <div className={`${productStyle['sp']} ${productStyle['product-card']}`}>
            <p className={productStyle['suggestions']}>Hot</p>
            <img className={productStyle['product-card__img-1']} src={imgFront} alt="product-1"/>
            <img className={productStyle['product-card__img-2']} src={imgBack} alt="product-1-2"/>
            <div className={productStyle['action-bar']}>
                <button className={productStyle['btn-svg']}>
                    <WishlistSVG/>
                </button>
                <button className={productStyle['btn-svg']}>
                    <WishlistSVG/>
                </button>
                <button className={productStyle['btn-svg']}>
                    <WishlistSVG/>
                </button>
                <div className={productStyle['action-bar__tooltip-1']}>
                    Add To Wishlist
                </div>
                <div className={productStyle['action-bar__tooltip-2']}>
                    Compare
                </div>
            </div>

            <div className={productStyle['product-description']}>
                <p className={productStyle['product-card__category']}>Snack</p>
                <p className={productStyle['description']}>All Natural Italian-Style Chicken
                    Meatballs</p>
                <p className={productStyle['product-card__manufacturer-bar']}>By <a
                    className={productStyle['manufacturer']}
                    href="#">NestFood</a>
                </p>
                <div className={productStyle['Slider-product__trade-bar']}>
                    <PriceBar price={price} oldPrice={oldPrice}/>


                    <div className={productStyle['product-card__line']}></div>

                    <Button className={productStyle['home-slider-2__products-btn']}
                            text={'Add To Cart'}
                            svg={<CartSVG/>}/>
                </div>

            </div>
        </div>

    )
}