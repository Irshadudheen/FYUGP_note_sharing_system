import React from 'react'
import { Outlet } from "react-router-dom";
import { Header } from '../components/home/header';

function Applayout() {
  return (
    <div>
       <Header />
      <main>
        {/* This is where child routes will render */}
        <Outlet />
      </main>
      
    </div>
  )
}

export default Applayout
