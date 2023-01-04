import React from "react";
import Link from "next/link";
import {DealsSVG} from "../svg/DealsSVG";
import {HeadphonesSVG} from "../svg/HeadphonesSVG";

export function HeaderNav() {

    return (
        <div className="header-nav">
            <div className="header-nav__category-bar">
                <p>#</p>
                <p>Browse All Categories ^</p>
            </div>
            <div className="header-nav__menu-bar">
                <p className="nav-tab nav-tab-1">
                    <DealsSVG/>
                    Deals
                </p>

                <Link href="/">
                    <p className="nav-tab">Home</p>
                </Link>
                <Link href={'/filter'}>
                    <p className="nav-tab">Filter</p>
                </Link>
                <Link href="/cart">
                    <p className="nav-tab">Shop</p>
                </Link>
                <div className="page-shop">
                    <p><Link href="/cart">Shop-cart</Link></p>
                </div>
                <Link href="/products">
                    <p className="nav-tab">Products</p>
                </Link>
                <Link href="/about">
                    <p className="nav-tab">About</p>
                </Link>

                <p className="nav-tab">Blog</p>
                <p className="nav-tab">Page</p>

                <div className="page">
                    <p><Link href="/registration">Registration</Link></p>
                    <p><Link href="/login">Login</Link></p>
                    <p><Link href="/login/forgot-password">Forgot password</Link></p>
                </div>

            </div>
            <div className="feedback">
                <HeadphonesSVG/>
                <div>
                    <p className="phone-number">1900 - 888
                    </p>
                    <p className="support-center">24/7 Support Center</p>
                </div>
            </div>


        </div>

    )
}