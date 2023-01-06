import React from 'react';
import {CartSVG} from "../svg/CartSVG";
import {WishlistSVG} from "../svg/WishlistSVG";

const Product = ({product}) => {
    return (
        <div className="one-product">
            <div className="left-side">
                <div className="img">
                    <img src={product.image} alt="product image"/>
                </div>
                <div className="carusel-bar">
                    <div className="carusel-list">
                    </div>
                </div>

            </div>

            <div className="right-side">
                <div className="right-side__details-info">
                    <span className="sale-off"> Sale Off </span>
                    <h2 className="title">
                        {product.name}
                    </h2>
                    <div className="product-details-rating">
                        <div className="product-rate-cover">
                            <div className="product-rating-cover">

                            </div>
                        </div>
                        <span className="rating-reviews">
                     (32 reviews)
                </span>
                    </div>

                    <div className="product-prise-cover">
                    <span className="new-price">
                        ${product.price}
                    </span>
                        <span className="price-sale">
                        <span className="save-price">
                            26% Off
                        </span>
                        <span className="old-price">
                            ${+product.price + (product.price * 35 / 100)}
                        </span>
                    </span>
                    </div>

                    <div className="short-desc">
                        <p className="right-side__text">
                            {product.description}
                        </p>
                    </div>

                    <div className="product-size">
                        <strong className="product-size-weight">
                            Size / Weight:
                        </strong>
                        <div className="radio-list">
                            <label className="r-1" name="r-1">50g
                                <input className="r" type="radio" id="r-1"/>
                            </label>
                            <label className="r-2" name="r-2">60g
                                <input className="r" type="radio" id="r-2"/>
                            </label>
                            <label className="r-3" name="r-3">80g
                                <input className="r" type="radio" id="r-3"/>
                            </label>
                            <label className="r-4" name="r-4">100g
                                <input className="r" type="radio" id="r-4"/>
                            </label>
                            <label className="r-5" name="r-5">150g
                                <input className="r" type="radio" id="r-5"/>
                            </label>
                        </div>
                    </div>

                    <div className="count-add">

                        <input className="quantity" type="number" min="1" defaultValue={1}/>

                        <div className="add-bar">

                            <button className="add-btn">
                                <CartSVG width='15' height='15'/>
                                Add to cart
                            </button>
                            <button className="heart-btn">
                                <WishlistSVG width='25' height='25'/>
                            </button>
                        </div>
                    </div>

                </div>

                <div className="right-side__footer">
                    <ul className="right-side__footer__left-side">
                        <li>
                            Type:
                            <span className="text-brand">Organic</span>
                        </li>
                        <li>
                            MFG:
                            <span className="text-brand">Jun 4.2022</span>
                        </li>
                        <li>
                            LIFE:
                            <span className="text-brand">70 days</span>
                        </li>
                    </ul>
                    <ul className="right-side__footer__right-side">
                        <li>
                            SKU:
                            <span className="text-brand">FWM15VKT</span>
                        </li>
                        <li>
                            Tags:
                            <span className="text-brand">Organic</span>
                        </li>
                        <li>
                            Stock:
                            <span className="text-brand">8 Items In Stock</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Product;