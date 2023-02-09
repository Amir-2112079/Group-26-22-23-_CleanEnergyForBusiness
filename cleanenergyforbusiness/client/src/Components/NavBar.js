import "./CSSContents/NavBar.css";

import { NavLink } from "react-router-dom";


function NavBar() {


    return (
        <nav>
            <NavLink to="/" id="title"> Clean energy for business</NavLink>

            <div>
                <ul id='navbar'>
                    <NavItem to='/' label='Home' />
                    <NavItem to='/Shop' label='Shop' />
                    <NavItem to='/RealLifeExamples' label='RealLifeExamples' />
                    <NavItem to='/Profile' label='Profile' />
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