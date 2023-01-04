import {useRouter} from "next/router";
import React from "react";

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
                    <li className="nav-list__item"><a href="Projekt-next-tulkit/components/layout/HeaderTop#">About Us</a></li>
                    <li className="nav-list__item"><a href="Projekt-next-tulkit/components/layout/HeaderTop#">My Account</a></li>
                    <li className="nav-list__item"><a href="Projekt-next-tulkit/components/layout/HeaderTop#">Wishlist</a></li>
                    <li className="nav-list__item"><a href="Projekt-next-tulkit/components/layout/HeaderTop#">Order Tracking</a></li>
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
                    <li className="language-bar__list-item"><a href="/">USD</a></li>
                </ul>
            </div>
        </div>

    )
}
