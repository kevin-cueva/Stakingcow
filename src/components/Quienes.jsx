import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import './Quienes.css';
  const quienes = [
    {'nombre':'¿Quiénes Somos?',
     'descripcion':'Somos una empresa cooperativa que vincula dos tipos de negocios, el mercado bovino y del NFT la combinación entre estos dos mercados crea una innovación de un nuevo modelo de negocios',
    },
     {'nombre':'Intermedio',
      'descripcion':'descripcion del plan Intermedio',
      'valor':'10 $'},
     {'nombre':'Premiun',
      'descripcion':'descripcion del plan Premiun',
      'valor':'15 $'},
     {'nombre':'Empresarial',
      'descripcion':'descripcion del plan Empresarial',
      'valor':'A convenir $'},
  ]
const Quienes =()=>{
  return(
    <>
    <Navbar></Navbar>
      <div className="container-quienes">
          {quienes.map((item) =>
            <>
                <div className="card">
                  <div className="nombre">{item.nombre}</div>
                  <div className="descripcion">{item.descripcion}</div>
                  <div className="valor">{item.valor}</div>
                </div>
            </>
          )}
      </div>
    </>
  );

}

export default Quienes;
