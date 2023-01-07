import React from "react";
import Link from "next/link";
import {DealsSVG} from "../svg/DealsSVG";
import {HeadphonesSVG} from "../svg/HeadphonesSVG";
import s from './Header.module.css'

export function HeaderNav() {

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

                <Link href="/">
                    <p className={s['nav-tab']}>Home</p>
                </Link>
                <Link href={'/filter'}>
                    <p className={s['nav-tab']}>Filter</p>
                </Link>
                <Link href="/cart">
                    <p className={s['nav-tab']}>Shop</p>
                </Link>
                <div className="page-shop">
                    <p><Link href="/cart">Shop-cart</Link></p>
                </div>
                <Link href="/products">
                    <p className={s['nav-tab']}>Products</p>
                </Link>
                <Link href="/about">
                    <p className={s['nav-tab']}>About</p>
                </Link>

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