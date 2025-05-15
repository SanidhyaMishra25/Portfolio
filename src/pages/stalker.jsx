import React from 'react'
import Footer from '../components/Footer'

const stalkerSkills = [
  'Research', 'Data Mining', 'Web Scraping', 'Competitive Analysis', 'Market Research', 'LinkedIn Sourcing', 'Boolean Search', 'Trend Analysis', 'Profiling', 'Networking', 'Social Listening', 'Open Source Intelligence', 'Automation', 'Reporting'
];

const researchTools = [
  {
    name: 'Data Analysis',
    tools: ['Python', 'Pandas', 'NumPy', 'Jupyter Notebooks']
  },
  {
    name: 'Web Research',
    tools: ['Selenium', 'BeautifulSoup', 'Scrapy', 'Postman']
  },
  {
    name: 'Business Intelligence',
    tools: ['Tableau', 'Power BI', 'Google Analytics', 'SEMrush']
  }
];

const methodologies = [
  {
    title: 'Data Collection',
    description: 'Systematic gathering of information from various sources using automated tools and manual research techniques'
  },
  {
    title: 'Analysis & Insights',
    description: 'Processing raw data into meaningful insights using statistical methods and visualization tools'
  },
  {
    title: 'Strategic Recommendations',
    description: 'Translating findings into actionable business strategies and competitive advantages'
  }
];

function Stalker() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white flex flex-col items-center justify-start w-full">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center py-16 px-4 text-center relative animate-fadein">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg pt-8">Sanidhya Mishra</h1>
          <h2 className="text-xl md:text-2xl font-bold text-red-500">Research & Analysis</h2>
          <p className="max-w-2xl text-lg text-gray-200 font-medium">
            I have a knack for finding information, analyzing trends, and uncovering hidden insights. My skills help teams make data-driven decisions and stay ahead of the competition.
          </p>
        </section>

        {/* Research Methodologies */}
        <section className="w-full max-w-4xl mx-auto px-4 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-red-500 text-center">Research Methodologies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {methodologies.map((method, idx) => (
              <div key={idx} className="bg-zinc-900 p-6 rounded-xl hover:bg-red-600 transition-all duration-300 animate-fadein"
                style={{ animationDelay: `${idx * 0.15}s` }}>
                <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                <p className="text-gray-300">{method.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section className="w-full max-w-4xl mx-auto px-4 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-red-500 text-center">Research Tools & Technologies</h2>
          <div className="space-y-8">
            {researchTools.map((category, idx) => (
              <div key={idx} className="bg-zinc-900 p-6 rounded-xl animate-fadein" style={{ animationDelay: `${idx * 0.2}s` }}>
                <h3 className="text-xl font-semibold mb-4 text-red-500">{category.name}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.tools.map((tool, toolIdx) => (
                    <span key={toolIdx} className="bg-zinc-800 px-4 py-2 rounded-full text-sm hover:bg-red-600 transition-all duration-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Grid */}
        <section className="w-full max-w-4xl mx-auto px-4 pb-16 animate-fadein-up">
          <h2 className="text-2xl font-bold mb-6 text-red-500 text-center">Research Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {stalkerSkills.map((skill, idx) => (
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

export default Stalker