import React, { useEffect} from 'react';
import Checkout from "../../components/checkout/Checkout";
import {myAxios} from "../../utils/request";
import {useDispatch, useSelector} from "react-redux";
import {cartProductAdapter} from "../../utils/adaptors";
import {getCartProducts} from "../../features/cart/cartSlice";

const checkout = () => {
    const dispatch = useDispatch()
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
        let body = {
            "status": "new",
            "products": orderData,
            "orderInfo": {
                "address": {
                    "value": "Los Angeles / 1st, Los Angeles, CA 90012, USA",
                    "lat": 34.051930954038056,
                    "lng": -118.24224398602323,
                    "postalCode": "90012",
                    "address": "Los Angeles / 1st, Los Angeles, CA 90012, USA"
                },
                "data": {
                    "phone": 37494454398,
                    "comment": "test",
                    "pay": false,
                    "taxPrice": 19.125,
                    "taxParcent": "22.5%",
                    "shipping": 5,
                    "address": "Los Angeles / 1st, Los Angeles, CA 90012, USA"
                },
                "pay": {
                    "status": "open",
                    "method": "payOnDelivery"
                },
                "status": "done",
                "value": {
                    "currency": "USD",
                    "price": 50
                }
            }
        }
        let token = localStorage.getItem('token')

        try {
            const config = {
                method: 'post',
                url: `https://420.canamaster.net/order/rest/sales/add`,
                data:body,
                headers:{
                    Authorization: `Bearer ${token}`
                }
            };
            const res = await myAxios(config)

        }catch (err){
            console.log(err)
        }
    }

    return (
        <Checkout order={order} cartItems={cartProds}/>
    );
};

export default checkout;