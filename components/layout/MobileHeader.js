import React from 'react';
import Link from "next/link";
import {HomeLogo} from "../svg/HomeLogo";
import {WishlistSVG} from "../svg/WishlistSVG";
import {CartSVG} from "../svg/CartSVG";

const MobileHeader = () => {
    return (
        <div className='mobile__header'>
            <div className="mobile__menu">
                \\\
            </div>
            <div className="mobile__logo">
                <Link href="/">
                    <HomeLogo width="300" height="100"/>
                </Link>
            </div>
            <div className="mobile__wishlist">
                <WishlistSVG width="50" height="50"/>
            </div>
            <div className="mobile__cart">
                <CartSVG width="50" height="50"/>

            </div>

        </div>
    );
};

export default MobileHeader;