import TimerProduct from "./TimerProduct";
import {memo} from 'react'

export default function TimerProducts() {



    return (
        <div className="timer-products">
            <TimerProduct key={Math.random() + 'fidc11' + Date.now()}
                          deadLine={"2023-01-01"} price={'$32.55'} oldPrice={'$45.50'}
                          img={'https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-5.png'}/>
            <TimerProduct key={Math.random() + 'fidc12' + Date.now()}
                          deadLine={"2023-01-11"} price={'$39.75'} oldPrice={'$40.60'}
                          img={'https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-6.png'}/>
            <TimerProduct key={Math.random() + 'fidc13' + Date.now()}
                          deadLine={"2023-11-01"} price={'$40.45'} oldPrice={'$41.70'}
                          img={'https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-7.png'}/>
            <TimerProduct key={Math.random() + 'fidc14' + Date.now()}
                          deadLine={"2022-01-01"} price={'$35.45'} oldPrice={'$55.50'}
                          img={'https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-8.png'}/>
        </div>
    )
}