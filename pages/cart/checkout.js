import React, { useEffect} from 'react';
import Checkout from "../../components/checkout/Checkout";
import {postOrdersReq} from "../../utils/request";
import {useDispatch, useSelector} from "react-redux";
import {cartProductAdapter} from "../../utils/adaptors";
import {getCartProducts} from "../../features/cart/cartSlice";
import {useRouter} from "next/router";

const CheckoutPage = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const cartProducts = useSelector((state) => state.cartProducts.cartProducts)
    const cartProds = cartProductAdapter(cartProducts)
    const orderData = cartProds.map(elem => {
        return {
            "quantity": elem.quantity,
            "productId": elem.id,
            "product": elem.product
        }
    })

    useEffect(() => {
        dispatch(getCartProducts())
    },[])

    async function order() {
      try {
          await postOrdersReq(orderData, router)
      }catch (err){

      }
    }

    return (
        <Checkout order={order} cartItems={cartProds}/>
    );
};

export default CheckoutPage;