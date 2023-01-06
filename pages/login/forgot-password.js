import React, {useState} from 'react';
import {forgotPasswordReq, myAxios} from "../../utils/request";
import {useSelector} from "react-redux";

const ForgotPassword = () => {
    const e = useSelector((state) => state.user.email)
    const [email, setEmail] = useState(e)
    const [secCod, setSecCod] = useState('')
    const [err, setErr] = useState({
        display: 'hide',
        text: ''
    })


    function handlerSecCode(e) {
        setSecCod(e.target.value)
    }
    function handlerEmail(e) {
        setEmail(e.target.value)
    }
    async function handleSubmit() {
        if (secCod !== '784756') {
            setErr({
                display: 'show',
                text: 'wrong security cod'
            })
        } else {
            setErr({
                display: 'hide',
                text: ''
            })
            await forgotPasswordReq(email)
        }
    }

    return (
        <div >
            <div className='registration-page forgot-password'>
                <div className="test-login">
                    <div className="registration-header">
                        <h2>Forgot your password?</h2>
                        <p>Not to worry, we got you! Let’s get you a new password. Please enter your email address or your Username.</p>
                    </div>
                    <input type="email" placeholder='Username or Email' value={email} onChange={handlerEmail}/>
                    <div className="security-bar">
                        <input type="text" placeholder='Security Code' value={secCod} onChange={handlerSecCode}/>
                        <div className="security-cod">{784756}</div>
                    </div>
                    <div className={`show-problems ${err.display}`}>
                        {err.text}
                    </div>
                    <button className='login-btn' onClick={handleSubmit}>Reset password</button>
                </div>
                <div className={'forgot-password-right'}>
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/page/forgot_password.svg" alt="finger image"/>
                </div>
            </div>

        </div>
    );
};

export default ForgotPassword;