import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Fotos from './pages/fotos/fotos';
import Contato from './pages/contato/contato';
import Comentarios from './pages/comentarios/cometarios';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/fotos' element={<Fotos />}/>
        <Route path='/contato' element={<Contato />}/>
        <Route path='/cometarios' element={<Comentarios />}/>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
