/* 
  * Student's Name: Sanidhya Mishra
 * StudentID: 301426349
 * Date: 2024-05-26
 */
import React from 'react';
import BBG from '../src/assets/BBG.jpg';
import res from '../src/assets/resume.pdf';
import { Link } from 'react-router-dom';
import '../src/home.css';

export default function Home() {
  return (
    <section id="intro">
      <div className="introContent">
        
        <span className="introName">Sanidhya Mishra</span>
        <img src={BBG} alt="profile" className="bbg" />
        <h2 className="jobTitle">Web Developer</h2>
        <a href={res} target="_blank"><button className="workBtn">Resume</button></a>
      </div>
      <div className="introPara">
      <p className='para'>
          
        </p>
      </div>
    
    </section>
    
  );
}
