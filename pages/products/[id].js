import {getProductReq, getReviewReq} from "../../utils/request";
import Link from "next/link";
import {adapterForProduct} from "../../utils/adaptors";
import Product from "../../components/product/Product";
import Review from "../../components/product/Review";


export async function getServerSideProps({params}) {

    const resProduct = await getProductReq(params.id)
    const resReview = await getReviewReq(params.id)
    const product = resProduct.data
    const reviews = resReview.data

    const newData = adapterForProduct(product)

    return {
        props: {
            product: newData,
            reviews
        }
    }
}

// export async function getStaticPaths() {
//
//     const config1 = {
//         method: 'get',
//         url: `https://420.canamaster.net/api/v1/products/popular/1/50`,
//         headers: {"Accept-Encoding": "gzip,deflate,compress"}
//     };
//     const res = await myAxios(config1)
//     const data = res.data
//
//     const paths = data.products.map((elem) => {
//         return {
//             params: {id: elem.productId.toString()}
//         }
//     })
//     return {
//         paths,
//         fallback: true
//     }
// }
//
// export async function getStaticProps({params}) {
//
//
//     const config1 = {
//         method: 'get',
//         url: `https://420.canamaster.net/api/v1/products/${params.id}?fields%5Bprice%5D=1&fields%5Bpath%5D=1&fields%5Bicon%5D=1&fields%5Bimages%5D=1&fields%5BimageMain%5D=1&fields%5Bvideos%5D=1&fields%5BproductId%5D=1&fields%5Battributes%5D=1&fields%5Bdescriptions%5D=1&fields%5Boption%5D=1&fields%5BcurrentPrice%5D=1&fields%5Bbrands%5D=1&fields%5Bfilters%5D=1`,
//         headers: {"Accept-Encoding": "gzip,deflate,compress"}
//     };
//     const res = await myAxios(config1)
//     const data = res.data
//     const body = {
//         "productId": params.id
//     }
//     const config2 = {
//         method: 'post',
//         url: `https://420.canamaster.net/customer/review/listU?fields%5Bmessage%5D=1&fields%5Breply%5D=1`,
//         data: body
//     };
//     const res2 = await myAxios(config2)
//     const review = res2.data
//
//     const newData = {
//         description: data.descriptions[0].description,
//         id: data.productId,
//         price: data.price,
//         name: data.descriptions[0].name,
//         image: `https://420.canamaster.net/media/image/d/350/${data?.imageMain[0]?.image?.url}`
//     }
//
//     return {
//         props: {
//             product: newData,
//             review
//         }
//     }
// }


const product = ({product, reviews}) => {


    return (
        <div className="one-product-page">
            <Product product={product}/>
            <Review reviews={reviews} product={product}/>
        </div>
    );
};

export default product;

