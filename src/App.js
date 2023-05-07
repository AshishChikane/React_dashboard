import React from "react";
import { Route, Routes } from 'react-router-dom'
import Dashboard from "./Comman/Dashboard/Dashboard";
import Register from './Components/Pages/Register/Register'
import Home from "./Components/Pages/Home/Home";
import AdvertiseProduct from "./Components/Pages/Product/AdvertiseProduct";
import HighlightProduct from "./Components/Pages/Product/HighlightProduct";
import PublisherProduct from "./Components/Pages/Product/PublisherProduct";
import Customer from "./Components/Pages/Customer/Customer";
import Login from './Components/Pages/Login/Login'
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:4000';     //backend url
axios.defaults.withCredentials = true;    //to set the cookies

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/home' element={<Home />} />
      <Route path='/customer' element={<Customer />} />
      <Route path='/product/advertise' element={<AdvertiseProduct />} />
      <Route path='/product/publisher' element={<PublisherProduct />} />
      <Route path='/product/highlight' element={<HighlightProduct />} />
    </Routes>
  );
}

export default App;
