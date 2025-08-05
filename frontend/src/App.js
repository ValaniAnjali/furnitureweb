import React, { useState } from 'react';
import Header from './components/Header';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Aboutus from './Pages/Aboutus';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shopping from './Pages/Shopping';
import Login from './Pages/Login';
import Signup from './Pages/SignUp';
import Purchase from './Pages/Purchase';
import Admin from './admin side/Admin';
import CustomerDetails from './admin side/CustomerDetails';
import Query from './admin side/Query';
import AddProduct from './admin side/AddProduct';
import AddAdmin from './admin side/AddAdmin';
import AllProduct from './admin side/AllProduct';

const App=()=>{
    return (
        <div className="App">
          <Router>
                <Routes>
                    <Route path="/" element={<>< Signup/></>} />
                    <Route path="/home" element={<><Header />< Home/><Footer /></>} />
                    <Route path="/aboutus" element={<><Header /><Aboutus /><Footer /></>} />
                    <Route path="/contact" element={<><Header /><Contact /><Footer /></>} />
                    <Route path="/shopping" element={<><Header /><Shopping /><Footer /></>} />
                    <Route path="/signup" element={<><Signup /></>} />
                    <Route path="/login" element={<><Login /></>} />
                    <Route path="/purchase" element={<><Purchase/></>} />
                    <Route path="/admin" element={<><Admin/></>} />
                    <Route path="/customerdetails" element={<><CustomerDetails/></>} />
                    <Route path="/query" element={<><Query/></>} />
                    <Route path="/addadmin" element={<><AddAdmin/></>}/>
                    <Route path="/addproduct" element={<><AddProduct/></>} />
                    <Route path="/allproducts" element={<><AllProduct/></>} />
                </Routes>
          </Router>
        </div>
    );
}

export default App;
