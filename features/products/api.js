import {productAdapter} from "../../utils/adaptors";
import axios from "axios";


export async function getProductsReq(){
    const config = {
        method: 'get',
        url: `https://420.canamaster.net/api/v1/products/popular/1/10`
    };
    const data = await axios(config)
    return productAdapter(data.data)
}