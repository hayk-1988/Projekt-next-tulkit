import Head from 'next/head'

import Link from "next/link";
import {Product} from "../components/populiar-product/Product";
import {useSelector} from "react-redux";
import React, {useState} from "react";
import {productAdapter} from "../utils/adaptors";
import {Banners} from "../components/bunner/Banners";
import {HomeSlider} from "../components/sliders/HomeSlider";
import {HomeSlider2} from "../components/sliders/HomeSlider2";
import LocaleSwitcher from "../components/locale-switcher";
import ToUp from "../components/to-up";
import TimerProducts from "../components/timer-product/TimerProducts";

export async function getServerSideProps({locale, locales,}) {
    let lang = ''
    switch (locale){
        case 'en':
            lang = 'English'
            break;
        case 'fr':
            lang = 'Frans'
            break;
        case 'ru':
            lang = "Tvarish"
            break;
        default:
            lang = 'Armenian'
    }
    const res = await fetch("https://420.canamaster.net/api/v1/products/popular/1/10")
    const data = await res.json()
    return {
        props: {
             data,
            lang
        }
    }
}


export default function Home({data, lang}) {

    // const dispatch = useDispatch()
    // dispatch(setPages(Math.floor(data.count / 10)))
    const prods = productAdapter(data)
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
            {/*<LocaleSwitcher/>*/}
            {/*<h1 className="lang">{lang}</h1>*/}
            <ToUp upHandler={upHandler}/>
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
                                key={Math.random() +'fidcb' + Date.now()}
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
