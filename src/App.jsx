
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quienes from './components/Quienes';

import {BrowserRouter, Routes, Route} from 'react-router-dom'; // Trae estos componentes Para las rutas
function App() {
  return (
    <>
    <div>
    <Routes>
      <Route path="/Stakingcow" element={<Home />}/> {/*Ruta raiz*/}
      <Route path="Stakingcow/somos" element={<Quienes />}/> {/*Ruta raiz*/}
    </Routes>
    </div>
    </>
  )
}

export default App;
