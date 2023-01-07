import Head from 'next/head'

import Link from "next/link";
import {Product} from "../components/populiar-product/Product";
import {useSelector} from "react-redux";
import React, {useState} from "react";
import {productAdapter} from "../utils/adaptors";
import {Banners} from "../components/bunner/Banners";
import {HomeSlider} from "../components/sliders/HomeSlider";
import {HomeSlider2} from "../components/sliders/HomeSlider2";
import ToUp from "../components/to-up";
import TimerProducts from "../components/timer-product/TimerProducts";
import {getProductsReq} from "../utils/request";
import {DownBanner} from "../components/bunner/DownBanner";

export async function getServerSideProps() {
    const resProducts = await getProductsReq(1, 10)
    const products = resProducts.data
    return {
        props: {
            products,
        }
    }
}


export default function Home({products}) {

    const popularProducts = productAdapter(products)
    const loading =useSelector((state)=> state.products.status)
    const [chek, isChek] = useState(false)
    const [className, setClassName] = useState(['show', 'hide'])


    function scrollSmooth() {
        window.scrollTo({top: 0, behavior: "smooth"});
    }
    function upHandler (){
        scrollSmooth()
    }

    return (

        loading === 'loading' ? <div><p className='loading'>LOADED...</p></div> : <>
            <ToUp upHandler={upHandler}/>
            <HomeSlider xClas={className} chek={chek} radio2={(obj) => {
                isChek(obj.isChek)
                setClassName([className[1], className[0]])
            }}/>
            <Banners/>
            <h1 className="timer-product__header">Popular Products</h1>
            <div className='products'>
                {
                    popularProducts?.map(prod => {
                        return (
                            <Product
                                key={Math.random() +'fidcb' + Date.now()}
                                name={prod.name}
                                image={prod.image}
                                price={prod.price}
                                id={prod.id}
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
            <DownBanner/>
        </>

    )
}
