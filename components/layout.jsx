/* 
  * Student's Name: Sanidhya Mishra
 * StudentID: 301426349
 * Date: 2024-05-26
 */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.png';
import '../components/layout.css';
export default function Layout() {
 return (
 <>
 <nav className='navbar'>
    <div className='navbar-logo'>
    < img src={logo}alt="logo" className="logo"/>
    </div>
    <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul> 
 </nav>
<br/>
 
 </>
 
 );
}
