import './App.css';
import Comancop from './Compo/Comancop';
import Header from './Compo/Header';
// import Card from './Compo/Card';
import Coming from './Compo/Comming/Comming';
import Payment from './Compo/Payment';
import Cardhover from './Compo/Cardhover/Cardhover';
import Divinepow from './Compo/Hovercard/Divinepow';
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
        <Route path="/Services" element={<Divinepow/>} />
        <Route path="/Portfolio" element={<Cardhover/>} />
        <Route path="/Card" element={<Coming/>} />
        <Route path="/Payment" element={<Payment/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
