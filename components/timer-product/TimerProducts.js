import TimerProduct from "./TimerProduct";
import {memo} from 'react'

export default function  TimerProducts(){



    console.log('TimerProducts-i mej')


    return(
            <div className="timer-products">
                <TimerProduct deadLine={"2023-01-01"}  price={'$32.55'} oldPrice={'$45.50'} img={'https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-5.png'}/>
                <TimerProduct deadLine={"2022-01-17"}  price={'$39.75'} oldPrice={'$40.60'} img={'https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-6.png'}/>
                <TimerProduct deadLine={"2022-11-01"}  price={'$40.45'} oldPrice={'$41.70'} img={'https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-7.png'}/>
                <TimerProduct deadLine={"2022-01-01"}  price={'$35.45'} oldPrice={'$55.50'} img={'https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-8.png'}/>
            </div>
        )
}