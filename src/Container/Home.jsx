import React from 'react'
import Header from '../components/Header'
import { Route, Routes } from 'react-router'
import Dashboard from './Dashboard'
import Singleproduct from './Singleproduct'

import Cart from './Cart'


function Home() {
  return (
    
    <div>
       <Header/>
       <Routes>
       <Route path='/' element={<Dashboard/>}/>
       <Route path='/Singleproduct/:id' element={<Singleproduct/>}/>
       <Route path='/cart' element={<Cart/>}/>
       </Routes>
    </div>
  )
}

export default Home