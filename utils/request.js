import axios from "axios";


export async function myAxios(config){
    return await axios(config)
}



export async function postReqByToken(uri, body, token){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`)

    const b = JSON.stringify(body)
    let response = await fetch(uri, {
        method: "POST",
        headers: myHeaders,
        body: b
    });
    return  await response.json()

}


export async function getReq(uri, reqOption){
    const res = await axios.get(uri, {headers: { "Accept-Encoding": "gzip,deflate,compress" }})
    return res.data
}
