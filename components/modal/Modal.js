import React, {memo} from 'react';
import s from './Modal.module.css'
import TimerProduct from "../timer-product/TimerProduct";
export default memo(function Modal({active, setActive}) {

    return (
        <div className={!active ? s['modal'] : `${s['modal']} ${s['active']}`} onClick={() => {
            setActive(false)
        }}>
            <div className={!active ? s['modal__content'] : `${s['modal__content']} ${s['active']}`} onClick={(e)=>{
                e.stopPropagation()
            }}>
                <TimerProduct key={Math.random() + 'fidc12' + Date.now()}
                              deadLine={"2023-01-11"} price={'$39.75'} oldPrice={'$40.60'}
                              img={'https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-6.png'}/>
            </div>
        </div>
    );
});
