
import React from 'react';
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header'
import Home from './pages/home'
import About from './pages/about-us'
import Contact from './pages/contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
      
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
