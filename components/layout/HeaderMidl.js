import {useSelector} from "react-redux";
import {HomeLogo} from "../svg/HomeLogo";
import Link from "next/link";
import {CompareSVG} from "../svg/CompareSVG";
import {WishlistSVG} from "../svg/WishlistSVG";
import {CartSVG} from "../svg/CartSVG";
import {AccountSVG} from "../svg/AccountSVG";

export function HeaderMidl() {
    const count = useSelector((state) => state.cartProducts.count)

    return (
        <div className="header-middle">
            <div className="header-wrap">
                <div className="header-middle__right">
                    <div className="logo">
                        <Link href="/">
                            <HomeLogo/>
                        </Link>
                    </div>
                    <div className="search-bar">
                        <div className="search-bar__first">All Categories
                            <div className="search-bar__first__ptichka">^</div>
                        </div>
                        <input className="search-bar--search-style" type="text" placeholder="Search for items..."/>
                        <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/search.png"
                             alt='search'/>
                    </div>
                    <div className="header-middle__action-bar">
                        <div className="compare">
                            <CompareSVG/>
                            Compare
                        </div>
                        <div className="wishlist">
                            <WishlistSVG width="20" height="20"/>
                            Wishlist
                        </div>
                        <div className="cart">
                            <Link href='/cart'>
                                <CartSVG width="20" height="20"/>
                            </Link>
                            Cart
                            <div className="cart-count">{count}</div>
                        </div>
                        <div className="account">
                            <AccountSVG/>
                            Account
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}