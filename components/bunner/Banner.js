import {Button} from "./Button";
import s from './Banner.module.css'
export function Banner(props) {
    const {
        pic,
        description
    } = props

    return (
        <div className={s.banner}>
            <div className={`${s['banner-img'] }`}>
                <img src={pic} alt="banner 1"/>
                <div className={s.banner__details}>
                    <h4 className={s.banner__details__text}>{description}</h4>
                    <Button className={s.banner__btn} buttonDescription={'Shop Now '}/>
                </div>
            </div>
        </div>

    )
}