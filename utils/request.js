import axios from "axios";
import {useRouter} from "next/router";

export async function postReviewReq(id, state){

    try {
        const token = localStorage.getItem('token')
        const body = {
            "productId": id, "message": state, "userRate": 5
        }
        const config = {
            method: 'post',
            url: `https://420.canamaster.net/customer/review/send`,
            headers: {"Authorization": `Bearer ${token}`},
            data:body
        };
        const res = await myAxios(config)
    }catch (err){
        console.log(err)
    }
}

export async function getReviewReq(id){
    try {
        const body = {
            "productId": id
        }
        const config = {
            method: 'post',
            url: `https://420.canamaster.net/customer/review/listU?fields%5Bmessage%5D=1&fields%5Breply%5D=1`,
            data: body
        };
        return await axios(config)
    }catch (err){
        console.log(err)
    }
}

export async function getProductReq(id){
    try {
        const config = {
            method: 'get',
            url: `https://420.canamaster.net/api/v1/products/${id}?fields%5Bprice%5D=1&fields%5Bpath%5D=1&fields%5Bicon%5D=1&fields%5Bimages%5D=1&fields%5BimageMain%5D=1&fields%5Bvideos%5D=1&fields%5BproductId%5D=1&fields%5Battributes%5D=1&fields%5Bdescriptions%5D=1&fields%5Boption%5D=1&fields%5BcurrentPrice%5D=1&fields%5Bbrands%5D=1&fields%5Bfilters%5D=1`,
            headers: { "Accept-Encoding": "gzip,deflate,compress" }
        };

        return await axios(config)
    }catch (err){
        console.log(err)
    }
}

export async function getProductsReq(offset, limit){
    try {
        const config = {
            method: 'get',
            url: `https://420.canamaster.net/api/v1/products/popular/${offset}/${limit}`,
            headers:{"Accept-Encoding": "gzip,deflate,compress"}
        };

        return await axios(config)
    }catch (err){
        console.log(err)
    }
}

export async function forgotPasswordReq(email){
    const body = {
        "email": email
    }
    try {
        const config = {
            method: 'post',
            url: `https://420.canamaster.net/customer/auth/reset-password`,
            data:body
        };
        const res = await axios(config)

    }catch (err){
        console.log(err)
    }
}

export async function getFilterProducts(min, max, categoryId , page, limit){
    try {
        const resCategories = await axios.get('https://420.canamaster.net/api/v1/products/shop/categories/0/23', {headers: { "Accept-Encoding": "gzip,deflate,compress" }});
        const resProducts = await axios.get(`https://420.canamaster.net/api/v1/products/category/new/${categoryId}/${page}/${limit}?filterIds=[]&&attributeIds=[]&&productIds=[]&&parentCategoryId=23&&priceMinMax=[${min},${max}]&&brandIds=[]`, {headers: { "Accept-Encoding": "gzip,deflate,compress" }});

        return {
            category: resCategories.data,
            products: resProducts.data
        }
    } catch (err) {
        console.log(err)
    }
}

export async function postOrdersReq(orderData, router){
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
        router.push('/')
    }catch (err){
        console.log(err)
    }
}

export async function getOrdersReq(){

  try {
      const token = localStorage.getItem('token')
      const config = {
          method: 'get',
          url: 'https://420.canamaster.net/order/rest/sales/1/10?date=3&status=&search=',
          headers: {
              "Authorization": `Bearer ${token}`
          }
      };
      const res = await axios(config )
      return res.data
  }catch (err){
      console.log(err)
  }
}

export async function addToCartReq(data, token) {
    try {
        const config = {
            method: 'POST',
            url: `https://420.canamaster.net/cart/rest/`,
            headers: {
                "Authorization": `Bearer ${token}`
            },
            data
        };
        return await axios(config)
    } catch (err) {
        console.log(err)
    }
}

export async function loginReq(user, setErr, router) {
    try {
        const res = await axios.post('https://420.canamaster.net/customer/auth/signin', user)
        localStorage.setItem('token', res.data.token)
        await router.push('/')
    } catch (err) {
        setErr({
            display: 'show',
            text: err.response?.data?.message
        })
        console.log(err)
    }
}

export async function registrationReq(data, setViz) {
    const config = {
        method: 'POST',
        url: 'https://420.canamaster.net/customer/auth/signup',
        data
    };
    try {
        return await axios(config)
    } catch (err) {
        setViz({
            display: 'show',
            text: err.response?.data?.error
        })
        console.log(err)
    }
}


export async function myAxios(config) {
    return await axios(config)
}


export async function getReq(uri, reqOption) {
    const res = await axios.get(uri, {headers: {"Accept-Encoding": "gzip,deflate,compress"}})
    return res.data
}
