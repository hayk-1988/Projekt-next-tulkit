import React, {useEffect, useState} from 'react';
import {Product} from "../../components/populiar-product/Product";
import {cartProductAdapter, productAdapter} from "../../utils/adaptors";
import {postReq, postReqByToken} from "../../utils/request";
import Link from "next/link";


export async function getServerSideProps({params}) {

    const res = await fetch(`https://420.canamaster.net/api/v1/products/${params.id}?fields%5Bprice%5D=1&fields%5Bpath%5D=1&fields%5Bicon%5D=1&fields%5Bimages%5D=1&fields%5BimageMain%5D=1&fields%5Bvideos%5D=1&fields%5BproductId%5D=1&fields%5Battributes%5D=1&fields%5Bdescriptions%5D=1&fields%5Boption%5D=1&fields%5BcurrentPrice%5D=1&fields%5Bbrands%5D=1&fields%5Bfilters%5D=1`)
    const data = await res.json()

    console.log(params.id)

    const body = {
        "productId": params.id
    }
    const review = await postReq('https://420.canamaster.net/customer/review/listU?fields%5Bmessage%5D=1&fields%5Breply%5D=1', body)

    console.log(data)
    const newData = {
        description: data.descriptions[0].description,
        id: data.productId,
        price: data.price,
        name: data.descriptions[0].name,
        image: `https://420.canamaster.net/media/image/d/350/${data?.imageMain[0]?.image?.url}`
    }

    return {
        props: {
            product: newData,
            review
        }
    }
}


// export async function getStaticPaths(){
//     const res = await fetch('https://420.canamaster.net/api/v1/products/popular/1/10')
//     const data = await res.json()
//
//     const paths = data.products.map((elem)=>{
//         return{
//             params: {id: elem.productId.toString()}
//         }
//     })
//     return{
//         paths,
//         fallback: false
//     }
// }
//
// export async function getStaticProps(context){
//
//     // console.log('context ', context)
//     // console.log('-----------------------------------------')
//     const id = context.params.id
//
//     const res = await fetch(`https://420.canamaster.net/api/v1/products/${id}?fields%5Bprice%5D=1&fields%5Bpath%5D=1&fields%5Bicon%5D=1&fields%5Bimages%5D=1&fields%5BimageMain%5D=1&fields%5Bvideos%5D=1&fields%5BproductId%5D=1&fields%5Battributes%5D=1&fields%5Bdescriptions%5D=1&fields%5Boption%5D=1&fields%5BcurrentPrice%5D=1&fields%5Bbrands%5D=1&fields%5Bfilters%5D=1`)
//     const data = await res.json()
//
//     let newDAta = {
//         id: data.productId,
//         price: data.price,
//         name: data.descriptions[0].name,
//         image: `https://420.canamaster.net/media/image/d/350/${data.imageMain[0].image.url}`
//     }
//     return{
//         props:{
//             product: newDAta
//         }
//     }
// }


