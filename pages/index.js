import Head from 'next/head'

import Link from "next/link";
import {Product} from "../components/populiar-product/Product";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {setPages} from "../features/products/productsSlice";
import {productAdapter} from "../utils/adaptors";
import {Banners} from "../components/bunner/Banners";
import {HomeSlider} from "../components/sliders/HomeSlider";
import {HomeSlider2} from "../components/sliders/HomeSlider2";
import TimerProducts from "../components/timer-product/TimerProducts";

export async function getServerSideProps() {
    const res = await fetch("https://420.canamaster.net/api/v1/products/popular/1/10")
    const data = await res.json()
    const count = data.count
    return {
        props: {
             data
        }
    }
}


export default function Home({data}) {
    const dispatch = useDispatch()

    dispatch(setPages(Math.floor(data.count / 10)))
    const prods = productAdapter(data)


    const loading =useSelector((state)=> state.products.status)


    const [chek, isChek] = useState(false)
    const [className, setClassName] = useState(['show', 'hide'])


    return (

        loading === 'loading' ? <div><h1>vay qu ara</h1></div> : <>
            <HomeSlider xClas={className} chek={chek} radio2={(obj) => {
                isChek(obj.isChek)
                setClassName([className[1], className[0]])
            }}/>
            <Banners/>
            <h1 className="timer-product__header">Popular Products</h1>
            <div className='products'>
                {
                    prods?.map(prod => {
                        return (
                            <Product
                                key={prod.id}
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

            <HomeSlider2/>
            <TimerProducts/>

        </>

    )
}
