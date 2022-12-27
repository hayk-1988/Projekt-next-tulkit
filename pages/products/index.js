
import Link from "next/link";
import {Product} from "../../components/populiar-product/Product";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useRef} from "react";
import {getProducts} from "../../features/products/productsSlice";
import {useRouter} from "next/router";


export default function products() {
    const router = useRouter()
    const dispatch = useDispatch()
    const products1 = useSelector((state)=> state.products.products)
    const loading =useSelector((state)=> state.products.status)

    useEffect(() => {
        router.push('/products/1/10')
    },[])
    useEffect(() => {
        console.log('lika')
        dispatch(getProducts())
        console.log(products1)

    },[])




    const arr = []

    return (
        loading === 'loading' ? <div><h1>vay qu ara</h1></div> : <>
            <h1 className="timer-product__header">Popular Products</h1>
            <div className='products'>
                {
                    products1?.map(prod => {
                        return (
                            <Product
                                key={prod.id + Date.now()+'h'}
                                name={prod.name}
                                image={prod.image}
                                price={prod.price}
                                id={prod.id}
                                // val={value}
                            >
                                <Link href={`/products/${prod.id}`}>
                                    <p className="description ">{prod.name}</p>
                                </Link>
                            </Product>
                        )
                    })
                }
            </div>

        </>

    )
}
