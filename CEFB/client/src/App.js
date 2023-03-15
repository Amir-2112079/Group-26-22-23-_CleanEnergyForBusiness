import './App.css';
import './Components/CSSContents/Footer.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Components/Pages/Home';
import GymSolution from './Components/HomeContents/GymSolution';
import Courier from './Components/HomeContents/Couriers';
import BoilerBioFuel from './Components/HomeContents/BoilerBioFuel';
import Shop from './Components/Pages/Shop';
import Profile from './Components/Pages/Profile';
import ErrorPage from './Components/ErrorPage';
import NavBar from './Components/NavBar';
import Footer from './Components/Pages/Footer';
import Co2Calculator from './Components/Pages/Co2Calculator';
import AboutUs from './Components/Pages/AboutUs';
import Cart from './Components/Pages/Cart'



function App() {




  return (

    <div className='App'>

      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/GymSolution' element={<GymSolution />} />
          <Route path='/Courier' element={<Courier />} />
          <Route path='/BoilerBioFuel' element={<BoilerBioFuel />} />
          <Route path='/Shop' element={<Shop />} />

          <Route path='/cart' element={<Cart />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/co2' element={<Co2Calculator />} />
          <Route path='/AboutUs' element={<AboutUs />} />

          <Route path='*' element={<ErrorPage />} />

        </Routes>

        <Footer />

      </Router>
    </div>

  );
}

export default App;




