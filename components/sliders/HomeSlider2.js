import {SliderProduct} from "./SliderProduct";
import {useRef, useState} from "react";
import s from './Sliders.module.css'
import {motion} from "framer-motion";
import {forwardRef} from "react";

// eslint-disable-next-line react/display-name
export const HomeSlider2 = forwardRef((props, ref) => {


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
            imgFront={'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-1.jpg'}/>,
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

    const prodRef = useRef()

    return (
        <div ref={ref}>
            <h1 className={s['timer-product__header']}>Daily Best Sells</h1>
            <div className={s['home-slider-2']} ref={prodRef}>
                <div className={s['home-slider-2__side-banner']}>
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-4.png" alt="banner-4"/>
                </div>

                <div className={s['home-slider-2__slide']}>

                    <div className={s['home-slider-2__slide-visible']}>
                        <button className={`${s['btn-slider']} ${s['btn--left']}`} onClick={(e) => {
                            let k = prods.shift()
                            setProds([
                                ...prods,
                                k
                            ])
                        }}>
                            {'<'}
                        </button>
                        <div className={s['inner-slider']}>
                            {prods}
                        </div>
                        <button className={`${s['btn-slider']} ${s['btn--right']}`}  onClick={(e) => {
                            let k = prods.pop()
                            setProds([
                                k,
                                ...prods
                            ])
                        }}>
                            {'>'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
})
export const MHomeSlider2 = motion(HomeSlider2)