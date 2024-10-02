import logo from './logo.svg';
import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './component/layout/layout';
import ContactUs from './component/Pages/Contactus';
import Home from './component/Pages/Home';





function App() {
  return (
    <div className="App">
     
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path="Contact-us" element={<ContactUs/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
