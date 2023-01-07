import React, {useState} from "react";
import {RegHeader} from "./RegHeader";
import {registrationReq} from "../../utils/request";
import s from './RegLog.module.css'

export function Registration() {


    const [check, setCheck] = useState(false)

    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [email, setEmail] = useState('')
    const [secCod, setSecCod] = useState('')
    const [viz, setViz] = useState({
        display: 'hide',
        text: ''
    })
    const [wrongInput, setWrongInput] = useState({
        clasName: 'input-border'
    })

    function handlerEmail(e) {
        setViz({
            display: 'hide',
            text: ''
        })
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

    function handlerConfPassword(e) {
        setConfPassword(e.target.value)
    }

    function handlerSecCode(e) {
        setSecCod(e.target.value)
    }

    async function handleSubmit() {
        let data = {
            'email': email,
            'password': password,
        }
        if (!password || !email || !confPassword || !secCod) {
            setViz({
                display: 'show',
                text: 'please fill in all fields'
            })
        } else if (password !== confPassword) {
            setViz({
                display: 'show',
                text: 'password repeated incorrectly!'
            })
        } else if (secCod !== '784756') {
            setViz({
                display: 'show',
                text: 'wrong security cod'
            })
        } else {
            setViz({
                display: 'hide',
                text: ''
            })
            await registrationReq(data, setViz)
        }

    }


    return (
        <div>
            <div className={s['registration-page']}>
                <div className={s['test-login']}>
                    <RegHeader/>
                    <input type="email" placeholder='Email' value={email} onChange={handlerEmail}/>
                    <input id={wrongInput.clasName} type={!check ? "password" : 'text'} placeholder='Password'
                           value={password} onChange={handlerPassword}/>
                    <input type={!check ? "password" : 'text'} placeholder='Confirm Password' value={confPassword}
                           onChange={handlerConfPassword}/>
                    <div className={s['security-bar']}>
                        <input type="text" placeholder='Security Code' value={secCod} onChange={handlerSecCode}/>
                        <div className={s['security-cod']}>{784756}</div>
                    </div>
                    <div className={s['show-password']}><input type="checkbox" checked={check} onChange={(e) => {
                        setCheck(!check)
                    }}/><p>show-password</p></div>

                    <div className={`${s['show-problems']} ${s[`${viz.display}`]}`}>
                        {viz.text}
                    </div>
                    <button onClick={handleSubmit}>Submit & Register</button>
                </div>
            </div>
        </div>
    );
}