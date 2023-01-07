import {useSelector} from "react-redux";
import {HomeLogo} from "../svg/HomeLogo";
import Link from "next/link";
import {CompareSVG} from "../svg/CompareSVG";
import {WishlistSVG} from "../svg/WishlistSVG";
import {CartSVG} from "../svg/CartSVG";
import {AccountSVG} from "../svg/AccountSVG";
import s from './Header.module.css'

export function HeaderMidl() {
    const count = useSelector((state) => state.cartProducts.count)

    return (
        <div className={s['header-middle']}>
            <div className={s['header-wrap']}>
                <div className={s['header-middle__right']}>
                    <div className={s['logo']}>
                        <Link href="/">
                            <HomeLogo/>
                        </Link>
                    </div>
                    <div className={s['search-bar']}>
                        <div className={s['search-bar__first']}>All Categories
                            <div className={s['search-bar__first__ptichka']}>^</div>
                        </div>
                        <input className={s['search-bar--search-style']} type="text" placeholder="Search for items..."/>
                        <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/search.png"
                             alt='search'/>
                    </div>
                    <div className={s['header-middle__action-bar']}>
                        <div className={s['compare']}>
                            <CompareSVG/>
                            Compare
                        </div>
                        <div className={s['wishlist']}>
                            <WishlistSVG width="20" height="20"/>
                            Wishlist
                        </div>
                        <div className={s['cart']}>
                            <Link href='/cart'>
                                <CartSVG width="20" height="20"/>
                            </Link>
                            Cart
                            <div className={s['cart-count']}>{count}</div>
                        </div>
                        <div className={s['account']}>
                            <AccountSVG/>
                            Account
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}