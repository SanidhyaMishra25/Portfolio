import React from 'react';
import {
  FaReact, FaDocker, FaAws, FaNodeJs, FaGitAlt, FaDatabase, FaTools
} from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiPostgresql, SiMysql, SiRedux,
  SiKubernetes, SiHeroku, SiNetlify, SiPhp, SiSpringboot,
  SiRubyonrails, SiGooglecloud
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import {Link} from 'react-router-dom'

const skills = {
  Frontend: [
    { name: 'HTML & CSS', desc: 'Web Markup and Styling', icon: <FaReact className="text-red-600" size={30} /> },
    { name: 'JavaScript', desc: 'Scripting Language', icon: <SiJavascript className="text-red-600" size={30} /> },
    { name: 'TypeScript', desc: 'Type-safe JavaScript', icon: <SiTypescript className="text-red-600" size={30} /> },
    { name: 'React', desc: 'Frontend Framework', icon: <FaReact className="text-red-600" size={30} /> },
  ],
  Backend: [
    { name: 'Ruby on Rails', desc: 'Backend Framework', icon: <SiRubyonrails className="text-red-600" size={30} /> },
    { name: 'PHP', desc: 'Backend Language', icon: <SiPhp className="text-red-600" size={30} /> },
    { name: 'Java', desc: 'OOP Language', icon: <DiJava className="text-red-600" size={30} /> },
    { name: 'Spring Boot', desc: 'Java Framework', icon: <SiSpringboot className="text-red-600" size={30} /> },
    { name: 'Node.js', desc: 'Backend Runtime', icon: <FaNodeJs className="text-red-600" size={30} /> },
  ],
  Databases: [
    { name: 'MySQL', desc: 'Relational Database', icon: <SiMysql className="text-red-600" size={30} /> },
    { name: 'PostgreSQL', desc: 'Relational Database', icon: <SiPostgresql className="text-red-600" size={30} /> },
  ],
  'Cloud & DevOps': [
    { name: 'AWS', desc: 'Cloud Platform', icon: <FaAws className="text-red-600" size={30} /> },
    { name: 'Docker', desc: 'Containerization', icon: <FaDocker className="text-red-600" size={30} /> },
    { name: 'GCP', desc: 'Google Cloud Platform', icon: <SiGooglecloud className="text-red-600" size={30} /> },
    { name: 'Kubernetes', desc: 'Container Orchestration', icon: <SiKubernetes className="text-red-600" size={30} /> },
    { name: 'Netlify', desc: 'Frontend Deployment', icon: <SiNetlify className="text-red-600" size={30} /> },
    { name: 'Heroku', desc: 'Cloud Platform for Apps', icon: <SiHeroku className="text-red-600" size={30} /> },
    { name: 'CI/CD', desc: 'Continuous Integration & Delivery', icon: <FaTools className="text-red-600" size={30} /> }, // replaced SiCicd
  ],
  'Other Tools & Practices': [
    { name: 'Git', desc: 'Version Control', icon: <FaGitAlt className="text-red-600" size={30} /> },
    { name: 'Redux', desc: 'State Management', icon: <SiRedux className="text-red-600" size={30} /> },
  ],
};

const Section = ({ title, items }) => (
  <section className="mb-16 w-full">
    <h2 className="text-3xl font-bold text-white text-center mb-8">
      {title}
      <div className="w-20 h-1 bg-red-600 mt-2 mx-auto rounded"></div>
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center px-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-zinc-900 hover:shadow-lg hover:shadow-red-700 text-white w-64 p-6 rounded-xl text-center transition duration-300 ease-in-out"
        >
          <div className="mb-4 flex justify-center">{item.icon}</div>
          <h3 className="text-xl font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default function Skills() {
  return (
    <div className="bg-black min-h-screen pt-20 pb-10">
      {Object.entries(skills).map(([title, items]) => (
        <Section key={title} title={title} items={items} />
      ))}
    </div>
  );
}
