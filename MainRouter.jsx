/* 
  * Student's Name: Sanidhya Mishra
 * StudentID: 301426349
 * Date: 2024-05-26
 */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/About'
import Contact from './src/contact'
import Services from './src/services'
import Project from './src/project'
import Layout from './components/layout'
const MainRouter = () => {
 return (<div>
 <Layout/>
 <Routes>
 
<Route exact path="/" element={<About />} />
<Route exact path="/about" element={<Home />} />
<Route exact path="/services" element={<Services />} />
<Route exact path="/project" element={<Project />} />
<Route exact path="/contact" element={<Contact />} />
 
 </Routes>
 </div>
 )
}
export default MainRouter

