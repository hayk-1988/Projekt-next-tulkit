import {Banner} from './Banner'
import s from './Banner.module.css'
import {motion} from "framer-motion";
import {forwardRef} from "react";

export const Banners =  forwardRef((props, ref) => {


    return (

        <div ref={ref} className={s.banners}>
            <Banner description={`Everyday Fresh & Clean with Our Products`}
                    pic={'https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-1.png'}/>
            <Banner description={"Make your Breakfast Healthy and Easy"}
                    pic={'https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-2.png'}/>
            <Banner description={`The best Organic Products Online`}
                    pic={'https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-3.png'}/>
        </div>

    )
}
)

Banners.displayName = 'Banners'
export const MBanners = motion(Banners)