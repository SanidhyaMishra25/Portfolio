import React from 'react';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Footer from '../components/Footer';

const devSkills = [
  'JavaScript', 'React', 'Node.js', 'TypeScript', 'Redux',
  'Express', 'MongoDB', 'PostgreSQL', 'Docker',
  'Kubernetes', 'AWS', 'CI/CD', 'Microservices', 'Jest', 'Tailwind CSS'
];

function Developer() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-4 py-16 flex flex-col items-center justify-start w-full">
        
        {/* Title & Tagline */}
        <section className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-md mb-2 mt-4">Sanidhya Mishra</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-6">Full Stack Developer</h2>
          <p className="max-w-3xl text-lg md:text-xl text-gray-300 font-medium mx-auto leading-relaxed">
            I build robust, scalable, and maintainable web applications using the latest technologies. 
            My focus is on clean code, performance, and delivering great user experiences.
          </p>
        </section>

        {/* Skills Grid */}
        <section className="w-full max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-red-500">Developer Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {devSkills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-zinc-900 hover:bg-red-600 text-white font-semibold rounded-xl py-4 px-2 shadow-md transform hover:scale-105 transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="w-full max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-red-500 text-center">Featured Projects</h2>
          <Projects />
        </section>

        {/* Certifications Section */}
        <section className="w-full max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-red-500 text-center">Certifications</h2>
          <Certificates />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Developer;
