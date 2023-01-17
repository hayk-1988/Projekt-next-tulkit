import {motion} from 'framer-motion';

import Link from "next/link";
import {MProduct, Product} from "../components/populiar-product/Product";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useRef, useState} from "react";
import {productAdapter} from "../utils/adaptors";
import {Banners, MBanners} from "../components/bunner/Banners";
import {HomeSlider} from "../components/sliders/HomeSlider";
import {HomeSlider2, MHomeSlider2} from "../components/sliders/HomeSlider2";
import ToUp from "../components/to-up";
import TimerProducts from "../components/timer-product/TimerProducts";
import {getProductsReq} from "../utils/request";
import {DownBanner} from "../components/bunner/DownBanner";
import {getCartProducts} from "../features/cart/cartSlice";
import Modal from "../components/modal/Modal";

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
    const dispatch = useDispatch()
    const popularProducts = productAdapter(products)
    const loading = useSelector((state) => state.products.status)
    const [chek, isChek] = useState(false)
    const [className, setClassName] = useState(['show', 'hide'])

    const [modalActive, setModalActive] = useState(true)

    function scrollSmooth() {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    function upHandler() {
        scrollSmooth()
    }

    useEffect(() => {
        dispatch(getCartProducts())

    }, [])

    const textAnimation = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.2, duration: 0.7},
        }),
    }
    const productAnimation = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.1 },

        }),
    }



    return (

        loading === 'loading' ? <div><p className='loading'>LOADED...</p></div> : <>
            < motion.div
                initial="hidden"
                whileInView="visible"
            >
                <ToUp upHandler={upHandler}/>
                <HomeSlider xClas={className} chek={chek} radio2={(obj) => {
                    isChek(obj.isChek)
                    setClassName([className[1], className[0]])
                }}/>
                <MBanners
                    initial="hidden"
                    whileInView="visible"
                    custom={5}
                    variants={textAnimation}
                />
                <motion.h1
                    whileHover={{
                        color: 'green',
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.5, once: true}}
                    custom={1}
                    variants={textAnimation}
                    className="timer-product__header"
                >
                    Popular Products
                </motion.h1>
                <div className='products'>
                    {
                        popularProducts?.map((prod, i) => {
                            return (
                                <MProduct
                                    custom={i + 1}
                                    variants={productAnimation}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{amount: 0, once: false}}

                                    key={Math.random() + 'fidcb' + Date.now()}
                                    name={prod.name}
                                    image={prod.image}
                                    price={prod.price}
                                    id={prod.id}
                                >
                                    <Link href={`/products/${prod.id}`}>
                                        <p className="description ">{prod.name}</p>
                                    </Link>
                                </MProduct>
                            )
                        })
                    }
                </div>
                <MHomeSlider2
                    variants={productAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.3, once: false}}
                />
                <TimerProducts/>
                <DownBanner/>
            </motion.div>
            <Modal active={modalActive} setActive={setModalActive}/></>
    )
}
