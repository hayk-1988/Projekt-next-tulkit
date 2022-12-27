import React, {useState} from "react";
import {RegHeader} from "./RegHeader";
import {myAxios} from "../../utils/request";


export function Registration(){
    console.log('registratia')

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

    function handlerEmail (e) {
        setViz({
            display: 'hide',
            text: ''
        })
        setEmail(e.target.value)
    }
    function handlerPassword (e) {
        setPassword(e.target.value)
        if (e.target.value.length > 5){
            setWrongInput({
                clasName: ''
            })
        }else {
            setWrongInput({
                clasName: 'input-border'
            })
        }
    }
    function handlerConfPassword (e) {
        setConfPassword(e.target.value)
    }
    function handlerSecCode(e) {
        setSecCod(e.target.value)
    }

    async function handleSubmit(){
        let data = {
            'email': email,
            'password': password,
        }
        if (!password || !email || !confPassword || !secCod){
            setViz({
                display: 'show',
                text: 'please fill in all fields'
            })
        }else if (password !== confPassword){
            setViz({
                display: 'show',
                text: 'password repeated incorrectly!'
            })
        }else if (secCod !== '784756'){
            setViz({
                display: 'show',
                text: 'wrong security cod'
            })
        }else {
            setViz({
                display: 'hide',
                text: ''
            })
            const config = {
                method: 'POST',
                url: 'https://420.canamaster.net/customer/auth/signup',
                data
            };
            try {
                const data1 = await myAxios(config)
                console.log(data1)
            }catch (err){
                setViz({
                    display: 'show',
                    text: err.response?.data?.error
                })
                console.log(err)
            }
        }

    }


    return (
        <div>
            <div className='registration-page'>
                <div className="test-login">
                    <RegHeader/>
                    <input type="email" placeholder='Email' value={email} onChange={handlerEmail}/>
                    <input id={wrongInput.clasName} type={!check ? "password" : 'text'} placeholder='Password' value={password} onChange={handlerPassword}/>
                    <input type={!check ? "password" : 'text'} placeholder='Confirm Password' value={confPassword} onChange={handlerConfPassword}/>
                    <div className="security-bar">
                        <input type="text" placeholder='Security Code' value={secCod} onChange={handlerSecCode}/>
                        <div className="security-cod">{784756}</div>
                    </div>
                    <div className='show-password' ><input type="checkbox" checked={check} onChange={(e) => {
                        setCheck(!check)
                    }}/><p>show-password</p></div>

                    <div className={`show-problems ${viz.display}`}>
                        {viz.text}
                    </div>
                    <button onClick={handleSubmit}>Submit & Register</button>
                </div>
            </div>
        </div>
    );
}