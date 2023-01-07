import '../CSSContents/Profile.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Profile() {
    //used &nbsp; to incrase the distance between the two buttons
    return (
        <div className='Profile'>

            <Link to='/SignUp' ><button className="signup">SignUp</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/Login' ><button className="login">Login</button></Link>


        </div >
    )
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
    );
}
export default Profile;