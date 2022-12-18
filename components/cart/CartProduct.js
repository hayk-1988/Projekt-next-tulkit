import React from 'react';


const CartProduct = ({image, name, price, quantity, cartIds, id, deleteHandler}) => {


    return (
        <>
            {
                <div className="shop-cart__product">
                    <div className="shop-cart__product-img">
                        <img src={image} alt="product-1"/>
                    </div>
                    <div className="shop-cart__product-description">
                        {name && <p>{name}</p>}
                        <div className="rating-bar">
                            <div className="rating-stars">
                                <div className="rating-stars--quantity">
                                </div>
                            </div>
                            <div className="rating-reviews">
                                (47)
                            </div>
                        </div>

                    </div>
                    <div className="cart__trade-bar">
                        <div className="unit-price">
                            {/*{price}*/}
                        </div>
                        {quantity && <input className="quantity" type="number" min="1" defaultValue={quantity}/>}
                        <div className="subtotal">
                            ${price}
                        </div>
                    </div>
                    <div>
                        {cartIds && <button className="shop-cart__delete" onClick={() => {
                            deleteHandler(id, cartIds)
                        }}>delete</button>}
                    </div>
                </div>
            }
        </>
    );
};

export default CartProduct;