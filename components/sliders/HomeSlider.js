import s from './Sliders.module.css'

export function HomeSlider({chek, radio2, xClas}) {

    return(
        <section className={s['home-slider']}>
            <div>
                <div className={s['subscribe']}>
                        <input className={s['home-slider__input']} type="email"
                               placeholder="Your email address"/>
                    <button className={s['slider-btn']}>Subscribe</button>
                </div>

                <div className={`${s['page-1']} ${s[`${xClas[0]}`]}`}>
                    <div className={s['page-1__content']}>
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-2.png' alt="slider 1"/>
                            <div className={s['slider-content']}>
                                <h1 className={s['display-1-text-1']}>
                                    Don’t miss amazing<br/>
                                    grocery deals
                                </h1>
                                <p className={s['display-1-text-2']}>
                                    Sign up for the daily newsletter
                                </p>
                            </div>
                            <div className={s['radio']}>
                                <input className={s['radio-3']} type="radio" name="slider1" defaultChecked={true} />
                                    <input className={s['radio-4']} type="radio" name="slider"  onChange={(e) => {
                                        radio2({
                                            isChek: e.target.checked
                                        })
                                    }}/>
                            </div>
                    </div>

                </div>
                <div className={`${s['page-2']} ${s[`${xClas[1]}`]}`}>
                    <div className={s['page-1__content']}>
                        <img src={'https://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-1.png'} alt="slider 1"/>

                            <div className={s['slider-content']}>
                                <h1 className={s['display-1-text-1']}>
                                    Fresh Vegetables<br/>
                                    Big discount
                                </h1>
                                <p className={s['display-1-text-2']}>
                                    Save up to 50% off on your first order
                                </p>
                            </div>
                            <div className={s['radio']}>
                                <input className={s['radio-1']} type="radio" name="slider" defaultChecked={false} onChange={(e) => {
                                    radio2({
                                        isChek: e.target.checked
                                    })
                                }}/>
                                    <input className={s['radio-2']} type="radio" name="slider" checked={chek} onChange={(e) => {}}/>
                            </div>
                    </div>
                </div>

            </div>


        </section>

)
}