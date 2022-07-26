import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Slider from "react-slick";
import { Link, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './pages/Login';
import ArtistPage from './pages/ArtistPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GoogleButton from './components/GoogleButton';
import Main from './pages/Main';
import Head from './components/Head';
import Banner from './components/Banner';
import SimpleSlider from './components/Carousel';



function App() {

  return (
    <div className="App">
      <Head />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
