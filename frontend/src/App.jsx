import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Success from './Pages/Success/Success';
import ReservationDetails from './Pages/ReservationDetails/ReservationDetails';
import './App.css'

const App = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/reservation-details' element={<ReservationDetails />}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Toaster/>
    </>
  )
}

export default App
