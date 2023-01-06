import React, {useEffect, useState} from 'react';
import s from '../../styles/About.module.scss'
import OrderItem from "../../components/cart/OrderItem";
import {useRouter} from "next/router";
import {getOrdersReq} from "../../utils/request";
import {orderProdAdapter} from "../../utils/adaptors";


const AboutIndex = () => {
    const router = useRouter()
    const [orders, setOrders] = useState([])
    const [show, setShow] = useState({dashboard: 'show'})
    const [background, setBackground] = useState({dashboard: 'background'})

    async function showHandler(e) {
        setShow({[e.target.id]: 'show'})
        setBackground({[e.target.id]: 'background'})
        const res = await getOrdersReq()
        const orders = orderProdAdapter(res.sales)
        setOrders([...orders])
    }

    function logoutHandler() {
        localStorage.removeItem('token')
        router.push('/login')
    }

    return (<div className={s.wrapper}>
       <div>
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
       </div>

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

                    {orders?.map(order => {
                        return(
                            <OrderItem
                                key={Math.random() + 'order' + Date.now()}
                                order={'#' + order.id}
                                date={order.date}
                                status={order.status}
                                total={`$${order.total} for ${order.quantity} item`}
                                actions={'View'}
                            />
                        )
                    })}


                </div>
            </div>
        </div>
    </div>);
};

export default AboutIndex;