import React from 'react';

//import site components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import ViewProfile from './Pages/ViewProfile';
import Booking from './Pages/Booking'

//im-port styles
import './Assets/css/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
          <Routes>
              <Route path='/' exact element={<Home/>} />
              <Route path='/view/:id' element={<ViewProfile/>} />
              <Route path='/book/:id' element={<Booking />} />
          </Routes>
        <Footer />
        
      </>
    </Router>
  )
}

export default App;
