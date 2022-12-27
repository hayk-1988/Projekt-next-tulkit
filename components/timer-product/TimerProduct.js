import {PriceBar} from "../populiar-product/PriceBar";
import {Button} from "../populiar-product/Button";
import {RatingStars} from "../populiar-product/RatingStars";
import {memo, useState} from "react";


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
        if (t <= 0){
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
        <div className="timer-products__img">
            <div className="timer">
                <div key={Math.random() + 'fidc121' + Date.now()}
                     className="timer-time"><span className="time"></span>{time.d}<p>Days</p></div>
                <div key={Math.random() + 'fidc122' + Date.now()}
                     className="timer-time"><span className="time"></span>{time.h}<p>Hours</p></div>
                <div key={Math.random() + 'fidc123' + Date.now()}
                     className="timer-time"><span className="time"></span>{time.m}<p>Mins</p></div>
                <div key={Math.random() + 'fidc124' + Date.now()}
                     className="timer-time"><span className="time"></span>{time.s}<p>Sec</p></div>
            </div>
            <img src={img} alt="banner"/>
            <footer>
                <div className="product-description">
                    <p className="description ">Seeds of Change Organic Quinoa, Brown</p>
                    <div className="rating-bar">
                        <RatingStars/>

                        <span className="rating-reviews">
                                   (4.0)
                        </span>
                    </div>
                    <p className="product-card__manufacturer-bar">By <a className="manufacturer"
                                                                        href="1-Project/day-12-Reactov-shoppi-ejery/src/timer-product/TimerProduct#">NestFood</a></p>
                    <div className="trade-bar">
                        <PriceBar price={price} oldPrice={oldPrice}/>
                        <Button className={"product-card__add-btn"}
                                text={'Add'}
                                svg={<svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M24.4941 3.36652H4.73614L4.69414 3.01552C4.60819 2.28593 4.25753 1.61325 3.70863 1.12499C3.15974 0.636739 2.45077 0.366858 1.71614 0.366516L0.494141 0.366516V2.36652H1.71614C1.96107 2.36655 2.19748 2.45647 2.38051 2.61923C2.56355 2.78199 2.68048 3.00626 2.70914 3.24952L4.29414 16.7175C4.38009 17.4471 4.73076 18.1198 5.27965 18.608C5.82855 19.0963 6.53751 19.3662 7.27214 19.3665H20.4941V17.3665H7.27214C7.02705 17.3665 6.79052 17.2764 6.60747 17.1134C6.42441 16.9505 6.30757 16.7259 6.27914 16.4825L6.14814 15.3665H22.3301L24.4941 3.36652ZM20.6581 13.3665H5.91314L4.97214 5.36652H22.1011L20.6581 13.3665Z"
                                        fill="#253D4E"/>
                                    <path
                                        d="M7.49414 24.3665C8.59871 24.3665 9.49414 23.4711 9.49414 22.3665C9.49414 21.2619 8.59871 20.3665 7.49414 20.3665C6.38957 20.3665 5.49414 21.2619 5.49414 22.3665C5.49414 23.4711 6.38957 24.3665 7.49414 24.3665Z"
                                        fill="#253D4E"/>
                                    <path
                                        d="M17.4941 24.3665C18.5987 24.3665 19.4941 23.4711 19.4941 22.3665C19.4941 21.2619 18.5987 20.3665 17.4941 20.3665C16.3896 20.3665 15.4941 21.2619 15.4941 22.3665C15.4941 23.4711 16.3896 24.3665 17.4941 24.3665Z"
                                        fill="#253D4E"/>
                                </svg>}/>

                    </div>

                </div>
            </footer>
        </div>

    )
})