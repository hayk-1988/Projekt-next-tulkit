import axios from "axios";
import {myAxios} from "../../utils/request";

export async function deleteCartProductReq(cartIds = []) {

    try {
        console.log(cartIds)
        cartIds?.map(async (elem) => {
            const res = await axios.delete(`https://420.canamaster.net/cart/rest/${elem}`)
            console.log(res)
        })
    } catch (err) {
        console.log(err)
    }
}

export async function deleteCartProductsReq(cartIds = []) {

    let token = localStorage.getItem('token')
    try {
        const config = {
            method: 'put',
            url: `https://420.canamaster.net/cart/rest/b/a`,
            data: cartIds,
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const res = await myAxios(config)
    } catch (err) {
        console.log(err)
    }
}

export async function getCartProductReq() {
    const token = localStorage.getItem('token')
    const res = await axios({
        method: 'get',
        url: "https://420.canamaster.net/cart/rest/1/1",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })

    return await axios({
        method: 'get',
        url: `https://420.canamaster.net/cart/rest/1/${res.data.count}`,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}