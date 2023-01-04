import React, {useState} from 'react';
import s from '../../styles/About.module.scss'
import OrderItem from "../../components/cart/OrderItem";
import {useRouter} from "next/router";


const aboutIndex = () => {
    const router = useRouter()
    const [show, setShow] = useState({dashboard: 'show'})
    const [background, setBackground] = useState({dashboard: 'background'})

    function showHandler(e) {
        setShow({[e.target.id]: 'show'})
        setBackground({[e.target.id]: 'background'})

    }
    function logoutHandler(){
        localStorage.removeItem('token')
        router.push('/login')
    }
    return (<div className={s.wrapper}>
        <div
            id={'dashboard'}
            defaultValue='dashboard'
            className={`${s.leftSide} ${s[background['dashboard']]}`}
            onClick={showHandler}
        >Dashboard
        </div>
        <div
            id={'orders'}
            className={`${s.leftSide} ${s[background['orders']]}`}
            onClick={showHandler}
        >Orders
        </div>
        <div className={s.leftSide}>Track Your Order</div>
        <div className={s.leftSide}>My Address</div>
        <div className={s.leftSide} onClick={logoutHandler}>Logout</div>

        <div className={s.rightSide}>
            <div className={`${s.dashboard} ${s[show['dashboard']]}`}>
                <h2>Hello Rosie!</h2>
                <p>From your account dashboard. you can easily check & view your recent orders,
                    manage your shipping and billing addresses and edit your password and account details.</p>
            </div>
            <div className={`${s.orders} ${s[show['orders']]}`}>
                <h2>Your Orders</h2>
                <div className={s.table}>
                    <div className={s.table__itemHeader}>Order</div>
                    <div className={s.table__itemHeader}>Date</div>
                    <div className={s.table__itemHeader}>Status</div>
                    <div className={s.table__itemHeader}>Total</div>
                    <div className={s.table__itemHeader}>Actions</div>

                    <OrderItem
                        order={'#1357'}
                        date={'March 45, 2020'}
                        status={'Processing'}
                        total={'$125.00 for 2 item'}
                        actions={'View'}
                    />

                    <OrderItem
                        order={'#2468'}
                        date={'June 29, 2020'}
                        status={'Completed'}
                        total={'$364.00 for 5 item'}
                        actions={'View'}
                    />

                    <OrderItem
                        order={'#2366'}
                        date={'August 02, 2020'}
                        status={'Completed'}
                        total={'$280.00 for 3 item'}
                        actions={'View'}
                    />

                </div>
            </div>
        </div>
    </div>);
};

export default aboutIndex;