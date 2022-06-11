import React from 'react'
import { useState,useEffect } from 'react';
import { Button, Menu,Typography,Avatar } from 'antd';
import {Link} from 'react-router-dom';
import { HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined } from '@ant-design/icons/lib/icons';
import { icons } from 'antd/lib/image/PreviewGroup';
import icon from '../images/cryptocurrency.png';

export const Navbar = () => {

  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);


  return (
    <div className="nav-container">
<div className="logo-container">
    <Avatar src={icon} size="large"/>
    <Typography.Title level={2} className="logo">
    <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>

           
         <Link to="/">CryptoVerse</Link>
 
    </Typography.Title>
    </div>
    {activeMenu &&(
         <Menu theme="dark">
           <Menu.Item key="1" icon={<HomeOutlined/>}></Menu.Item>
           <Link to="/">Home</Link>
           <Menu.Item key="2" icon={<FundOutlined/>}></Menu.Item>
           <Link to="/cryptocurrencies">CryptoCurrencies</Link>
           <Menu.Item key="3" icon={<MoneyCollectOutlined/>}></Menu.Item>
           <Link to="/exchanges">Exchanges</Link>
           <Menu.Item key="4" icon={<BulbOutlined/>}></Menu.Item>
           <Link to="/news">News</Link>
           </Menu>
    )}       
    </div>
  )
}

export default Navbar
