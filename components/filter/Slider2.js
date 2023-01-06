import React, {useState} from "react";
import s from './slider2.module.css'

// {`${styles["product__general-info"]} ${styles["general-info-1"]}`}
const Slider2 = ({minVal,maxVal,setMaxVal, setMinVal, minMax}) => {


    const [className, setClassName] = useState(["thumb thumb--zindex-3", "thumb thumb--zindex-4"])


    return (
        <>
           <div className={s.slider}>
               <div>
                   <span>{minVal}</span>
               </div>
               <div>
                   <input
                       type="range"
                       min={minMax?.min}
                       max={minMax?.max}
                       value={minVal}
                       className={`${s[`${className[0]}`]} ${s.thumb}`}
                       onChange={(event) => {
                           const value = Math.min(+event.target.value, maxVal - 1);
                           setMinVal(value);
                           // event.target.value = value.toString();
                           setClassName(["thumb--zindex-4", "thumb--zindex-3"])
                       }}

                   />
                   <input
                       type="range"
                       min={minMax?.min}
                       max={minMax?.max}
                       value={maxVal}
                       className={`${s[className[1]]} ${s.thumb}`}
                       onChange={(event) => {
                           const value = Math.max(+event.target.value, minVal + 1);
                           setMaxVal(value);
                           // event.target.value = value.toString();
                           setClassName(["thumb--zindex-3", "thumb--zindex-4"])
                       }}
                   />
                   <div className={`${s["slider2"]}`}>
                       <div className={`${s["slider__track"]}`}/>
                       <div className={`${s["slider__range"]}`}/>
                   </div>
               </div>

               <div>
                   <p>{maxVal}</p>
               </div>
           </div>
        </>
    );
};

export default Slider2;