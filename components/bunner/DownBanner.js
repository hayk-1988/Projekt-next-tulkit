

export function DownBanner() {

    // const pic1 = new URL("Images/banner-10.png", import.meta.url);
    // const pic2 = new URL("Images/banner-9.png", import.meta.url);

    return(

        <div className="down-banner">
            <div className="subscribe">
                <label>
                    <input className="home-slider__input" type="email" placeholder="Your email address"/>
                </label>
                <button className="slider-btn">Subscribe</button>
            </div>
            <div className="page-1__content">
                <img src='Images/banner-10.png' alt="slider 1"/>
                    <img className="down-banner__img-2" src="Images/banner-9.png" alt="slider 1"/>
                        <div className="slider-content">
                            <h1 className="display-1-text-1">
                                Don’t miss amazing<br/>
                                grocery deals
                            </h1>
                            <p className="display-1-text-2">
                                Sign up for the daily newsletter
                            </p>
                        </div>
            </div>
        </div>

)
}