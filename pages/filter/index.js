import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Product} from "../../components/populiar-product/Product";
import Link from "next/link";
import {getFilterCategories, getFilterProducts} from "../../features/filter/filterSlice";
import {productAdapter} from "../../utils/adaptors";
import {useRouter} from "next/router";

const Index = () => {
    const router = useRouter()

    const dispatch = useDispatch()
    const categories = useSelector((state) => state.filter.categories)
    const [min, setMin] = useState('')
    const [max, setMax] = useState('')
    const [filters, setFilters] = useState({categoryId: 0, minMax: [], limit: 10, page: 1})
    const data = useSelector((state) => state.filter.filterData)
    const prods = productAdapter(data)

    console.log('filteri pagum')

    useEffect(() => {

        router.push(`/filter/1?page=${1}&limit=10&min=${0}&max=${0}&categoryId=${0}`)

        dispatch(getFilterCategories())

        const minVal = localStorage.getItem('minValue')
        const maxVal = localStorage.getItem('maxValue')
        setMin(minVal)
        setMax(maxVal)
    }, [])

    useEffect(() => {
        const timerId = setTimeout(async () => {
            dispatch(getFilterProducts(filters))
        },1000)
        return() => {
            clearTimeout(timerId)
        }
    },[filters])
    return (
        <>
            <div className="filter">
                <div className={'filter_left'}>


                    {
                        categories?.map(elem => {
                            return (
                                <div key={Math.random() +'fi' + Date.now()} className={'filter__categories'}>
                                    <label name={elem.id}>
                                        <input name={'radio'} type="radio"
                                               id={elem.id} value={elem.source}
                                               onChange={(e) => {

                                                   if (e.target.checked){
                                                       console.log(e.target.checked)
                                                       localStorage.setItem('category', elem.categoryId)
                                                       const categoryId = localStorage.getItem('category')
                                                       setFilters({...filters, categoryId: categoryId})
                                                   }else {
                                                       console.log(e.target.checked, 'radioi drsum')
                                                   }
                                               }}
                                        />
                                        <h2>{elem.source}</h2>
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="filter__products">

                    <div className='products'>
                        {
                            prods?.map(prod => {
                                return (
                                    <Product
                                        key={Math.random() +'f' + Date.now()}
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

        </>
    );
};

export default Index;

