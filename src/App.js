import React from 'react'
import {Routes, Route,Link, BrowserRouter} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import {Layout, Typography, Space} from 'antd';
// import {Footer} from './components/Navbar.jsx';
 import {Navbar} from './components/Navbar';
import {Exchanges} from './components/Exchanges';
import {Homepage} from './components/Homepage';
import {Cryptocurrencies} from './components/Cryptocurrencies';
import {News} from './components/News';
import {CryptoDetails} from './components/CryptoDetails';

import './App.css';
import { navbar } from './components';
const App = () => {
  return (
    <>
    <div className='app'>
      <div className="navbar">
<Navbar/>
      </div>
<div className="main">
<Layout>
  <div className="routes">
    <Routes>
      <Route exact path='/'>
        Homepage
      </Route>
      <Route exact path='/cryptocurrencies'>
        Cryptocurrencies
      </Route>
      <Route exact path='/crypto/:coinId'>
        Crypto Details
      </Route>
      <Route exact path='/exchange'>
        Exchanges
      </Route>
      <Route exact path='/news'>
        News
      </Route>
   
    </Routes>
  </div>
</Layout>
<Homepage/>
<CryptoDetails/>
<div className="footer">
<Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
  CryptoVerse<br/>
  All rights reserved
</Typography.Title>
<Space>
  <Link to="/">Home</Link>
  <Link to="/exchanges">Exchanges</Link>
  <Link to="/cryptocurrencies">Cryptocurrencies</Link>
  <Link to="/news">News</Link>
</Space>
</div>
</div>
    </div>
    </>
  )
}

export default App
