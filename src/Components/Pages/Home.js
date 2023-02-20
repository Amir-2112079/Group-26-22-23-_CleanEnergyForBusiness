import '../CSSContents/Home.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    // alt is used to describe the content of the image 
    return (

        <div className="Home">
            <h1>Check out what is the best option for your Business!</h1>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <Link className='cards__items' to='GymSolution'> <img className='fade-img'
                        src='images/897.jpg' height={200} width={400}
                        alt='Gym Solution'
                    />
                        <h1 className='description'> Gyms and Fitness Centers</h1>
                    </Link>

                    <Link className='cards__items' to='/Courier'> <img className='fade-img'
                        src={'images/4016547_15255.jpg'} height={220} width={420}
                        alt='Courier'
                    />
                        <h1 className='description'>Sustainable delivery services</h1>
                    </Link>

                    <Link className='cards__items' to='/BoilerBioFuel'><img className='fade-img'
                        src='images/7291389.jpg' height={220} width={420}
                        alt='Boiler Bio Fuel'
                    />
                        <h1 className='description'>Biofuel-boilers</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default Home;