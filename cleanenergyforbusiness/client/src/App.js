import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Shop from './Components/Pages/Shop';
import Profile from './Components/Pages/Profile';
import ErrorPage from './Components/ErrorPage';
import NavBar from './Components/NavBar';
import React from 'react';


function App() {
  return (
    <div className='App'>

      <Router>
        <NavBar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>

        <div> This is the Footer which will be displayed on everypage!</div>

      </Router>

    </div>
  );
}

export default App;





