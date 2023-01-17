import React, {useEffect} from 'react';
import {Cart} from "../../components/cart/Cart";
import CartProduct from "../../components/cart/CartProduct";
import {useDispatch, useSelector} from "react-redux";
import {
    clearCart,
    deleteCartProduct,
    deleteCartProductsFetch,
    getCartProducts,
    setCount
} from "../../features/cart/cartSlice";
import {cartProductAdapter} from "../../utils/adaptors";
import {useRouter} from "next/router";
import {getCartProductReq} from "../../features/cart/api";


const CartIndex = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const cartProducts = useSelector((state) => state.cartProducts.cartProducts)
    const loading = useSelector((state) => state.cartProducts.status)
    const cartProds = cartProductAdapter(cartProducts)

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            router.push('/login')
        }
        dispatch(getCartProducts())
    }, [])


    async function deleteHandler(id, cartIds) {
        dispatch(deleteCartProduct(id))
        dispatch(deleteCartProductsFetch(cartIds))
        const res = await getCartProductReq()
        dispatch(setCount(res.data.count))
    }

    async function handleDeleteAll(){
        const cartIds = cartProds.reduce((p, c) => {
            p.push(...c.cartId)
            return p
        }, [])

        console.log(cartIds, 'cartidiner')
        dispatch(clearCart())
        dispatch(deleteCartProductsFetch(cartIds))
        dispatch(setCount(0))
    }

    return (
        <Cart total={cartProds.reduce((p, c) => {
            p += c.price * c.quantity
            return p
        }, 0)}
              handleDeleteAll={handleDeleteAll}
        >
            {loading !== 'loading' ? cartProds.map(prod => {
                return (
                    <CartProduct
                        key={prod.id + Date.now() + 'b'}
                        name={prod.name}
                        price={prod.price}
                        image={prod.image}
                        quantity={prod.quantity}
                        cartIds={prod.cartId}
                        id={prod.id}
                        deleteHandler={deleteHandler}
                    />
                )
            }) : <p className='loading'>LOADED...</p>
            }
        </Cart>
    );
};

export default CartIndex;
