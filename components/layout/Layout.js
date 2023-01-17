import {HeaderTop} from "./HeaderTop";
import {HeaderMidl} from "./HeaderMidl";
import {HeaderNav} from "./HeaderNav";
import React from "react";
import {Footer} from "./Footer";
import {Provider} from "react-redux";
import store from '../../store/store'
import MobileHeader from "./MobileHeader";
import s from './Header.module.css'

export function Layout({children}) {

    return( <Provider store={store}>
        <div className='general'>
            <MobileHeader/>
            <HeaderTop/>
            <div className={s['header']}>

               <HeaderMidl/>
               <HeaderNav/>
           </div>
            {children}

            <Footer/>
        </div>
    </Provider>

)
}