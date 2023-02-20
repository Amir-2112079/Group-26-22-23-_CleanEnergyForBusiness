import './App.css';
import './Components/Footer/Footer.css';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import AboutUs from './Components/AboutUs/AboutUs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/Navbar/Navbar';

import Co2Calculator from './Pages/Co2Calculator/Co2Calculator';
import Home from './Pages/Home/Home';
import BoilerBioFuel from './Pages/Home/HomeContents/BoilerBioFuel';
import Courier from './Pages/Home/HomeContents/Couriers';
import GymSolution from './Pages/Home/HomeContents/GymSolution';
import Profile from './Pages/Profile/Profile';
import ProgressTracking from './Pages/ProgressTracking/Pt'
import Shop from './Pages/Shop/Shop';
import Survey from './Pages/Survey/Survey'

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
          <Route path='/Profile' element={<Profile />} />
          <Route path='/co2' element={<Co2Calculator />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/Survey' element={<Survey />} />

          <Route path='*' element={<ErrorPage />} />
        </Routes>

        <Footer />
      </Router>
    </div>

  );
}

export default App;