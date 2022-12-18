import {HeaderTop} from "./HeaderTop";
import {HeaderMidl} from "./HeaderMidl";
import {HeaderNav} from "./HeaderNav";
// import {Outlet} from 'react-router-dom'
import React, {useState} from "react";
import {Footer} from "./Footer";
import {Provider, useSelector} from "react-redux";
import store from '../../store/store'


export function Layout({children}) {

    return( <Provider store={store}>
        <div className={'opshi'}>
            <HeaderTop/>
            <HeaderMidl/>
            <HeaderNav/>
            {children}
            {/*<Outlet/>*/}

            <Footer/>
        </div>
    </Provider>

)
}