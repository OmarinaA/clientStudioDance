import './App.css';
import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import {BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Directions from './Directions';
import Teachers from './Teachers';
import Abonements from './Abonements';
import Registration from './Registration';
import Login from './Login';
import Profile from './Profile';
import Modern from './Modern';
import Ballet from './Ballet';
import Stretching from './Stretching';

const App = () => {
  return(
    <>
    <Header />
    <main>
      <Container>
      <Router>
<div>
<hr/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Directions' element={<Directions/>}/>
<Route path='/Teachers' element={<Teachers/>}/>
<Route path='/Abonements' element={<Abonements/>}/>
<Route path='/Registration' element={<Registration/>}/>
<Route path='/Login' element={<Login/>}/>
<Route path='/Profile' element={<Profile/>}/>
<Route path='/Modern' element={<Modern/>}/>
<Route path='/Ballet' element={<Ballet/>}/>
<Route path='/Stretching' element={<Stretching/>}/>
</Routes>
</div>
</Router>

      </Container>
    </main>
</>
  )
}

export default App;