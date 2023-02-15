import Home from "./pages/Home";
import React from "react";
import Header from "./components/Header/Header";

import AboutUs from "./components/About-us/AboutUs";
import Services from "./components/Services-section/Services";

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      
       <Routes>
       <Route  path='/' element={<Home />} />
       <Route  path='/about' element={<AboutUs />} />
       
       <Route  path='/service' element={<Services />} />
       <Route  path='/contact' element={<Contact />} />
       
      
      
      
       
       </Routes>
       
      
       <Footer/>
       </Router>
       </div>
  
);
  
}

export default App;