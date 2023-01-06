
import Link from "next/link";

export function Cart({children, total}) {


    return (
        <div className="cart-page">

            {/*<button onClick={handleClick}>Sign Out</button>*/}
            <div className="cart-page__content">
                <div className="shop-cart">
                    <div className="shop-cart__header">
                        <div className="shop-cart__header-left">
                            <h2>Your Cart</h2>
                            <h3>There are 3 products in your cart</h3>
                        </div>
                        <p>
                            Clear Cart
                        </p>
                    </div>
                    <div className="shop-cart__products">
                        <div className="shop-cart__description">
                            <p className="shop-cart__description-p1">Product</p>
                            <div className="shop-cart__description-p2">
                                <p>Unit Price</p>
                                <p>Quantity</p>
                                <p>Subtotal</p>
                                <p>Remove</p></div>
                        </div>
                        {children}
                    </div>
                    <div className="shop-cart__footer">
                       <Link href={'/cart/checkout'}> <button>Continue Shopping</button></Link>
                        <button>Update Cart</button>
                    </div>
                </div>
                <div className="cart-page__total-price-bar">
                    <div className="subtotal-bar">
                        <span>Subtotal</span>
                        <p className="subtotal">{total} $</p>
                    </div>
                    <div className="subtotal-bar">

                    </div>
                    <div className="subtotal-bar">
                        <span>Shipping</span>
                        <p>Free</p>
                    </div>
                    <div className="subtotal-bar">
                        <span>Estimate for</span>
                        <p>United Kingdom</p>
                    </div>
                    <div className="subtotal-bar ">

                    </div>
                    <div className="subtotal-bar">
                        <span>Total</span>
                        <p className="subtotal">{total} $</p>
                    </div>
                    <button>Proceed To CheckOut</button>
                </div>
            </div>
        </div>
    )
}