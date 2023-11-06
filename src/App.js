import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './components/Inicio';
import SobreMi from './components/SobreMi';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Recomendaciones from './components/Recomendaciones';
import RedesSociales from './components/RedesSociales';
import Testimonios from './components/Testimonios';
import Navbar from './components/Navbar'; 


function App() {
  return (
    <Router>
      <Navbar /> {/* Incluye el componente Navbar */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/recomendaciones" element={<Recomendaciones />} />
        <Route path="/redessociales" element={<RedesSociales />} />
        <Route path="/testimonios" element={<Testimonios />} />
      </Routes>
    </Router>
  );
}





export default App;

