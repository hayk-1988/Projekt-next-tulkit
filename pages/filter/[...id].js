import React, {useEffect, useRef, useState} from 'react';
import {Product} from "../../components/populiar-product/Product";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {productAdapter} from "../../utils/adaptors";
import {getFilterCategories, getFilterProducts, setCategories} from "../../features/filter/filterSlice";
import {getReq} from "../../utils/request";
import {useRouter} from "next/router";
import Slider2 from "../../components/filter/Slider2";

export async function getServerSideProps(context) {

    let {min, max, categoryId , page, limit} = context.query

    if (min === undefined || max === undefined || categoryId === undefined || !page || !limit){
        min = 0
        max = 1000
        categoryId = '0'
        page = 1
        limit = 10
    }
    const categories = await getReq('https://420.canamaster.net/api/v1/products/shop/categories/0/23');
    const data = await getReq(`https://420.canamaster.net/api/v1/products/category/new/${categoryId}/${page}/${limit}?filterIds=[]&&attributeIds=[]&&productIds=[]&&parentCategoryId=23&&priceMinMax=[${min},${max}]&&brandIds=[]`);

    console.log(data)
    const minMax = {}
    if (data.minMax[0].min === min || +min === 0) {
        minMax.min = data.minMax[0].min
    } else {
        minMax.min = min
    }
    if (data.minMax[0].max === max || +max === 0) {
        minMax.max = data.minMax[0].max
    } else {
        minMax.max = max
    }

    return {
        props: {
            data,
            path: {min, max, categoryId , page, limit},
            categories: categories.categories,
            minMax,
            obj: data.minMax[0]
        }
    }
}

const filter = ({data, path, categories, minMax, obj}) => {

    const [minVal, setMinVal] = useState(+minMax.min);
    const [maxVal, setMaxVal] = useState(+minMax.max);

    const statRef = useRef(minMax)

    console.log(statRef)
    const [cat, setCat] = useState(path.categoryId)
    const [count, setCount] = useState(path.page)

    const router = useRouter()
    const prods = productAdapter(data)
    let pages = 1
    if (+data.products.length < 10) {
        pages = +count
    } else {
        pages = +count + 1
    }
    function scrollSmooth() {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    console.log('filteri pagum')
    function handleDecrement() {
        if (+count !== 1) {
            scrollSmooth()
            setCount(+count - 1)
        }
    }
    function handleIncrement() {
        if (+count !== +pages) {
            scrollSmooth()
            setCount(+count + 1)
        }
    }

    useEffect(() => {
        const timerId = setTimeout(async () => {
            router.push(`/filter/1?page=${count}&limit=10&min=${minVal}&max=${maxVal}&categoryId=${cat}`)
        }, 1000)
        return () => {
            clearTimeout(timerId)
        }
    }, [minVal, maxVal, cat])




    return (
        <>
            <div className="filter">
                <div className={'filter_left'}>

                    <Slider2
                        minVal={minVal}
                        maxVal={maxVal}
                        setMinVal={setMinVal}
                        setMaxVal={setMaxVal}
                        minMax={statRef}
                    />


                    <div className={'categories__title'}> <h2>Categories</h2>
                    <div className={'filter__categories'}>
                        <label name={'all'}>
                            <input name={'radio'} type="radio"
                                   id={'all'}
                                   checked={(+0 === +cat)}
                                   onChange={(e) => {
                                       setCat(0)
                                   }}
                            />
                            <h2>All</h2>
                        </label>
                    </div>
                    {
                        categories?.map(elem => {
                            return (
                                <div key={elem.id} className={'filter__categories'}>
                                    <label name={elem.id}>
                                        <input name={'radio'} type="radio"
                                               id={elem.id} value={elem.source}
                                               checked={(+elem.categoryId === +cat)}
                                               onChange={(e) => {
                                                   setCount(1)
                                                   setCat(elem.categoryId)
                                               }}
                                        />
                                        <h2>{elem.source}</h2>
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
                </div>

                <div className="filter__products">

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

                </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                <Link href={`/filter/1?page=${+count === 1 ? 1 : (count - 1)}&limit=10&min=${minVal}&max=${maxVal}&categoryId=${cat}`}>
                    {+count === 1 ? undefined :
                        <button className={'product-card__add-btn'} onClick={handleDecrement}>{'<'}</button>}
                </Link>
                 <button className={'products-page__pagination-midle'}>{count}</button>
                <Link href={`/filter/1?page=${+count === +pages ? pages : +count + 1}&limit=10&min=${minVal}&max=${maxVal}&categoryId=${cat}`}>
                    {+count === +pages ? undefined :
                        <button className={'product-card__add-btn'} onClick={handleIncrement}>{'>'}</button>}
                </Link>
            </div>
        </>
    );
};

export default filter;
