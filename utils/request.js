import axios from "axios";


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
        const data1 = await axios(config)
        console.log(data1)
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
