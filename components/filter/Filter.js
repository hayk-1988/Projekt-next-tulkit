import {useState} from "react";


export function Filter() {

    const [from, setFrom] = useState(10)
    const [to, setTo] = useState(20)

    return (
        <div className="range-slider">
            <input className="min" name="range_1" type="range" min="0" max="1500" value={from}
                   onChange={(e) => {
                       let v = +e.target.value
                       if (v >= to){
                           return
                       }
                       setFrom(v)
                   }}
            />
            <input className="max" name="range_1" type="range" min="0" max="1500" value={to}
                   onChange={(e) => {
                       let v = +e.target.value
                       if (v <= from){
                           return
                       }
                       setTo(v)

                   }}
            />

            <span>from: {from}</span>
            <span className="range_max light right">to: {to}</span>
        </div>
    )
}