const product = ({product, review}) => {


    const [state, setState] = useState('')

    async function addReviewHandler() {
        const token = localStorage.getItem('token')
        const body = {
            "productId": product.id,
            "message": state,
            "userRate": 5
        }
        await postReqByToken(``, body, token)
    }

    return (
        <div>

            <div className="one-product-page">

                <div className="one-product">

                    <div className="left-side">

                        <div className="img">
                            <img src={product.image} alt=""/>
                        </div>

                        <div className="carusel-bar">

                            <div className="carusel-list">

                                <div className="carusel-img">
                                    <img className="" src="Projekt-next-tulkit/pages/products/[id]"/>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="right-side">
                        <div className="right-side__details-info">
                            <span className="sale-off"> Sale Off </span>
                            <h2 className="title">
                                {product.name}
                            </h2>
                            <div className="product-details-rating">
                                <div className="product-rate-cover">
                                    <div className="product-rating-cover">

                                    </div>
                                </div>
                                <span className="rating-reviews">
                     (32 reviews)
                </span>
                            </div>

                            <div className="product-prise-cover">
                    <span className="new-price">
                        ${product.price}
                    </span>
                                <span className="price-sale">
                        <span className="save-price">
                            26% Off
                        </span>
                        <span className="old-price">
                            ${+product.price + (product.price * 35/100)}
                        </span>
                    </span>
                            </div>

                            <div className="short-desc">
                                <p className="right-side__text">
                                    {product.description}
                                </p>
                            </div>

                            <div className="product-size">
                                <strong className="product-size-weight">
                                    Size / Weight:
                                </strong>
                                <div className="radio-list">
                                    <label className="r-1" name="r-1">50g
                                        <input className="r" type="radio" id="r-1" value="1"/>
                                    </label>
                                    <label className="r-2" name="r-2">60g
                                        <input className="r" type="radio" id="r-2" value="2"/>
                                    </label>
                                    <label className="r-3" name="r-3">80g
                                        <input className="r" type="radio" id="r-3" value="3" checked/>
                                    </label>
                                    <label className="r-4" name="r-4">100g
                                        <input className="r" type="radio" id="r-4" value="4"/>
                                    </label>
                                    <label className="r-5" name="r-5">150g
                                        <input className="r" type="radio" id="r-5" value="5"/>
                                    </label>
                                </div>
                            </div>

                            <div className="count-add">

                                <input className="quantity" type="number" min="1" value="1"/>

                                <div className="add-bar">

                                    <button className="add-btn">
                                        <svg className="svg" width="17" height="13" viewBox="0 0 25 25"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0)">
                                                <path
                                                    d="M24.4941 3.36652H4.73614L4.69414 3.01552C4.60819 2.28593 4.25753 1.61325 3.70863 1.12499C3.15974 0.636739 2.45077 0.366858 1.71614 0.366516L0.494141 0.366516V2.36652H1.71614C1.96107 2.36655 2.19748 2.45647 2.38051 2.61923C2.56355 2.78199 2.68048 3.00626 2.70914 3.24952L4.29414 16.7175C4.38009 17.4471 4.73076 18.1198 5.27965 18.608C5.82855 19.0963 6.53751 19.3662 7.27214 19.3665H20.4941V17.3665H7.27214C7.02705 17.3665 6.79052 17.2764 6.60747 17.1134C6.42441 16.9505 6.30757 16.7259 6.27914 16.4825L6.14814 15.3665H22.3301L24.4941 3.36652ZM20.6581 13.3665H5.91314L4.97214 5.36652H22.1011L20.6581 13.3665Z"
                                                    fill="#253D4E"/>
                                                <path
                                                    d="M7.49414 24.3665C8.59871 24.3665 9.49414 23.4711 9.49414 22.3665C9.49414 21.2619 8.59871 20.3665 7.49414 20.3665C6.38957 20.3665 5.49414 21.2619 5.49414 22.3665C5.49414 23.4711 6.38957 24.3665 7.49414 24.3665Z"
                                                    fill="#253D4E"/>
                                                <path
                                                    d="M17.4941 24.3665C18.5987 24.3665 19.4941 23.4711 19.4941 22.3665C19.4941 21.2619 18.5987 20.3665 17.4941 20.3665C16.3896 20.3665 15.4941 21.2619 15.4941 22.3665C15.4941 23.4711 16.3896 24.3665 17.4941 24.3665Z"
                                                    fill="#253D4E"/>
                                            </g>
                                        </svg>
                                        Add to cart
                                    </button>
                                    <button className="heart-btn">
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0)">
                                                <path
                                                    d="M18.2753 1.28351C17.1493 1.30102 16.0478 1.61536 15.0821 2.19478C14.1164 2.7742 13.3207 3.59818 12.7753 4.58351C12.23 3.59818 11.4343 2.7742 10.4686 2.19478C9.50289 1.61536 8.4014 1.30102 7.27535 1.28351C5.48029 1.3615 3.78905 2.14676 2.57113 3.46774C1.35321 4.78872 0.707598 6.53803 0.775349 8.33351C0.775349 15.1085 11.7313 22.9335 12.1973 23.2655L12.7753 23.6745L13.3533 23.2655C13.8193 22.9355 24.7753 15.1085 24.7753 8.33351C24.8431 6.53803 24.1975 4.78872 22.9796 3.46774C21.7616 2.14676 20.0704 1.3615 18.2753 1.28351ZM12.7753 21.2125C9.52235 18.7825 2.77535 12.8125 2.77535 8.33351C2.70699 7.06822 3.14172 5.82724 3.98471 4.88121C4.82771 3.93518 6.01058 3.36086 7.27535 3.28351C8.54012 3.36086 9.72299 3.93518 10.566 4.88121C11.409 5.82724 11.8437 7.06822 11.7753 8.33351H13.7753C13.707 7.06822 14.1417 5.82724 14.9847 4.88121C15.8277 3.93518 17.0106 3.36086 18.2753 3.28351C19.5401 3.36086 20.723 3.93518 21.566 4.88121C22.409 5.82724 22.8437 7.06822 22.7753 8.33351C22.7753 12.8145 16.0283 18.7825 12.7753 21.2125Z"
                                                    fill="#253D4E"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width="24" height="24" fill="white"
                                                          transform="translate(0.775391 0.366516)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </button>
                                    <button className="slaqner-btn">
                                        <img src="Projekt-next-tulkit/pages/products/[id]"/>
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className="right-side__footer">
                            <ul className="right-side__footer__left-side">
                                <li>
                                    Type:
                                    <span className="text-brand">Organic</span>
                                </li>
                                <li>
                                    MFG:
                                    <span className="text-brand">Jun 4.2022</span>
                                </li>
                                <li>
                                    LIFE:
                                    <span className="text-brand">70 days</span>
                                </li>
                            </ul>
                            <ul className="right-side__footer__right-side">
                                <li>
                                    SKU:
                                    <span className="text-brand">FWM15VKT</span>
                                </li>
                                <li>
                                    Tags:
                                    <span className="text-brand">Organic</span>
                                </li>
                                <li>
                                    Stock:
                                    <span className="text-brand">8 Items In Stock</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className='reviews'>
                    <h2>Reviews</h2>
                    <pre>
                    <code>
                        {JSON.stringify(review, null, 2)}
                    </code>
                </pre>
                    <input type="text" placeholder={'review'} value={state} onChange={(e) => {
                        setState(e.target.value)
                    }}/>
                    <Link href={'#'}>
                        <button type={"submit"} onClick={addReviewHandler}>add rewue</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default product;

// <Product
//                 key={product.id}
//                 price={product.price}
//                 image={product.image}
//                 name={product.name}
//             >
//                 <p className="description ">{product.name}</p>
//             </Product>