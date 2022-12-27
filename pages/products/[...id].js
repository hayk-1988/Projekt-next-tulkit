import {Product} from "../../components/populiar-product/Product";
import Link from "next/link";
import {productAdapter} from "../../utils/adaptors";
import {myAxios} from "../../utils/request";

export async function getServerSideProps(context) {
    const [offset= 1, limit] = context.params.id

    //todo pagination dzel vor 0 cheta
    const config = {
        method: 'get',
        url: `https://420.canamaster.net/api/v1/products/popular/${offset}/${limit}`,
        headers:{"Accept-Encoding": "gzip,deflate,compress"}
    };
    const data = await myAxios(config)
    const res = data.data
    return {
        props: {
            data: res,
            page: offset,
            limit
        }
    }
}

const pagination = ({data, page, limit}) => {
    console.log(data)
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
                                key={prod.id + Date.now() +'g'}
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
                {+page === +pages ? <button className={'products-page__pagination'}>{pages - 1}</button> : undefined}

                <button className={'products-page__pagination-midle'}>{page}</button>

                {+page === 1 ? <button className={'products-page__pagination'}>{2}</button> : undefined}
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

export default pagination;