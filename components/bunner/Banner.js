import {Button} from "./Button";

export function Banner(props) {
    const {
        pic,
        description
    } = props

    // const pic1 = new URL("public/Images/banner-1.png", import.meta.url);

    return (
        <div className="banner">
            <div className="banner-img ">
                <img src={pic} alt="banner 1"/>
                <div className="banner__details">
                    <h4 className="banner__details__text">{description}</h4>
                    <Button className={"banner__btn"} children={'Shop Now '}/>
                </div>
            </div>
        </div>

    )
}