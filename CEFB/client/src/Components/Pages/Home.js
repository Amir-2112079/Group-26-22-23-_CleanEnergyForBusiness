import '../CSSContents/Home.css';
import 'leaflet/dist/leaflet.css';
import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import { Icon } from 'leaflet'
import axios from 'axios'


function Home() {
    const [mapMarkers, setMapMarkers] = useState([]);
    const [showMap, setShowMap] = useState(false);
    useEffect(() => {
            axios.get(`http://localhost:4000/locationgetAllMarkers`)
            .then((response) => {
                if (response.data) {
                    setMapMarkers(response.data)
                    setShowMap(true)
                }
            })
      }, []);
    
    return (
        <div className="Home">
            <h1>Check out what is the best option for your Business!</h1>

            <div className='Structure'>
                <Link className='business-image' to='GymSolution'> <img className='fade-img'
                    src='images/897.jpg' height={220} width={420}
                    alt='Gym Solution'
                />
                    <h3 className='description'> Gyms and Fitness Centers</h3>
                </Link>

                <Link className='business-image' to='/Courier'> <img className='fade-img'
                    src={'images/4016547_15255.jpg'} height={220} width={420}
                    alt='Courier'
                />
                    <h3 className='description'>Sustainable delivery services</h3>
                </Link>

                <Link className='business-image' to='/BoilerBioFuel'><img className='fade-img'
                    src='images/7291389.jpg' height={220} width={420}
                    alt='Boiler Bio Fuel'
                />
                    <h3 className='description'>Biofuel-boilers</h3>
                </Link>
            </div>
            <div className="map-container">
                {showMap && <Map mapMarkers={mapMarkers} />}
                <br></br>
            </div>
        </div>
    )
}

function Map({mapMarkers}) {
    const otherBusinessIcon = new Icon({
        iconUrl: process.env.PUBLIC_URL + '/images/map-marker-icon.png',
        iconSize: [48,48]
    })
    return (
        <MapContainer center={[52,0]} zoom={5} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {mapMarkers.map((marker, index) => (
                <Marker key={index} position={[marker.latitude, marker.longitude]} icon={otherBusinessIcon} />
            ))}
        </MapContainer>
    )
}

export default Home;