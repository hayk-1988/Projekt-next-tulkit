export function HomeSlider({chek, radio2, xClas}) {


    console.log('slideri ej')

    return(
        <section className="home-slider">
            <div className="slider2">
                <div className="subscribe">
                        <input className="home-slider__input" type="email"
                               placeholder="Your email address"/>
                    <button className="slider-btn">Subscribe</button>
                </div>

                <div className={`page-1 ${xClas[0]}`}>
                    <div className="page-1__content">
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-2.png' alt="slider 1"/>
                            <div className="slider-content">
                                <h1 className="display-1-text-1">
                                    Don’t miss amazing<br/>
                                    grocery deals
                                </h1>
                                <p className="display-1-text-2">
                                    Sign up for the daily newsletter
                                </p>
                            </div>
                            <div className="radio">
                                <input className="radio-3" type="radio" name="slider1" defaultChecked={true} />
                                    <input className="radio-4" type="radio" name="slider"  onChange={(e) => {
                                        radio2({
                                            isChek: e.target.checked
                                        })
                                    }}/>
                            </div>
                    </div>

                </div>
                <div className={`page-2 ${xClas[1]}`}>
                    <div className="page-1__content">
                        <img src={'https://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-1.png'} alt="slider 1"/>

                            <div className="slider-content">
                                <h1 className="display-1-text-1">
                                    Fresh Vegetables<br/>
                                    Big discount
                                </h1>
                                <p className="display-1-text-2">
                                    Save up to 50% off on your first order
                                </p>
                            </div>
                            <div className="radio">
                                <input className="radio-1" type="radio" name="slider" defaultChecked={false} onChange={(e) => {
                                    radio2({
                                        isChek: e.target.checked
                                    })
                                }}/>
                                    <input className="radio-2" type="radio" name="slider" checked={chek} onChange={(e) => {}}/>
                            </div>
                    </div>
                </div>

            </div>


        </section>

)
}