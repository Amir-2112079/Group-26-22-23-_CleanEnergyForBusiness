import "./NavBarStyle.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav>
                <Link to="/" id="title"> Clean energy for business</Link>

                <div>
                    <ul id='navbar'>
                        <CustomLink to='/' className="active"> Home </CustomLink>
                        <CustomLink to='/Shop' > Shop </CustomLink>
                        <CustomLink to='/Profile' > Profile </CustomLink>

                    </ul>
                </div>
            </nav>
        </>
    );
}
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>
                {children}
            </Link>
        </li>
    )
}




export default NavBar;