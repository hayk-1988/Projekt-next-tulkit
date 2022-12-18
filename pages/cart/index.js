import React, {useEffect} from 'react';
import {Cart} from "../../components/cart/Cart";
import CartProduct from "../../components/cart/CartProduct";
import {useDispatch, useSelector} from "react-redux";
import {deleteCartProduct, deleteCartProductsFetch, getCartProducts, setCount} from "../../features/cart/cartSlice";
import {cartProductAdapter} from "../../utils/adaptors";
import product from "../products/[id]";

// let token = localStorage.getItem('token') todo chjanachec localStorage chgitem xi?????

// export async function getServerSideProps() {
//     let token = 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODg1MzBjODYzNTAzMGIxZDA4NTE0YyIsImlhdCI6MTY2OTg3OTEwMn0.7r84ouxrKweV6Z2m-cvD8OS1RZY4yxPcWu2Pj3FKyOD5LxbhQmbKPrLxJ3NI9C4Q'
//
//     let firstDataForCount = await getByTokenReq("https://420.canamaster.net/cart/rest/1/1", token);
//     let res = await getByTokenReq(`https://420.canamaster.net/cart/rest/1/${firstDataForCount.count}`, token);
//
//
//     // const tok = useSelector((state) => state)
//
//     // console.log('-----000000000------', tok)
//     // console.log(JSON.stringify(res, null,2))
//
//
//     let data = res.data.map(prod => {
//         return {
//             name: prod.product.descriptions[0].name,
//             id: prod.product.productId,
//             price: prod.product.price,
//             image: `https://420.canamaster.net/media/image/d/350/${prod.product.imageMain[0].image.url}`,
//             quantity: prod.quantity,
//             cartId: [prod.cartId],
//         }
//     })
//     let obj = data.reduce((p, c) => {
//         if (p[c.id]) {
//             p[c.id] = {
//                 ...c,
//                 quantity: ++p[c.id].quantity,
//                 cartId: [...p[c.id].cartId, ...c.cartId]
//             }
//         } else {
//             p[c.id] = {
//                 ...c,
//             }
//         }
//         return p
//     }, {})
//     return {
//         props: {
//             productsForRenderCart: Object.values(obj),
//             productsForOrder: res.data
//         }
//     }
//
// }


const cartIndex = () => {
//todo orinak ete useSelectory ogtagortsum em xi chi render linum?????

    let dispatch = useDispatch()
    let cartProducts = useSelector((state) => state.cartProducts.cartProducts)
    const loading = useSelector((state) => state.cartProducts.status)


    const cartProds = cartProductAdapter(cartProducts)


    useEffect(() => {
        dispatch(getCartProducts())
    }, [])


    function deleteHandler(id, cartIds) {
        dispatch(deleteCartProduct(id))
        dispatch(deleteCartProductsFetch(cartIds))
    }
    return (
        <Cart total={cartProds.reduce((p, c) => {
            p += c.price * c.quantity
            return p
        }, 0)}>

            {loading === 'loading'? cartProds.map(prod => {
                    return (
                        <CartProduct
                            key={prod.id+Date.now()+'b'}
                            name={prod.name}
                            price={prod.price}
                            image={prod.image}
                            quantity={prod.quantity}
                            cartIds={prod.cartId}
                            id={prod.id}
                            deleteHandler={deleteHandler}
                        />
                    )
                }) : <h1>LOADED...</h1>
            }
        </Cart>
    );
};

export default cartIndex;

//  {verjnakan?.map(prod => {
//                 return (
//                     <CartProduct
//                         key={prod.id}
//                         name={prod.name}
//                         price={prod.price}
//                         image={prod.image}
//                         quantity={prod.quantity}
//                         cartId={prod.cartId}
//                         del={del}
//                     />
//                 )
//             })}


// useEffect(  () => {
//
//     let token = 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODg1MzBjODYzNTAzMGIxZDA4NTE0YyIsImlhdCI6MTY2OTg3OTEwMn0.7r84ouxrKweV6Z2m-cvD8OS1RZY4yxPcWu2Pj3FKyOD5LxbhQmbKPrLxJ3NI9C4Q'
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append("Authorization", `Bearer ${token}`);
//
//     fetch("https://420.canamaster.net/cart/rest/1/10", {
//      method: "GET",
//      headers: myHeaders,
// })
//         .then(res => res.json())
//         .then(data => setCart(data.data))
// },[])
//
//
// console.log(cart)
// let data = cart.map(prod => {
//     return {
//         name: prod.product.descriptions[0].name,
//         id: prod.product.productId,
//         price: prod.product.price,
//         image: `https://420.canamaster.net/media/image/d/350/${prod.product.imageMain[0].image.url}`,
//         quantity: prod.quantity,
//         cartId: [prod.cartId],
//     }
// })
// let obj = data.reduce((p, c) => {
//     if (p[c.id]) {
//         p[c.id] = {
//             ...c,
//             quantity: ++p[c.id].quantity,
//             cartId: [...p[c.id].cartId, ...c.cartId]
//         }
//     } else {
//         p[c.id] = {
//             ...c,
//         }
//     }
//     return p
// }, {})
// let products = Object.values(obj)

//  let obj = {
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
//                     "comment": "Tulkit-test",
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
//         let newObj = {
//             "quantity": 1,
//             "productId": 6,
//             "product": {
//                 "productId": 6,
//                 "price": 230,
//                 "prevPrice": 230,
//                 "descriptions": [
//                     {
//                         "name": "Mini Mints",
//                         "languageId": 1
//                     }
//                 ],
//                 "imageMain": [
//                     {
//                         "image": {
//                             "name": "",
//                             "alt": "",
//                             "path": "/home/hp/Desktop/dev/newShop/media/upload/image/upload_a695e3be68cd307006d38b978b174bcb.jpg",
//                             "url": "UxNTA1OTQxNnewScriver.jpg"
//                         }
//                     }
//                 ],
//                 "options": [
//                     {
//                         "optionId": 118,
//                         "optionValueId": 611,
//                         "price": 35,
//                         "prevPrice": 40,
//                         "type": "select",
//                         "optionValue": {
//                             "optionId": 118,
//                             "optionValueId": 611,
//                             "descriptions": [
//                                 {
//                                     "name": "1/2 oz4"
//                                 }
//                             ]
//                         }
//                     }
//                 ]
//             }
//         }