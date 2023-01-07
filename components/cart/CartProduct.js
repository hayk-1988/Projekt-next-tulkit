import React from 'react';
import s from '../../styles/Cart.module.css'


const CartProduct = ({image, name, price, quantity, cartIds, id, deleteHandler}) => {


    return (
        <>
            {
                <div className={s['shop-cart__product']}>
                    <div className={s['shop-cart__product-img']}>
                        <img src={image} alt="product-1"/>
                    </div>
                    <div className={s['shop-cart__product-description']}>
                        {name && <p>{name}</p>}
                        <div className={s['rating-bar']}>
                            <div className={s['rating-stars']}>
                                <div className={s['rating-stars--quantity']}>
                                </div>
                            </div>
                            <div className={s['rating-reviews']}>
                                (47)
                            </div>
                        </div>

                    </div>
                    <div className={s['cart__trade-bar']}>
                        <div className={s['unit-price']}>
                            {/*{price}*/}
                        </div>
                        {quantity && <input className={s['quantity']} type="number" min="1" defaultValue={quantity}/>}
                        <div className="subtotal">
                            ${price}
                        </div>
                    </div>
                    <div>
                        {cartIds && <button className={s['shop-cart__delete']} onClick={() => {
                            deleteHandler(id, cartIds)
                        }}>delete</button>}
                    </div>
                </div>
            }
        </>
    );
};

export default CartProduct;