import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import Contenido from './Contenido';

const Home = ()=>{
  return(
    <>
      <Navbar></Navbar>
      <Contenido></Contenido>
      <Footer></Footer>
    </>
  );
}

export default Home;
