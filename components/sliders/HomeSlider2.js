import {SliderProduct} from "./SliderProduct";
import {useState} from "react";


// let sliderData = [
//     {
//         price: '$28.54',
//         oldPrice: '$35.40'
//
//     }
// ]

console.log('home slider')

export function HomeSlider2() {


    const [prods, setProds] = useState([
        <SliderProduct
            key={Math.random() + 'fidc1' + Date.now()}
            price={`$28.54`}
            oldPrice={'$35.40'}
            imgBack={'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-2.jpg'}
            imgFront={'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg'}/>,

        <SliderProduct
            key={Math.random() + 'fidc2' + Date.now()}
            price={`$30.54`}
            oldPrice={'$37.40'}
            imgBack={'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg'}
            imgFront={'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg'}/>,

        <SliderProduct
            key={Math.random() + 'fidc3' + Date.now()}
            price={`45.54`}
            oldPrice={'57.40'}
            imgBack={'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-2.jpg'}
            imgFront={'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg'}/>,

        <SliderProduct
            key={Math.random() + 'fidc4' + Date.now()}
            price={`39.54`}
            oldPrice={'51.40'}
            imgBack={'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg'}
            imgFront={'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg'}/>,

        <SliderProduct
            key={Math.random() + 'fidc5' + Date.now()}
            price={`39.54`}
            oldPrice={'51.40'}
            imgBack={'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-2.jpg'}
            imgFront={'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-1.jpg'}/>

    ])


    return (
        <>
            <h1 className="timer-product__header">Daily Best Sells</h1>
            <div className="home-slider-2">
                <div className="home-slider-2__side-banner">
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-4.png" alt="banner-4"/>
                </div>

                <div className="home-slider-2__slide">

                    <div className="home-slider-2__slide-visible">
                        <div className="btn-slider btn--left" onClick={(e) => {
                            let k = prods.shift()
                            setProds([
                                ...prods,
                                k
                            ])
                        }}></div>

                        <div className="inner-slider">
                            {prods}
                        </div>

                        <div className="btn-slider btn--right" onClick={(e) => {
                            let k = prods.pop()
                            setProds([
                                k,
                                ...prods
                            ])
                        }}></div>
                    </div>


                </div>
            </div>
        </>
    )
}