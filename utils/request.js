

export async function getFilter(uri, reqOption){
    const req = await fetch(uri, reqOption)
    return req.json()
}
export async function postReq(uri, body){

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const b = JSON.stringify(body)
    let response = await fetch(uri, {
        method: "POST",
        headers: myHeaders,
        body: b
    });
    return  await response.json()

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

    const req = await fetch(uri, reqOption)
    return req.json()
}
export async function getByTokenReq(uri, token){

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const req = await fetch(uri, requestOptions)
    return req.json()
}


export async function deleteReq(uri){
    let myHeaders = new Headers();
    myHeaders.append("Cookie", "session=s%3AREEWyfuFkse0zUkMDA1Z8NK1T8J60EFJ.MLYB28t44%2Fr%2FLeBFmif1p7FOhlUhZukLPI4iZzjJGUU");
    let requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    const req = await fetch(uri, requestOptions)
    return req.json()
}