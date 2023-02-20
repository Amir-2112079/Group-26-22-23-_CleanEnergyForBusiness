import './Profile.css';
import Co2Calculator from '../Co2Calculator/Co2Calculator'
import LoginRegister from './LoginRegister/LoginRegister';
import { Link } from 'react-router-dom';


function Profile() {

    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

    if (!isLoggedIn) {
        return <LoginRegister />

    }

    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', JSON.stringify(false));
        window.location.href = '/';
    };
    return (
        <div className='Profile'>
            <div>
                <Link to='/Co2' >
                    <button className='btn-Profile' onClick={<Co2Calculator />} >Co2Calculator</button>
                </Link>
                <Link to='step-by-step plan'>
                    <button className='btn-Profile' onClick={<Co2Calculator />} >plan</button>
                </Link>
            </div>

            <div className='logout-btn'>
                <button className='btn-Profile' onClick={handleLogout}>Logout</button>

            </div>


        </div >


    )
}


export default Profile;