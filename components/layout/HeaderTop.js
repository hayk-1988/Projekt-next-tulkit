import {useRouter} from "next/router";
import React from "react";
import Link from "next/link";

export function HeaderTop (){
    const router = useRouter()

    const {pathname, query, asPath, locales, locale: activeLocale} = router
    const otherLocales = (locales || []).filter((locale) => locale !== activeLocale)

    async function langHandler(loc) {

        router.push({route: pathname, query}, asPath, {locale: loc});
    }
    return(
        <div className="header-top">
            <div className="nav-bar">
                <ul className="nav-list">
                    <li className="nav-list__item"><Link href="#">About Us</Link></li>
                    <li className="nav-list__item"><Link href="#">My Account</Link></li>
                    <li className="nav-list__item"><Link href="#">Wishlist</Link></li>
                    <li className="nav-list__item"><Link href="#">Order Tracking</Link></li>
                </ul>
            </div>
            <div className="language-bar">
                <ul className="language-bar__list">
                    <li className="language-bar__list-item"> Need help? Call Us: <span className="">+ 1800 900</span>
                    </li>
                    {otherLocales.map(elem => {
                        return (
                            <li key={Math.random() + 'ased' + Date.now()}><button className='lang_btn' onClick={() => {
                                langHandler(elem)
                            }}>{elem}</button></li>
                        )
                    })}
                    <li className="language-bar__list-item"></li>
                    <li className="language-bar__list-item"><Link href="/">USD</Link></li>
                </ul>
            </div>
        </div>

    )
}
