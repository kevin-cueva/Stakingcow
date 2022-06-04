import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';

import './Quienes.css';
  const quienes = [
    {'nombre':'¿Quiénes Somos?',
     'descripcion':'Somos una empresa cooperativa que vincula dos tipos de negocios, el mercado bovino y del NFT la combinación entre estos dos mercados crea una innovación de un nuevo modelo de negocios',
    },
     {'nombre':'Misión',
      'descripcion':'garantizar calidad y precio de nuestro producto mediante técnicas agrícolas que permitan el sumo cuidado de los bienes a comercializar. implementar contratos de servicios justos hacia los inversionistas.',
    },
     {'nombre':'Visión',
      'descripcion':'ampliar la asociación de los campesinos hacia todo el territorio Colombiano y posicionar la marca entre los más rentable del país',
     },
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
      <Footer></Footer>
    </>
  );

}

export default Quienes;
