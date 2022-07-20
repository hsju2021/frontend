import React from "react";
import { Link, Routes, Route, Navigate, Outlet } from "react-router-dom";

function Navbar() {
    return (
        <div className="Navbar">

          <div className="Navbar-left">
            <div className='Navbar-left-div'>
              <p>NOTICE</p>
            </div>
            <div className='Navbar-left-div'>
              <p>Q&A</p>
            </div>
          </div>

          <div className="Navbar-right">
            <div className='Navbar-right-div'>
              <p>CART</p>
            </div>
            <div className='Navbar-right-div'>
              <p>CHAT</p>
            </div>
            <div className='Navbar-right-div'>
              <p><Link to="/artist">MYPAGE</Link></p>
            </div>
          </div>

        </div>
    )
}

export default Navbar;