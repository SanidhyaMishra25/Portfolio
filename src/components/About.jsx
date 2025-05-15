import React from 'react';

const timelineData = [
  {
    title: 'Full Stack Developer',
    company: 'Kaizen IT Services',
    duration: '2022 - 2023',
    tools: 'React, Node.js, Express, MongoDB',
    description:
      '• Developed full-stack web applications for client projects.\n• Led module integration and resolved backend issues.\n• Participated in Agile team sprints and code reviews.',
    type: 'work',
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Edu Tutor',
    duration: 'Feb 2025 - Apr 2025',
    tools: 'React, Tailwind CSS, Axios',
    description:
      '• Built responsive components like quizzes, document viewers, and chat interfaces.\n• Integrated APIs and added visual feedback on interactions.',
    type: 'work',
  },
  {
    title: "Advanced Diploma",
    company: 'Centennial College',
    duration: 'Jan 2024 - Apr 2025',
    description:
      '📜 Completed an Advanced Diploma in Software Engineering Technology covering full-stack development, DevOps, cloud, and agile practices.',
    type: 'education',
  },
  {
    title: "Bachelor's Degree",
    company: 'S.S. Jain Subodh College (Rajasthan University)',
    duration: '2020 - 2023',
    description:
      '🎓 Studied core subjects like Data Structures, Web Development, and Database Management.',
    type: 'education',
  },
];

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-4 pt-16">
      {/* Header */}
      <section className="text-center mb-12">
        <br></br>
        <h1 className="text-4xl font-extrabold text-white">Sanidhya Mishra</h1>
        <h2 className="text-xl font-bold text-red-500 mt-2">Full Stack Developer</h2>
      </section>

      {/* Timeline */}
      <div className="relative border-l-4 border-red-600 ml-6 space-y-10 max-w-4xl mx-auto">
        {timelineData.map((item, idx) => (
          <div key={idx} className="relative pl-6">
            <div className="absolute left-[-0.65rem] top-1 w-4 h-4 rounded-full bg-red-600"></div>
            <div className={`p-4 rounded-lg shadow-lg ${item.type === 'education' ? 'bg-pink-800' : 'bg-zinc-900'}`}>
              <h3 className="text-xl font-bold text-white">
                {item.title}{' '}
                <span className="text-sm font-medium text-gray-300">({item.duration})</span>
              </h3>
              <p className="text-sm text-gray-400 font-semibold">{item.company}</p>
              {item.tools && <p className="text-sm mt-1 text-gray-400">🛠️ {item.tools}</p>}
              <p className="text-gray-300 whitespace-pre-line mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
