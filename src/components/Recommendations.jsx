import React from 'react';

const recommendations = [
  {
    name: 'Vijayalakshmi',
    title: 'Professor, Data Warehousing and Predictive Analytics',
    institution: 'Centennial College',
    date: 'April 2025',
    message:
      'Sanidhya demonstrated strong technical skills in SQL, ETL design, and predictive analytics using Python and Power BI. He was consistent, collaborative, and a reliable student throughout the semester.',
    file: '/assets/recommendation_vijayalakshmi.docx',
  },
  {
    name: 'Faranak Ghafouri',
    title: 'Professor, Enterprise Systems Integration',
    institution: 'Centennial College',
    date: 'April 28, 2025',
    message:
      'Sanidhya displayed great understanding of ERP, CRM, and UML tools. He is proactive, supports peers, and brings strong leadership and responsibility to group projects.',
    file: '/assets/recommendation_faranak.docx',
  },
];

function Recommendations() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-10 mt-10">Letters of Recommendation</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-white mb-1">{rec.name}</h2>
            <p className="text-sm text-gray-400">{rec.title}</p>
            <p className="text-sm text-gray-400 mb-2">{rec.institution}</p>
            <p className="text-gray-300 italic mb-4">"{rec.message}"</p>
            <a
              href={rec.file}
              download
              className="text-red-500 font-medium underline hover:text-white transition-colors"
            >
              Download Letter
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
