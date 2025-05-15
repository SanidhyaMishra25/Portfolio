import React from 'react';
import {
  FaReact, FaDocker, FaAws, FaNodeJs, FaGitAlt, FaHtml5, FaCode
} from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiPostgresql, SiMysql, SiRedux,
  SiNetlify, SiSpringboot, SiMongodb, SiExpress
} from 'react-icons/si';

const skills = {
  Frontend: [
    {
      name: 'HTML & CSS',
      desc: 'Semantic markup and responsive layouts with Flexbox and Grid',
      icon: <FaHtml5 className="text-red-600" size={30} />
    },
    {
      name: 'JavaScript',
      desc: 'Modern ES6+ features, DOM manipulation, and async logic',
      icon: <SiJavascript className="text-yellow-500" size={30} />
    },
    {
      name: 'TypeScript',
      desc: 'Type-safe superset of JavaScript for scalable codebases',
      icon: <SiTypescript className="text-blue-600" size={30} />
    },
    {
      name: 'React',
      desc: 'Component-based UI development with hooks and virtual DOM',
      icon: <FaReact className="text-cyan-400" size={30} />
    }
  ],
  Backend: [
    {
      name: 'Node.js',
      desc: 'Scalable JavaScript runtime for building backend services',
      icon: <FaNodeJs className="text-green-600" size={30} />
    },
    {
      name: 'Express.js',
      desc: 'Minimal Node.js framework for APIs and web servers',
      icon: <SiExpress className="text-gray-400" size={30} />
    },
    {
      name: 'C#',
      desc: 'OOP language used with .NET for enterprise applications',
      icon: <FaCode className="text-purple-600" size={30} />
    },
    {
      name: 'Spring Boot',
      desc: 'Java-based framework for building production-ready web apps',
      icon: <SiSpringboot className="text-green-500" size={30} />
    }
  ],
  Databases: [
    {
      name: 'MySQL',
      desc: 'Structured relational database for persistent storage',
      icon: <SiMysql className="text-blue-500" size={30} />
    },
    {
      name: 'PostgreSQL',
      desc: 'Advanced SQL database with JSON and spatial support',
      icon: <SiPostgresql className="text-blue-700" size={30} />
    },
    {
      name: 'MongoDB',
      desc: 'NoSQL document database for flexible JSON-like data',
      icon: <SiMongodb className="text-green-500" size={30} />
    }
  ],
  'Cloud & DevOps': [
    {
      name: 'AWS',
      desc: 'Cloud services for storage, compute, and deployment',
      icon: <FaAws className="text-orange-500" size={30} />
    },
    {
      name: 'Docker',
      desc: 'Lightweight containers for consistent dev environments',
      icon: <FaDocker className="text-blue-400" size={30} />
    },
    {
      name: 'Netlify',
      desc: 'Frontend CI/CD deployment platform with serverless functions',
      icon: <SiNetlify className="text-teal-400" size={30} />
    }
  ],
  'Other Tools & Practices': [
    {
      name: 'Git',
      desc: 'Version control system for source code collaboration',
      icon: <FaGitAlt className="text-orange-600" size={30} />
    },
    {
      name: 'Redux',
      desc: 'Centralized state management for React applications',
      icon: <SiRedux className="text-purple-500" size={30} />
    }
  ]
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
