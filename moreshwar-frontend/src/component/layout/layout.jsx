import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Outlet } from 'react-router-dom';

const layout = () => {
  return (
    <div>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default layout