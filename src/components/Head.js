import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Dropdown from './Dropdown';
import './Head.css'

const Head = () => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => setDropdown(true);
  const onMouseLeave = () => setDropdown(false);
  return (
    <>
      <header className="App-header">
        <Link to="/login">LOGIN / REGISTER</Link>
        <h1><Link to="/"><img src='./logo.png' alt='logo' /></Link></h1>
      </header>
      <Navbar />
      <div className='SearchBar'>
        <input type="text" placeholder="SEARCH" />
      </div>


      <div className="CategoryBar">
        <p><b>All</b></p>
        <p className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Link to='/categories'>Ceramics</Link>
          {dropdown && <Dropdown />}
        </p>
        <p>Glass</p>
        <p>Resin/Beads</p>
        <p>Metal</p>
        <p>Leather</p>
        <p>etc.</p>
      </div>
    </>
  )
}

export default Head;