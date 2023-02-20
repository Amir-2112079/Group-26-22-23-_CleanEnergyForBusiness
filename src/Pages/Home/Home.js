import './Home.css';
import BiofuelImage from './HomeImages/Biofuel.jpg';
import GymImage from './HomeImages/Gym.jpg';
import SDSImage from './HomeImages/SDS.jpg';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    // alt is used to describe the content of the image 
    return (

        <div className="Home">
            <h1>Check Out What is the Best Option for Your Business!</h1>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <Link className='cards__items' to='GymSolution'> <img className='fade-img'
                        src={GymImage} height={200} width={400}
                        alt='Gym Solution'
                    />
                        <h1 className='description'> Gyms and Fitness Centers</h1>
                    </Link>

                    <Link className='cards__items' to='/Courier'> <img className='fade-img'
                        src={SDSImage} height={220} width={420}
                        alt='Courier'
                    />
                        <h1 className='description'>Sustainable Delivery Services</h1>
                    </Link>

                    <Link className='cards__items' to='/BoilerBioFuel'><img className='fade-img'
                        src={BiofuelImage} height={220} width={420}
                        alt='Boiler Bio Fuel'
                    />
                        <h1 className='description'>Biofuel-Boilers</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default Home;