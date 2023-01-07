import './App.css';
import './Components/CSSContents/Footer.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Shop from './Components/Pages/Shop';
import Profile from './Components/Pages/Profile';
import SignUp from './Components/Pages/SignUp';
import Login from './Components/Pages/Login';
import ErrorPage from './Components/ErrorPage';
import NavBar from './Components/NavBar';
import Footer from './Components/Pages/Footer';




function App() {

  return (

    <div className='App'>

      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>

        <Footer />

      </Router>
    </div>

  );
}

export default App;




