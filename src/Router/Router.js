import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import About from '../pages/About'
import Error from '../pages/Error'
import Logement from '../pages/Logement'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Router() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route exact path= "kasa/" element= {<Home/>}/>
        <Route exact path= "kasa/a-propos" element= {<About/>}/>
        <Route exact path= "kasa/logement" element= {<Logement/>}/>
        <Route exact path= "*" element= {<Error/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   
  )
}
