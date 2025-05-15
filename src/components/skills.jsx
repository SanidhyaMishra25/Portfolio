import React from 'react';
import {
  FaReact, FaDocker, FaAws, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiPostgresql, SiMysql, SiRedux,
  SiKubernetes, SiHeroku, SiNetlify, SiSpringboot, SiExpress,
  SiCsharp, SiMongodb
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { Link } from 'react-router-dom';

const skills = {
  Frontend: [
    { name: 'HTML & CSS', desc: 'Markup & Styling Languages', icon: <FaHtml5 className="text-orange-500" size={30} /> },
    { name: 'JavaScript', desc: 'Client-side Scripting Language', icon: <SiJavascript className="text-yellow-500" size={30} /> },
    { name: 'TypeScript', desc: 'Strongly Typed JavaScript', icon: <SiTypescript className="text-blue-600" size={30} /> },
    { name: 'React', desc: 'JavaScript Library for UI', icon: <FaReact className="text-cyan-400" size={30} /> },
  ],
  Backend: [
    { name: 'Node.js', desc: 'JavaScript Runtime Environment', icon: <FaNodeJs className="text-green-600" size={30} /> },
    { name: 'Express.js', desc: 'Web Framework for Node.js', icon: <SiExpress className="text-gray-500" size={30} /> },
    { name: 'C#', desc: 'OOP Language for .NET Development', icon: <SiCsharp className="text-purple-600" size={30} /> },
    { name: 'Spring Boot', desc: 'Java-based Web Framework', icon: <SiSpringboot className="text-green-600" size={30} /> },
  ],
  Databases: [
    { name: 'MySQL', desc: 'Relational Database System', icon: <SiMysql className="text-blue-500" size={30} /> },
    { name: 'PostgreSQL', desc: 'Advanced Relational Database', icon: <SiPostgresql className="text-blue-700" size={30} /> },
    { name: 'MongoDB', desc: 'NoSQL Document Database', icon: <SiMongodb className="text-green-500" size={30} /> },
  ],
  'Cloud & DevOps': [
    { name: 'AWS', desc: 'Cloud Services Platform', icon: <FaAws className="text-orange-400" size={30} /> },
    { name: 'Docker', desc: 'Containerization Platform', icon: <FaDocker className="text-blue-400" size={30} /> },
    { name: 'Netlify', desc: 'Frontend Hosting Platform', icon: <SiNetlify className="text-teal-400" size={30} /> },
  ],
  'Other Tools & Practices': [
    { name: 'Git', desc: 'Version Control System', icon: <FaGitAlt className="text-orange-600" size={30} /> },
    { name: 'Redux', desc: 'State Management Library', icon: <SiRedux className="text-purple-500" size={30} /> },
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
