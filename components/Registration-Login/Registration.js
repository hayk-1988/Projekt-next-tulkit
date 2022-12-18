import React, {useState} from "react";
import {RegHeader} from "./RegHeader";
// import {RadiosReg} from "./RadiosReg";


export function Registration(){
    const [response , setResponse ] = useState([])
    const [password, setPassword] = useState('')
    const [username, setUserName] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [email, setEmail] = useState('')
    const [secCod, setSecCod] = useState('')
    const [isCheckedClient, setCheckedClient] = useState({
        checked: false,
        value: 'male'
    })
    const [isChecked, setChecked] = useState({
        checked: true
    })
    const [viz, setViz] = useState({
        display: 'hide',
        text: ''
    })
    const [wrongInput, setWrongInput] = useState({
        clasName: 'input-border'
    })
    // const [resData, setResData] = useState({})

    function handlerUsername (e) {
        setUserName(e.target.value)
    }
    function handlerEmail (e) {
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

    let data = {
        'email': email,
        'password': password,
    }
    async function handleSubmit(){
        if (!password){
            setViz({
                display: 'show',
                text: 'gaxtnabary voncor sxala krknvum 🙀'
            })
        }else if (password !== confPassword){
            console.log('ches tenum sxal es krknel gaxtnabary 👻')

            setViz({
                display: 'show',
                text: 'gaxtnabary voncor sxala krknvum 🙀'
            })
        }else if (secCod !== '784756'){
            setViz({
                display: 'show',
                text: 'wrong security cod'
            })
        }else if (isChecked.checked){
            setViz({
                display: 'show',
                text: 'must agree to the terms'
            })
        }else {
            setViz({
                display: 'hide',
                text: ''
            })
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            let raw = JSON.stringify(data);
            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
            };
            fetch("https://420.canamaster.net/customer/auth/signup", requestOptions)
                .then(response => response.json())
                .then(result =>  setResponse([...response, result]) )
                .catch(error => console.log('error', error));

        }

    }


    return (
        <div>
            <div className='registration-page'>
                <div className="test-login">
                    <RegHeader/>
                    <input type="text" placeholder='Username' value={username} onChange={handlerUsername}/>
                    <input type="email" placeholder='Email' value={email} onChange={handlerEmail}/>
                    <input id={wrongInput.clasName} type="password" placeholder='Password' value={password} onChange={handlerPassword}/>
                    <input type="password" placeholder='Confirm Password' value={confPassword} onChange={handlerConfPassword}/>
                    <div className="security-bar">
                        <input type="text" placeholder='Security Code' value={secCod} onChange={handlerSecCode}/>
                        <div className="security-cod">{784756}</div>
                    </div>
                    {/*<RadiosReg setChecked={setChecked} isCheckedClient={isCheckedClient} setCheckedClient={setCheckedClient}/>*/}
                    <div className={`show-problems ${viz.display}`}>
                        {viz.text}
                    </div>
                    <button onClick={handleSubmit}>Submit & Register</button>
                </div>
            </div>
        </div>
    );
}