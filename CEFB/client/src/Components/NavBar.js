import "./CSSContents/NavBar.css";

import { NavLink } from "react-router-dom";
import Cart from "./Pages/Cart";

function NavBar({ cartItems, removeFromCart, increaseQuantity, decreaseQuantity }) {
    /*
       <li><Link to="/">Home</Link></li>
     <li><Link to="/cart">Cart</Link></li>
    */
    return (
        <nav>
            <NavLink to="/" id="title"> Clean energy for business</NavLink>

            <div>
                <ul id='navbar'>
                    <NavItem to='/' label='Home' />
                    <NavItem to='/Shop' label='Shop' />
                    <NavItem to='/Profile' label='Profile' />
                    <NavItem to='/Cart' label='Cart' />

                    <li>
                        <Cart cartItems={cartItems} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
                    </li>
                </ul>

            </div>
        </nav >
    );
}

function NavItem({ to, label }) {
    return (
        <li>
            <NavLink to={to} activeClassName='active'>
                {label}
            </NavLink>
        </li>
    );
}

export default NavBar;