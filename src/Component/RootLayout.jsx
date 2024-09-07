import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function RootLayout() {
  return (<>
    
    <Navbar />
    <Outlet></Outlet>
    <Footer />
</>
    )
  }