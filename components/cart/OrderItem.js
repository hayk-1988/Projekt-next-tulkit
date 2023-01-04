import React from 'react';
import s from "../../styles/About.module.scss";
import {memo} from "react";

const OrderItem = memo( ({order, date, status, total, actions}) => {

    console.log('order itemi mej')
    return (
        <>
            <div className={s.table__item}>{order}</div>
            <div className={s.table__item}>{date}</div>
            <div className={s.table__item}>{status}</div>
            <div className={s.table__item}>{total}</div>
            <div className={s.table__item}>{actions}</div>
        </>
    );
})

export default OrderItem;