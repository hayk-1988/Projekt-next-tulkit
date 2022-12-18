import Head from 'next/head'

import Link from "next/link";
import {Product} from "../../components/populiar-product/Product";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useRef} from "react";
import {decCount, getProducts, incCount, setPage, setPages} from "../../features/products/productsSlice";
import {useRouter} from "next/router";
import {adapter} from "next/dist/server/web/adapter";
import {productAdapter} from "../../utils/adaptors";

export async function getServerSideProps() {
    const res = await fetch("https://420.canamaster.net/api/v1/products/popular/1/10")
    const data = await res.json()
    const count = data.count

    const products = productAdapter(data)
    return {
        props: {
            products,
            count
        }
    }
}

export default function products({products, count}) {
    const router = useRouter()

    useEffect(() => {
        router.push('/products/1/10')
    },[])


    const dispatch = useDispatch()
    const pages = useSelector((state) => state.products.pages)


    useEffect(() => {
        dispatch(setPages(Math.floor(count / 10)))
    },[])

    // const pageRef = useRef(count)
    // console.log(pageRef.current, count)

    function handleDecrement(){
        if (count > 1){
            dispatch(decCount())
            localStorage.setItem('page', `${count - 1}`)
        }
    }
    function handleIncrement(){
        if (count < pages){
            dispatch(incCount())
            localStorage.setItem('page', `${count + 1}`)
        }
    }

    useEffect(() => {
        if (!localStorage.getItem('page')){
            localStorage.setItem('page', '1')
        }
        let lSCount = +localStorage.getItem('page')
        dispatch(setPage(lSCount || 1))
    },[])
    useEffect(() => {
        let lSCount = +localStorage.getItem('page')
        dispatch(getProducts(`${lSCount}/10`))
    },[count])

    const loading =useSelector((state)=> state.products.status)
    return (
        loading === 'loading' ? <div><h1>vay qu ara</h1></div> : <>
            <h1 className="timer-product__header">Popular Products</h1>
            <div className='products'>
                {
                    products?.map(prod => {
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

            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                <button className={'product-card__add-btn'} onClick={handleDecrement}>{'<<<'}</button>
                <Link href={`/products/${count === 1 ? 1 : count - 1}/10`}><button className={'product-card__add-btn'} onClick={handleDecrement}>{'<'}</button></Link>

                {+count === 1 ? undefined: <button className={'products-page__pagination'}>{1}</button>}
                {+count === pages ? <button className={'products-page__pagination'}>{pages - 1}</button> : undefined}

                <button className={'products-page__pagination-midle'}>{count}</button>

                {+count === 1 ? <button className={'products-page__pagination'}>{2}</button> :  undefined}
                {+count === pages ? undefined: <button className={'products-page__pagination'}>{pages}</button>}

                <Link href={`/products/${count === pages ? pages : count + 1}/10`}><button className={'product-card__add-btn'} onClick={handleIncrement}>{'>'}</button></Link>
                <button className={'product-card__add-btn'} onClick={handleIncrement}>{'>>>'}</button>
            </div>
        </>

    )
}
