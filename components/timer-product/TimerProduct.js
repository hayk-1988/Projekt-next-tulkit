import {PriceBar} from "../populiar-product/PriceBar";
import {Button} from "../populiar-product/Button";
import {RatingStars} from "../populiar-product/RatingStars";
import {memo, useState} from "react";
import {CartSVG} from "../svg/CartSVG";
import productStyle from '../populiar-product/Products.module.css'
import timerProdStyle from './TimerProd.module.css'
export default memo(function TimerProduct({img, price, oldPrice, deadLine}) {

    const [time, setTime] = useState({
        d: '00',
        h: '00',
        m: '00',
        s: '00'
    })

    let timer = setTimeout(() => {
        let t = Date.parse(deadLine) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 / 60 / 60) % 24),
            days = Math.floor((t / 1000 / 60 / 60 / 24));
        setTime({
            d: days,
            h: hours,
            m: minutes,
            s: seconds
        })
        if (t <= 0) {
            setTime({
                d: '00',
                h: '00',
                m: '00',
                s: '00'
            })
            clearInterval(timer);
        }
    }, 1000)


    return (
        <div className={timerProdStyle['timer-products__img']}>
            <div className={timerProdStyle['timer']}>
                <div key={Math.random() + 'fidc121' + Date.now()}
                     className={timerProdStyle['timer-time']}><span className="time"></span>{time.d}<p>Days</p></div>
                <div key={Math.random() + 'fidc122' + Date.now()}
                     className={timerProdStyle['timer-time']}><span className="time"></span>{time.h}<p>Hours</p></div>
                <div key={Math.random() + 'fidc123' + Date.now()}
                     className={timerProdStyle['timer-time']}><span className="time"></span>{time.m}<p>Mins</p></div>
                <div key={Math.random() + 'fidc124' + Date.now()}
                     className={timerProdStyle['timer-time']}><span className="time"></span>{time.s}<p>Sec</p></div>
            </div>
            <img src={img} alt="banner"/>
            <footer>
                <div className={productStyle['product-description']}>
                    <p className={productStyle['description']}>Seeds of Change Organic Quinoa, Brown</p>
                    <div className={productStyle['rating-bar']}>
                        <RatingStars/>

                        <span className={productStyle['rating-reviews']}>
                                   (4.0)
                        </span>
                    </div>
                    <p className={productStyle['product-card__manufacturer-bar']}>By
                        <a className={productStyle['manufacturer']}
                           href="1-Project/day-12-Reactov-shoppi-ejery/src/timer-product/TimerProduct#">NestFood</a></p>
                    <div className={productStyle['trade-bar']}>
                        <PriceBar price={price} oldPrice={oldPrice}/>
                        <Button className={productStyle['product-card__add-btn']}
                                text={'Add'}
                                svg={<CartSVG/>}/>
                    </div>

                </div>
            </footer>
        </div>

    )
})