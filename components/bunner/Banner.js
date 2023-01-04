import {Button} from "./Button";

export function Banner(props) {
    const {
        pic,
        description
    } = props

    return (
        <div className="banner">
            <div className="banner-img ">
                <img src={pic} alt="banner 1"/>
                <div className="banner__details">
                    <h4 className="banner__details__text">{description}</h4>
                    <Button className={"banner__btn"} buttonDescription={'Shop Now '}/>
                </div>
            </div>
        </div>

    )
}