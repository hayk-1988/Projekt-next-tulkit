const defaultImg = 'https://420.canamaster.net/images/04.png'
const url = `https://420.canamaster.net/media/image/d/350/`

export function cartProductAdapter(products){
    let data = products.map(prod => {
        return {
            name: prod.product.descriptions[0].name,
            id: prod.product.productId,
            price: prod.product.price,
            image: prod.product?.imageMain[0]?.image?.url ? `${url}${prod.product?.imageMain[0]?.image?.url}` : defaultImg,
            quantity: prod.quantity,
            cartId: [prod.cartId],
            product: prod.product,
        }
    })
    let obj = data.reduce((p, c) => {
        if (p[c.id]) {
            p[c.id] = {
                ...c,
                quantity: ++p[c.id].quantity,
                cartId: [...p[c.id].cartId, ...c.cartId]
            }
        } else {
            p[c.id] = {
                ...c,
            }
        }
        return p
    }, {})
    return  Object.values(obj) || []

}



export function productAdapter(data){
    return  data?.products?.map(prod => {
        return {
            id: prod.productId,
            price: prod.price,
            name: prod.descriptions[0].name,
            image: prod?.imageMain[0]?.image?.url ? `${url}${prod?.imageMain[0]?.image?.url}` : defaultImg
        }
    })
}