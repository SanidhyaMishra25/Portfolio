import React from 'react'
import Footer from '../components/Footer'

const adventurerSkills = [
  'Learning', 'Exploring', 'Creativity', 'Problem Solving', 'Adaptability', 'Teamwork', 'Curiosity', 'Innovation', 'Travel', 'Storytelling', 'Growth Mindset', 'Networking', 'Experimentation', 'Leadership'
];

const journeyTimeline = [
  {
    year: '2023',
    title: 'Tech Exploration',
    description: 'Dived deep into emerging technologies and AI'
  },
  {
    year: '2022',
    title: 'Global Connections',
    description: 'Built international professional network'
  },
  {
    year: '2021',
    title: 'Learning Journey',
    description: 'Started formal education in web development'
  }
];

const interests = [
  {
    title: 'Tech Innovation',
    description: 'Exploring cutting-edge technologies and their applications'
  },
  {
    title: 'Cultural Exchange',
    description: 'Learning from diverse perspectives and global communities'
  },
  {
    title: 'Personal Growth',
    description: 'Continuous learning and skill development'
  }
];

function Adventurer() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white flex flex-col items-center justify-start w-full">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center py-16 px-4 text-center relative animate-fadein">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-white drop-shadow-lg pt-8">Sanidhya Mishra</h1>
          <h2 className="text-xl md:text-2xl font-bold text-red-500 mb-4">Adventurer & Explorer</h2>
          <p className="max-w-2xl text-lg text-gray-200 font-medium mb-6 mx-auto">
            I love exploring new technologies, learning from every experience, and bringing creativity to every project. My adventurous spirit drives me to innovate and grow continuously.
          </p>
        </section>

        {/* Journey Timeline */}
        <section className="w-full max-w-4xl mx-auto px-4 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-red-500 text-center">My Journey</h2>
          <div className="space-y-8">
            {journeyTimeline.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4 animate-fadein" style={{ animationDelay: `${idx * 0.2}s` }}>
                <div className="flex-shrink-0 w-24 text-red-500 font-bold">{item.year}</div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interests Section */}
        <section className="w-full max-w-4xl mx-auto px-4 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-red-500 text-center">Areas of Interest</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((interest, idx) => (
              <div key={idx} className="bg-zinc-900 p-6 rounded-xl hover:bg-red-600 transition-all duration-300 animate-fadein"
                style={{ animationDelay: `${idx * 0.15}s` }}>
                <h3 className="text-xl font-semibold mb-3">{interest.title}</h3>
                <p className="text-gray-300">{interest.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Grid */}
        <section className="w-full max-w-4xl mx-auto px-4 pb-16 animate-fadein-up">
          <h2 className="text-2xl font-bold mb-6 text-red-500 text-center">Adventurer Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {adventurerSkills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-zinc-900 rounded-xl py-4 px-2 text-center font-semibold text-white shadow-lg hover:bg-red-600 hover:scale-105 transition-all duration-300 cursor-pointer animate-fadein"
                style={{ animationDelay: `${idx * 0.07 + 0.1}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Adventurer