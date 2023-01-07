import s from './DownBanner.module.scss'

export function DownBanner() {
    return(
        <div className={s['down-banner']}>
            <div className={s.subscribe}>
                <label>
                    <input className={s['home-slider__input']} type="email" placeholder="Your email address"/>
                </label>
                <button className={s['slider-btn']}>Subscribe</button>
            </div>
            <div className={s['page-1__content']}>
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-10.png" alt="slider 1"/>
                    <img className={s['down-banner__img-2']} src='https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-9.png' alt="slider 1"/>
                        <div className={s['slider-content']}>
                            <h1 className={s['display-1-text-1']}>
                                Don’t miss amazing<br/>
                                grocery deals
                            </h1>
                            <p className={s['display-1-text-2']}>
                                Sign up for the daily newsletter
                            </p>
                        </div>
            </div>
        </div>

)
}