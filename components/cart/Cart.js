
import Link from "next/link";
import s from '../../styles/Cart.module.css'
export function Cart({children, total}) {


    return (
        <div className="cart-page">

            <div className={s['cart-page__content']}>
                <div className={s['shop-cart']}>
                    <div className={s['shop-cart__header']}>
                        <div className={s['shop-cart__header-left']}>
                            <h2>Your Cart</h2>
                            <h3>There are 3 products in your cart</h3>
                        </div>
                        <p>
                            Clear Cart
                        </p>
                    </div>
                    <div className={s['shop-cart__products']}>
                        <div className={s['shop-cart__description']}>
                            <p className={s['shop-cart__description-p1']}>Product</p>
                            <div className={s['shop-cart__description-p2']}>
                                <p>Unit Price</p>
                                <p>Quantity</p>
                                <p>Subtotal</p>
                                <p>Remove</p></div>
                        </div>
                        {children}
                    </div>
                    <div className={s['shop-cart__footer']}>
                       <Link href={'/cart/checkout'}> <button>Continue Shopping</button></Link>
                        <button>Update Cart</button>
                    </div>
                </div>
                <div className={s['cart-page__total-price-bar']}>
                    <div className={s['subtotal-bar']}>
                        <span>Subtotal</span>
                        <p className={s['subtotal']}>{total} $</p>
                    </div>
                    <div className={s['subtotal-bar']}>

                    </div>
                    <div className={s['subtotal-bar']}>
                        <span>Shipping</span>
                        <p>Free</p>
                    </div>
                    <div className={s['subtotal-bar']}>
                        <span>Estimate for</span>
                        <p>United Kingdom</p>
                    </div>
                    <div className={s['subtotal-bar']}>

                    </div>
                    <div className={s['subtotal-bar']}>
                        <span>Total</span>
                        <p className={s['subtotal']}>{total} $</p>
                    </div>
                    <button>Proceed To CheckOut</button>
                </div>
            </div>
        </div>
    )
}