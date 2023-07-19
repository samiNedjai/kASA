
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Logement from './pages/Logement'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
     <div >
         <BrowserRouter>
    <Header/>
    <Routes>
        <Route exact path= "/" element= {<Home/>}/>
        <Route exact path= "/a-propos" element= {<About/>}/>
        <Route  path= "/logement/:id" element= {<Logement/>}/>
        <Route exact path= "*" element= {<Error/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
       
    </div>
  );
}

export default App;
