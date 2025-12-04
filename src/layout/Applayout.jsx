import React from 'react'
import { Outlet } from "react-router-dom";

function Applayout() {
  return (
    <div>
      
      <main>
        {/* This is where child routes will render */}
        <Outlet />
      </main>
      
    </div>
  )
}

export default Applayout
