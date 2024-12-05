import './App.css';
import Comancop from './Compo/Comancop';
import Header from './Compo/Header';
import Card from './Compo/Card';
import Payment from './Compo/Payment';
import Testimonials from './Compo/Testimonial/Testimonials';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/> 
      <Routes>
        <Route path="/" element={<Comancop/>} /> 
        <Route path="/Home" element={<Comancop/>} /> 
        <Route path="/Testimonials" element={<Testimonials/>} /> 
        <Route path="/Services" element={<Comancop/>} />
        <Route path="/Portfolio" element={<Comancop/>} />
        <Route path="/Card" element={<Card/>} />
        <Route path="/Payment" element={<Payment/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
