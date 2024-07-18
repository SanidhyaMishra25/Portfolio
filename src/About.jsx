/* 
  * Student's Name: Sanidhya Mishra
 * StudentID: 301426349
 * Date: 2024-05-26
 */
// import ux from '../src/assets/ux.png'

import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/about.css'
export default function About() {
     return <>
     <section id="skill">
         
        
         <span className="skillDesc">Hello! I'm Sanidhya Mishra an international student from India, currently studying Software Engineering and Technology at Centennial College in Canada. 
         I'm passionate about  programming , and I'm actively learning technologies like C#, Java, Python, and web development. 
         With a focus on tools like  GitHub Actions , I'm dedicated to building efficient, scalable solutions. Welcome to my journey in the tech world!</span>        
         <div className="btn">
               <Link to="/about"><button className="btncolor"><p className='hire'>Hire Me</p></button></Link>
          </div>
    </section>
     
     
     </>
    }
// Compare this snippet from client/src/Education.jsx:
