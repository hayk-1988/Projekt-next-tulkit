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

export function adapterForProduct(data){
    return {
        description: data?.descriptions[0]?.description,
        id: data?.productId,
        price: data?.price,
        name: data?.descriptions[0]?.name,
        image: `https://420.canamaster.net/media/image/d/350/${data?.imageMain[0]?.image?.url}`
    }
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

export function orderProdAdapter(orders){

    return orders.map(order => {
        const quantity = order?.sales?.reduce((p, c) => {
            p += c.quantity
            return p
        }, 0)
        const total = order?.sales?.reduce((p, c) => {
            p += c.quantity * c.product.price
            return p
        }, 0)
        return {
            id: order.Id,
            date: order.date,
            status: order.pay.status,
            total: total,
            quantity: quantity
        }
    })
}