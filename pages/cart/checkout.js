import React, {useContext, useEffect} from 'react';
import Checkout from "../../components/checkout/Checkout";
import {postReqByToken} from "../../utils/request";
import {useDispatch, useSelector} from "react-redux";
import {cartProductAdapter} from "../../utils/adaptors";
import {getCartProducts} from "../../features/cart/cartSlice";

const checkout = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartProducts())
    },[])
    const cartProducts = useSelector((state) => state.cartProducts.cartProducts)

    const cartProds = cartProductAdapter(cartProducts)
    const orderData = cartProds.map(elem => {
        return {
            "quantity": elem.quantity,
            "productId": elem.id,
            "product": elem.product
        }
    })

    console.log(orderData)
    //https://420.canamaster.net/order/rest/sales/add
    console.log(cartProducts)

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

        console.log(token)
        const res = await postReqByToken("https://420.canamaster.net/order/rest/sales/add", body, token)


        console.log(res, 'es verjin pahy')
    }

    return (
        <Checkout order={order} cartItems={cartProductAdapter(cartProducts)}/>
    );
};

export default checkout;

//     let newBody = {
//             "status": "new",
//             "products": [
//                 {
//                     "quantity": 1,
//                     "productId": 6,
//                     "product": {
//                         "productId": 6,
//                         "price": 230,
//                         "prevPrice": 230,
//                         "descriptions": [
//                             {
//                                 "name": "Mini Mints",
//                                 "languageId": 1
//                             }
//                         ],
//                         "imageMain": [
//                             {
//                                 "image": {
//                                     "name": "",
//                                     "alt": "",
//                                     "path": "/home/hp/Desktop/dev/newShop/media/upload/image/upload_a695e3be68cd307006d38b978b174bcb.jpg",
//                                     "url": "UxNTA1OTQxNnewScriver.jpg"
//                                 }
//                             }
//                         ],
//                         "options": [
//                             {
//                                 "optionId": 118,
//                                 "optionValueId": 611,
//                                 "price": 35,
//                                 "prevPrice": 40,
//                                 "type": "select",
//                                 "optionValue": {
//                                     "optionId": 118,
//                                     "optionValueId": 611,
//                                     "descriptions": [
//                                         {
//                                             "name": "1/2 oz4"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ]
//                     }
//                 }
//             ],
//             "orderInfo": {
//                 "address": {
//                     "value": "Los Angeles / 1st, Los Angeles, CA 90012, USA",
//                     "lat": 34.051930954038056,
//                     "lng": -118.24224398602323,
//                     "postalCode": "90012",
//                     "address": "Los Angeles / 1st, Los Angeles, CA 90012, USA"
//                 },
//                 "data": {
//                     "phone": 37494454398,
//                     "comment": "test",
//                     "pay": false,
//                     "taxPrice": 19.125,
//                     "taxParcent": "22.5%",
//                     "shipping": 5,
//                     "address": "Los Angeles / 1st, Los Angeles, CA 90012, USA"
//                 },
//                 "pay": {
//                     "status": "open",
//                     "method": "payOnDelivery"
//                 },
//                 "status": "done",
//                 "value": {
//                     "currency": "USD",
//                     "price": 50
//                 }
//             }
//         }