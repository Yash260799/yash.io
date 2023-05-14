import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminLogin } from '../Admin/AdminLogin'
import AdminRegister from '../Admin/AdminRegister'
import { BookingDetails } from '../Admin/BookingDetails'
import { BookingView } from '../Admin/BookingView'
import CarsAdd from '../Admin/CarsAdd'
import { CustomersDetails } from '../Admin/CustomersDetails'
import { PaymentsView } from '../Admin/PaymentsView'
import Footer from '../Components/Footer'
import Footers from '../Components/Footers'
import Navbar from '../Components/Navbar'
import About from '../Pages/About'
import Admin from '../Pages/Admin'
import CarDetails from '../Pages/CarDetails'
import CarListAll from '../Pages/CarListAll'
import ContactUs from '../Pages/ContactUs'
import FindCar from '../Pages/FindCar'
import Home from '../Pages/Home'
import Insurance from '../Pages/Insurance'
import { Login, LoginUrl } from '../Pages/Login'
import Payment from '../Pages/Payment'
import Policies from '../Pages/Policies'
import Register from '../Pages/Register'
import SearchCar from '../Pages/SearchCar'

export default function Routers() {
  return (
    <div>
      
        <BrowserRouter>
       
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/findcar" element={<FindCar/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<ContactUs/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cars" element={<CarListAll />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="/addcar" element={<CarsAdd />} />
            <Route path="/bookingdetails" element={<BookingDetails/>} />
            <Route path="/payment" element={<Payment/>} />
            <Route path="/searchcar/:location" element={<SearchCar/>}/>
            <Route path="/adminhome" element={<Admin />} />
            <Route path="/adminreg" element={<AdminRegister />} />
            <Route path="/adminlogin" element={<AdminLogin/>} />
            <Route path="/admincarsadd" element={<CarsAdd/>} />
            <Route path="/admincustomerdetails" element={<CustomersDetails/>} />
            <Route path="/bookingview" element={<BookingView/>} />
            <Route path="/paymentsview" element={<PaymentsView/>} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/footer" element={<Footer/>} />
            <Route path="/footers" element={<Footers/>} />
        </Routes>
       
        
        
        </BrowserRouter>
    </div>
  )
}
