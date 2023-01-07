import React from 'react';
import {CartSVG} from "../svg/CartSVG";
import {WishlistSVG} from "../svg/WishlistSVG";
import s from './Product.module.css'

const Product = ({product}) => {
    return (
        <div className={s['one-product']}>
            <div className={s['left-side']}>
                <div className={s['img']}>
                    <img src={product.image} alt="product image"/>
                </div>
                <div className={s['carusel-bar']}>
                    <div className={s['carusel-list']}>
                    </div>
                </div>

            </div>

            <div className={s['right-side']}>
                <div className={s['right-side__details-info']}>
                    <span className={s['sale-off']}> Sale Off </span>
                    <h2 className={s['title']}>
                        {product.name}
                    </h2>
                    <div className={s['product-details-rating']}>
                        <div className={s['product-rate-cover']}>
                            <div className={s['product-rating-cover']}>

                            </div>
                        </div>
                        <span className={s['rating-reviews']}>
                     (32 reviews)
                </span>
                    </div>

                    <div className={s['product-prise-cover']}>
                    <span className={s['new-price']}>
                        ${product.price}
                    </span>
                        <span className={s['price-sale']}>
                        <span className={s['save-price']}>
                            26% Off
                        </span>
                        <span className={s['old-price']}>
                            ${+product.price + (product.price * 35 / 100)}
                        </span>
                    </span>
                    </div>

                    <div className={s['short-desc']}>
                        <p className={s['right-side__text']}>
                            {product.description}
                        </p>
                    </div>

                    <div className={s['product-size']}>
                        <strong className={s['product-size-weight']}>
                            Size / Weight:
                        </strong>
                        <div className={s['radio-list']}>
                            <label className={s['r-1']} name="r-1">50g
                                <input className={s['r']} type="radio" id="r-1"/>
                            </label>
                            <label className={s['r-2']} name="r-2">60g
                                <input className={s['r']} type="radio" id="r-2"/>
                            </label>
                            <label className={s['r-3']} name="r-3">80g
                                <input className={s['r']} type="radio" id="r-3"/>
                            </label>
                            <label className={s['r-4']} name="r-4">100g
                                <input className={s['r']} type="radio" id="r-4"/>
                            </label>
                            <label className={s['r-5']} name="r-5">150g
                                <input className={s['r']} type="radio" id="r-5"/>
                            </label>
                        </div>
                    </div>

                    <div className={s['count-add']}>

                        <input className={s['quantity']} type="number" min="1" defaultValue={1}/>

                        <div className={s['add-bar']}>

                            <button className={s['add-btn']}>
                                <CartSVG width='15' height='15'/>
                                Add to cart
                            </button>
                            <button className={s['heart-btn']}>
                                <WishlistSVG width='25' height='25'/>
                            </button>
                        </div>
                    </div>

                </div>

                <div className={s['right-side__footer']}>
                    <ul className={s['right-side__footer__left-side']}>
                        <li>
                            Type:
                            <span className={s['text-brand']}>Organic</span>
                        </li>
                        <li>
                            MFG:
                            <span className={s['text-brand']}>Jun 4.2022</span>
                        </li>
                        <li>
                            LIFE:
                            <span className={s['text-brand']}>70 days</span>
                        </li>
                    </ul>
                    <ul className={s['right-side__footer__right-side']}>
                        <li>
                            SKU:
                            <span className={s['text-brand']}>FWM15VKT</span>
                        </li>
                        <li>
                            Tags:
                            <span className={s['text-brand']}>Organic</span>
                        </li>
                        <li>
                            Stock:
                            <span className={s['text-brand']}>8 Items In Stock</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Product;