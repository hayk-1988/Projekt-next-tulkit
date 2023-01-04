import {useDispatch, useSelector} from "react-redux";
import {setEmail as setE} from "../../features/user/userSlice";
import {LogHeader} from "./LogHeader";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";
import Logout from "./logout";
import {loginReq} from "../../utils/request";


export function Login() {
    const dispatch = useDispatch()
    const router = useRouter()

    const [token, setToken] = useState('')
    const [email, setEmail] = useState('')
    const [secCod, setSecCod] = useState('')
    const [err, setErr] = useState({
        display: 'hide',
        text: ''
    })
    const [wrongInput, setWrongInput] = useState({
        clasName: 'input-border'
    })
    const [password, setPassword] = useState('')


    const user = {
        'email': email,
        'password': password
    }
    useEffect(() => {
        dispatch(setE(email))
        const token = localStorage.getItem('token')
        setToken(token)
    }, [email])

    function handlerEmail(e) {
        setEmail(e.target.value)
        setErr({
            display: 'hide',
            text: ''
        })

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
        setErr({
            display: 'hide',
            text: ''
        })

    }

    function handlerSecCode(e) {
        setSecCod(e.target.value)

    }


    async function handleSubmit() {
        if (!password || !email || !secCod) {
            setErr({
                display: 'show',
                text: 'please fill in all fields'
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
            await loginReq(user, setErr, router)
        }

    }

    function logoutHandler() {
        localStorage.removeItem('token')
        setToken('')
    }

    return (
        <div>
            {token === 'undefined' ? <h1 onClick={logoutHandler}>aoutorizatia anci balbes</h1> :
                token ? <Logout logoutHandler={logoutHandler}/> : <div className='registration-page'>
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
                        <div className={`show-problems ${err.display}`}>
                            {err.text}
                        </div>
                        <button className='login-btn' onClick={handleSubmit}>Log in</button>
                        <Link href="/login/forgot-password">Forgot password</Link>
                    </div>
                </div>}
        </div>
    );
}