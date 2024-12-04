import './App.css';
import Comancop from './Compo/Comancop';
import Header from './Compo/Header';
import Card from './Compo/Card';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/> 
      <Routes>
        <Route path="/" element={<Comancop/>} /> 
        <Route path="/Home" element={<Comancop/>} /> 
        <Route path="/Pages" element={<Comancop/>} /> 
        <Route path="/Services" element={<Comancop/>} />
        <Route path="/Portfolio" element={<Comancop/>} />
        <Route path="/Blog" element={<Card/>} />
        <Route path="/Contects" element={<Comancop/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
