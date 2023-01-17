import {Product} from "../../components/populiar-product/Product";
import Link from "next/link";
import {productAdapter} from "../../utils/adaptors";
import {getProductsReq} from "../../utils/request";

export async function getServerSideProps(context) {
    const [offset = 1, limit] = context.params.id

    //todo pagination dzel vor 0 cheta

    const data = await getProductsReq(offset, limit)
    const res = data.data
    return {
        props: {
            data: res,
            page: offset,
            limit
        }
    }
}

const Pagination = ({data, page, limit}) => {

    function scrollSmooth() {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    const pages = Math.floor(data.count / +limit)
    const prods = productAdapter(data)


    function handleDecrement() {
        if (page > 1) {
            scrollSmooth()
        }
    }

    function handleIncrement() {
        if (page < pages) {
            scrollSmooth()
        }
    }


    return (
        <>
            <h1 className="timer-product__header">Popular Products</h1>
            <div className='products'>
                {
                    prods?.map(prod => {
                        return (
                            <Product
                                key={prod.id + Date.now() + 'g'}
                                name={prod.name}
                                image={prod.image}
                                price={prod.price}
                                id={prod.id}
                            >
                                <Link href={`/products/${prod.id}`}>
                                    <p className="description ">{prod.name}</p>
                                </Link>
                            </Product>
                        )
                    })
                }
            </div>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>

                <button className={'product-card__add-btn'} onClick={handleDecrement}>{'<<<'}</button>

                <Link href={`/products/${page === 1 ? 1 : +page - 1}/10`}>
                    <button className={'product-card__add-btn'} onClick={handleDecrement}>{'<'}</button>
                </Link>


                {+page === 1 ? undefined : <Link href={`/products/1/${limit}`}>
                    <button onClick={scrollSmooth} className={'products-page__pagination'}>{1}</button>
                </Link>}

                {+page === +pages ? <Link href={`/products/${pages - 1}/${limit}`}>
                        <button className={'products-page__pagination'}>{pages - 1}</button>
                    </Link>
                    : undefined}


                <button className={'products-page__pagination-midle'}>{page}</button>

                {+page === 1 ? <Link href={`/products/${2}/${limit}`}>
                        <button className={'products-page__pagination'}>{2}</button>
                    </Link>
                    : undefined}
                {+page === +pages ? undefined : <Link href={`/products/${pages}/${limit}`}>
                    <button onClick={scrollSmooth} className={'products-page__pagination'}>{pages}</button>
                </Link>}


                <Link href={`/products/${+page === +pages ? pages : +page + 1}/10`}>
                    <button className={'product-card__add-btn'} onClick={handleIncrement}>{'>'}</button>
                </Link>

                <button className={'product-card__add-btn'} onClick={handleIncrement}>{'>>>'}</button>

            </div>
        </>
    )
}

export default Pagination;