import '../CSSContents/Home.css';
import React from 'react';
import { Link } from 'react-router-dom';


function Home() {

    return (

        <div className="Home">
            <h1>Check out what is the best option for your Business!</h1>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <Link className='cards__items' to='GymSolution'> <img className='fade-img' src='images/897.jpg' height={200} width={400} />
                        <h1 className='description'> Gym Business</h1>
                    </Link>

                    <Link className='cards__items' to='/Shop'> <img className='fade-img' src='images/img-2.jpg' height={220} width={420} />
                        <h1 className='description'>Other Business</h1>
                    </Link>

                    <Link className='cards__items' to='Login'><img className='fade-img' src='images/img-3.jpg' height={220} width={420} />
                        <h1 className='description'>Other Business2</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}



export default Home;