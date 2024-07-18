/* 
  * Student's Name: Sanidhya Mishra
 * StudentID: 301426349
 * Date: 2024-05-26
 */
import React from 'react';
import './services.css';

// Example images for services
import webDevelopment from '../src/assets/webDevelopment.jpg';
import mobileApps from '../src/assets/mobileApps.jpg';


export default function Services() {
    return (
        <section id="services">
            <h2 className="servicesTitle"> My Services</h2>
            <div className="servicesContainer">
                <div className="service">
                    <img src={webDevelopment} alt="Web Development" className="serviceImg" />
                    <h3 className='pcolor'>Web Development</h3>
                    <span className='pcolor'>I offer full-stack web development services to build dynamic and responsive websites using the latest technologies.</span>
                </div>
                <div className="service">
                    <img src={mobileApps} alt="Mobile App Development" className="serviceImg" />
                    <h3 className='pcolor'>Mobile App Development</h3>
                    <span className='pcolor'>Creating user-friendly and functional mobile applications for both Android and iOS platforms.</span>
                </div>
                
            </div>
        </section>
    );
}
