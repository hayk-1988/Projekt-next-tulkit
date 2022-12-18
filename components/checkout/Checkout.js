import React from 'react';
import s from "./Checkout.module.css";
import CartProduct from "../cart/CartProduct";

const Checkout = ({order, cartItems}) => {

    let total = cartItems.reduce((p, c) => {
        p += c.price * c.quantity
        return p
    }, 0)
    return (
        <div className={s.checkout}>
            <div className={s.colm}>
                <div><p>Already have an account? Click here to login</p></div>
                <div><h2>Billing Details</h2></div>
                <input type="text" placeholder={'First name*'}/>
                <input type="text" placeholder={'Address*'}/>
                <input type="text"/>
                <input type="text"/>

            </div>
            <div className={s.colm}>
                <div><h2>Billing Details</h2></div>
                <input type="text" placeholder={'Last name*'}/>
                <input type="text" placeholder={'Address* line2'}/>
                <input type="text"/>
                <input type="text"/>
            </div>
            <div className={s.right}>
                <div className={s.rightHeader}>
                    <h2>Your Order</h2>
                    <div><h2>Total = </h2><p>{total}</p></div>
                </div>
                <div>
                    {
                        cartItems?.map(elem => {
                            return(
                                <CartProduct
                                    key={elem.productId + Date.now()+'a'}
                                    cartId={elem.productId}
                                    price={elem.price}
                                    image={elem.image}
                                    quantity={elem.quantity}
                                />
                            )
                        })
                    }

                </div>
                <button onClick={order} className={"product-card__add-btn"}>Place on Order</button>
            </div>
        </div>
    );
};

export default Checkout;