import axios from "axios";


export async function getFilterCategoriesReq(){
    const config = {
        method: 'get',
        url: 'https://420.canamaster.net/api/v1/products/shop/categories/0/23',
    };
    return await axios(config).data;
}

export async function getFilterProductsReq(categoryId, page, limit, minMax){

    const config = {
        method: 'get',
        url: `https://420.canamaster.net/api/v1/products/category/new/${categoryId}/${page}/${limit}?filterIds=[]&&attributeIds=[]&&productIds=[]&&parentCategoryId=23&&priceMinMax=[${minMax}]&&brandIds=[]`,
    };
    return  await axios(config).data
}