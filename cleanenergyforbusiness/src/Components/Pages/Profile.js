import '../CSSContents/Profile.css'
import { Link, } from "react-router-dom";

function Profile() {
    //used &nbsp; to incrase the distance between the two buttons
    return (
        <div className='Profile'>

            <Link to='/SignUp' ><button className="signup">SignUp</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/Login' ><button className="login">Login</button></Link>


        </div >
    )
}


export default Profile;