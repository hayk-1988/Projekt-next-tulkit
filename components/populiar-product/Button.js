import {useRouter} from "next/router";
import {useState} from "react";
import {getCartProducts} from "../../features/cart/cartSlice";
import {useDispatch} from "react-redux";


export function Button({className, text, svg, data}) {
    let router = useRouter()
    const dispatch = useDispatch()

    async function addToCart() {
        console.log(data)
        let token = localStorage.getItem('token')
        if (!token) {
            return router.push('/login')
        }
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`)
        let response = await fetch("https://420.canamaster.net/cart/rest/", {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(data),
            redirect: "follow"
        });

        let resData = await response.json();
        dispatch(getCartProducts())


        // let token = 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODg1MzBjODYzNTAzMGIxZDA4NTE0YyIsImlhdCI6MTY2OTg3OTEwMn0.7r84ouxrKweV6Z2m-cvD8OS1RZY4yxPcWu2Pj3FKyOD5LxbhQmbKPrLxJ3NI9C4Q'


        // console.log(resData, 'incha tpum')
    }

    return (
        <button className={className} onClick={addToCart}>
            {svg}
            {text}
        </button>
    )
}