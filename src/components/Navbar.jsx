import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'
const Navbar = ()=>{
  return(
    <>
  <div className="container-navbar">
    <div className="nombre-empresa" style={{color:"white"}}><Link to="/Stakingcow"><h2>Stakingcow</h2></Link></div>
    <div className="elementos-navbar">
        <ul className="ul-navbar">
          <li className="li-navbar"><Link to="/Stakingcow/soluciones"><h3>Soluciones</h3></Link></li>
          <li className="li-navbar"><Link to="/Stakingcow/somos"><h3>Quienes somos</h3></Link></li>
          <li className="li-navbar"><Link to="/Stakingcow/talento"><h3>Talentos</h3></Link></li>
        </ul>
    </div>
    <div className="persona-empresa">
      <ul className="ul-navbar">
        <li className="li-navbar"><Link to="/fisherwall/personas"><h3>Personas</h3></Link></li>
        <li className="li-navbar"><Link to="/fisherwall/empresas"><h3>Empresas</h3></Link></li>
      </ul>
    </div>
  </div>
    </>
  );

}
export default Navbar;
