import React, {useEffect, useState} from "react";
import {Checkbox} from "./Checkbox";
import {LogHeader} from "./LogHeader";
import {useRouter} from "next/router";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {setEmail as setE} from "../../features/user/userSlice";
// import {useLocation, useNavigate} from "react-router-dom";
// import {useAuth} from "../hook/useAuth";


export function Login() {
    let router = useRouter()

    const [response, setResponse] = useState({})
    const [email, setEmail] = useState('')
    const [secCod, setSecCod] = useState('')
    const [isChecked, setChecked] = useState({
        checked: true
    })
    const [err, setErr] = useState({
        display: 'hide',
        text: ''
    })
    const [wrongInput, setWrongInput] = useState({
        clasName: 'input-border'
    })


    const dispatch = useDispatch()
    const e = useSelector((state) => state.user)
    useEffect(()=>{
        dispatch(setE(email))
    }, [email])


    function handlerEmail(e) {
        setEmail(e.target.value)
    }

    function handlerPassword(e) {
        setPassword(e.target.value)
        if (e.target.value.length > 5) {
            setWrongInput({
                clasName: ''
            })
        } else {
            setWrongInput({
                clasName: 'input-border'
            })
        }

    }

    function handlerSecCode(e) {
        setSecCod(e.target.value)
    }

    async function logFetch(uri) {
        const res = await fetch(uri)
        const body = await res.json()

        return {body, status: res.status, msg: user.statusText}
    }


    const [password, setPassword] = useState('')
    let data = {
        'email': email,
        'password': password,
    }
    let user = {
        'email': email,
        'password': password
    }

    async function handleSubmit() {

        if (!password) {
            console.log('ches tenum sxal es krknel gaxtnabary 👻')

            setErr({
                display: 'show',
                text: 'gaxtnabaryi dashty lracrats chi🙀'
            })
        } else if (secCod !== '784756') {
            setErr({
                display: 'show',
                text: 'wrong security cod'
            })
        } else {
            setErr({
                display: 'hide',
                text: ''
            })
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            let raw = JSON.stringify(user);
            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
            };
            fetch("https://420.canamaster.net/customer/auth/signin", requestOptions)
                .then(response => response.json())
                .then(result => {
                    localStorage.setItem('token', result.token)
                    setResponse(result)
                })
                .catch(error => console.log('error', error))
                .then(() => {
                    router.push('/')
                });
        }

    }

    function f() {
        console.log(response)
    }

    return (
        <div>
            <div className='registration-page'>
                <div className="login-img">
                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/page/login-1.png' alt=""/>
                </div>
                <div className="test-login">
                    <LogHeader/>
                    <input type="email" placeholder='Username or Email' value={email} onChange={handlerEmail}/>
                    <input id={wrongInput.clasName} type="password" placeholder='Your password' value={password}
                           onChange={handlerPassword}/>
                    <div className="security-bar">
                        <input type="text" placeholder='Security Code' value={secCod} onChange={handlerSecCode}/>
                        <div className="security-cod">{784756}</div>
                    </div>
                    <Checkbox setChecked={setChecked} text={'Remember me'}/>
                    <div className={`show-problems ${err.display}`}>
                        {err.text}
                    </div>
                    <button className='login-btn' onClick={handleSubmit}>Log in</button>
                    <Link href="/login/forgot-password">Forgot password</Link>
                </div>
            </div>
        </div>
    );
}