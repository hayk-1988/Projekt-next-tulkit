import axios from "axios";

export async function deleteCartProductReq(cartIds=[]){

    cartIds.map(async (elem) => {
        await axios.delete(`https://420.canamaster.net/cart/rest/${elem}`)
    })
}

export async function getCartProductReq() {
    const token = localStorage.getItem('token')
    const config1 = {
        method: 'get',
        url: "https://420.canamaster.net/cart/rest/1/1",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };
    const res = await axios(config1)
    const config2 = {
        method: 'get',
        url: `https://420.canamaster.net/cart/rest/1/${res.data.count}`,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };
    return  await axios(config2)

}