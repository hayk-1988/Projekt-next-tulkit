import React from 'react';
import s from '../../styles/Logout.module.css'

const Logout = ({logoutHandler}) => {
    return (
        <div className={s.selector} >
            <div className={s.container}>
                <button onClick={logoutHandler} className={s.btn}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    logout
                </button>
            </div>
        </div>
    );
};

export default Logout;