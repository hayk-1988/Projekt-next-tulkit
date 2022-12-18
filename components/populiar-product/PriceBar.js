


export function PriceBar({price, oldPrice}){

    return(
        <div className="price-bar">
            <p className="new-price">
                {price}
            </p>
            <p className="old-price">
                {oldPrice}
            </p>
        </div>

    )
}