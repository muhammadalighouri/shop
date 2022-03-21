import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ProdDetail from './pages/ProdDetail';

function App() {
  const [catagory, setCatagory] = useState()
  const suth = async () => {
    const rep = await fetch('https://fakestoreapi.com/products')

    const data = await rep.json()

    const upList = data.map(lo => {
      return lo.category
    })
    setCatagory(upList)
    console.log('rweeeeee', upList);
  }
  useEffect(() => {
    suth()
  }, [])

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home catagory={catagory} />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
        <Route exact path='/product/:id' element={<ProdDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
