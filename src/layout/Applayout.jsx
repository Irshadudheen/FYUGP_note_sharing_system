import React from 'react'
import { Outlet } from "react-router-dom";

function Applayout() {
  return (
    <div>
      
      <main>
        {/* This is where child routes will render */}
        <Outlet />
      </main>
      <footer>My Footer (optional)</footer>
    </div>
  )
}

export default Applayout
