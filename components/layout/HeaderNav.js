import React, {useState} from "react";
import Link from "next/link";
import {DealsSVG} from "../svg/DealsSVG";
import {HeadphonesSVG} from "../svg/HeadphonesSVG";
import s from './Header.module.css'
import cn from 'classnames'
const pages = [
    {path: '/', text: 'Home', className: 'nav-tab'},
    {path: '/filter', text: 'Filters', className: 'nav-tab'},
    {path: '/cart', text: 'Shop', className: 'nav-tab'},
    {path: '/products', text: 'Products', className: 'nav-tab'},
    {path: '/about', text: 'About', className: 'nav-tab'},
]

export function MyLink({path, className, text, index, handleSelect}) {


    return (
        <Link id={index} onClick={handleSelect} href={path}>
            <p className={`${className}`}>{text}</p>
        </Link>
    )
}

export function HeaderNav() {
    // const [isSelect, setIsSelect] = useState()
    //
    //
    // // const selectClass = cn({
    // //     [s['nav-tab']]: true,
    // //     [s['selected']]: index === id
    // // })
    // function handleSelect(id) {
    //
    // }

    return (
        <div className={s['header-nav']}>
            <div className={s['header-nav__category-bar']}>
                <p>#</p>
                <p>Browse All Categories ^</p>
            </div>
            <div className={s['header-nav__menu-bar']}>
                <p className={`${s['nav-tab']} ${s['nav-tab-1']}`}>
                    <DealsSVG/>
                    Deals
                </p>

                {pages.map((page, i) => {
                    return (
                        <MyLink
                            key={Math.random() + 'pages'}
                            path={page.path}
                            className={page.className}
                            text={page.text}
                            index={i}
                        />
                    )
                })}


                <p className={s['nav-tab']}>Blog</p>
                <p className={s['nav-tab']}>Page</p>

                <div className={s['page']}>
                    <p><Link href="/registration">Registration</Link></p>
                    <p><Link href="/login">Login</Link></p>
                    <p><Link href="/login/forgot-password">Forgot password</Link></p>
                </div>

            </div>
            <div className={s['feedback']}>
                <HeadphonesSVG/>
                <div>
                    <p className={s['phone-number']}>1900 - 888
                    </p>
                    <p className={s['support-center']}>24/7 Support Center</p>
                </div>
            </div>


        </div>

    )
}