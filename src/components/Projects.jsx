import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const projects = [
  {
    title: 'Riipen Project – EduTutor: AI Tutor',
    img: project1,
    desc: '• Developed front-end components using React, including Documents, Quizzes, and Chat Box.\n' +
          '• Implemented dark/light Navbar for better UX.\n' +
          '• Integrated APIs for dynamic quiz data.\n' +
          '• Debugged and optimized performance & accessibility.',
    tech: ['React', 'REST API', 'Dark Mode', 'Vite', 'Git'],
    github: 'https://github.com/edututor/DECOMMISSIONED-front-end.git',
    website: 'https://front-end-production-c493.up.railway.app/login',
  },
  {
    title: 'Student Course Registration System | MERN Stack',
    img: project2,
    desc: '• Built MERN full-stack app with login, enrollment, and admin controls.\n' +
          '• Used JWT, bcrypt for secure API and user management.\n' +
          '• Frontend with React, Bootstrap, Axios. Backend with Node.js, Express, MongoDB.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    github: 'https://github.com/SanidhyaMishra25/course-registration-system',
    website: 'https://college-management-client.onrender.com/',
  },
  {
    title: 'HealthConnect Pro – Advanced Healthcare Monitoring System',
    img: project3,
    desc: '• AI-driven platform for patients and providers.\n' +
          '• Real-time vital sign monitoring, emergency alerts, and AI analysis.\n' +
          '• Role-based access, GraphQL APIs, Gemini AI, HIPAA-compliant.',
    tech: ['React', 'GraphQL', 'Gemini AI', 'MongoDB', 'Apollo'],
    github: '',
    website: '',
  },
];

function Projects() {
  return (
    <>
     
      <div className="min-h-screen bg-black text-white px-6 py-16">
        <h1 className="text-4xl font-bold text-white text-left mb-12 max-w-6xl mx-auto pt-8">
          <span className="text-red-600">My</span> Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-zinc-900 rounded-xl border border-red-600 p-4 shadow-lg">
              <img src={project.img} alt={project.title} className="rounded-lg mb-4 object-cover w-full h-44" />
              <h2 className="text-red-500 font-bold text-xl mb-2">{project.title}</h2>
              <p className="text-gray-300 whitespace-pre-line mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="bg-black text-white text-xs px-2 py-1 rounded-full border border-gray-600">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black text-sm font-semibold px-4 py-2 rounded hover:bg-red-600 hover:text-white transition"
                  >
                    GitHub
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-red-600 transition"
                  >
                    Visit Site
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
