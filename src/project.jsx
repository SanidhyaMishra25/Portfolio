/* 
  * Student's Name: Sanidhya Mishra
 * StudentID: 301426349
 * Date: 2024-05-26
 */
import project1 from '../src/assets/project1.png';
import project2 from '../src/assets/project2.jpg';
import project3 from '../src/assets/project3.png';
import { Link } from 'react-router-dom';
import '../src/index.css';
import '../src/project.css';

export default function Project() {
    return (
        <>
            <section id="works">
                <h2 className="worksTitle">Recent Projects</h2>
                {/* <span className="worksDesc">I take pride in paying attention to the smallest details and making sure my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span> */}
                <div className="worksContainer">
                    
                    <div className="project">
                        <img src={project2} alt="project1" className="worksImg" />
                        <div className="projectDesc">
                            <h3>Personal Portfolio Website</h3>
                            <p> A personal portfolio website that showcases your professional background, skills, and projects. 
                                It includes sections like About Me, Projects, and Contact, providing an engaging and informative introduction to potential employers or clients. </p>
                        </div>
                    </div>
                    <div className="project">
                        <img src={project1} alt="project2" className="worksImg" />
                        <div className="projectDesc">
                            <h3>Simple To-Do List Application</h3>
                            <p className='para1'>A to-do list application that allows users to add, edit, delete, and mark tasks as completed. 
                            This project demonstrates the ability to handle basic CRUD operations and maintain persistent state using local storage.
                            </p>
                        </div>
                    </div>
                    <div className="project">
                        <img src={project3} alt="project3" className="worksImg" />
                        <div className="projectDesc">
                            <h3>Weather App</h3>
                            <p className='para1'>A weather application that fetches real-time weather data for any city using a weather API. 
                            It displays current conditions and a 5-day forecast, showcasing the ability to integrate and display data from external APIs.</p>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    );
}
