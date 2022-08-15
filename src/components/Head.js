import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
import Navbar from './Navbar';
import Dropdown from './Dropdown';
import './Head.css'

const Head = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const [dropdown5, setDropdown5] = useState(false);

  const onMouseEnter = () => setDropdown(true);
  const onMouseLeave = () => setDropdown(false);

  const onMouseEnter2 = () => setDropdown2(true);
  const onMouseLeave2 = () => setDropdown2(false);

  const onMouseEnter3 = () => setDropdown3(true);
  const onMouseLeave3 = () => setDropdown3(false);

  const onMouseEnter4 = () => setDropdown4(true);
  const onMouseLeave4 = () => setDropdown4(false);

  const onMouseEnter5 = () => setDropdown5(true);
  const onMouseLeave5 = () => setDropdown5(false);

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
        <p className='category-ceramics' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Link to='/categories'>Ceramics</Link>
          {dropdown && <Dropdown />}
        </p>
        <p className='category-glass' onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
          Glass
          {dropdown2 && <Dropdown />}
        </p>
        <p className='category-resin' onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}>
          Resin/Beads
          {dropdown3 && <Dropdown />}
        </p>
        <p className='category-resin' onMouseEnter={onMouseEnter4} onMouseLeave={onMouseLeave4}>
          Metal
          {dropdown4 && <Dropdown />}
        </p>
        <p className='category-resin' onMouseEnter={onMouseEnter5} onMouseLeave={onMouseLeave5}>
          Leather
          {dropdown5 && <Dropdown />}
        </p>
        <p>etc.</p>
      </div>
    </>
  )
}

export default Head;