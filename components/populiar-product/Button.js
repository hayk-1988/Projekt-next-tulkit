import {useRouter} from "next/router";
import {getCartProducts} from "../../features/cart/cartSlice";
import {useDispatch} from "react-redux";
import {addToCartReq} from "../../utils/request";


export function Button({className, text, svg, data}) {
    let router = useRouter()
    const dispatch = useDispatch()

    async function addToCart() {
        console.log(data)
        let token = localStorage.getItem('token')
        if (!token) {
            return router.push('/login')
        }
        await addToCartReq(data, token)
        dispatch(getCartProducts())
    }
    return (
        <button className={className} onClick={addToCart}>
            {svg}
            {text}
        </button>
    )
}