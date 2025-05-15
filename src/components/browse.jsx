import React from 'react';
import { useNavigate } from 'react-router-dom';

function Browse() {
  const navigate = useNavigate();

  const profiles = [
    { name: 'Recruiter', img: '/blue.png', path: '/recruiter' },
    { name: 'Developer', img: '/gray.png', path: '/developer' },
    { name: 'Stalker', img: '/red.png', path: '/stalker' },
    { name: 'Adventurer', img: '/yellow.png', path: '/adventurer' }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-12">Who's Watching?</h1>
      <div className="flex gap-6 flex-wrap justify-center">
        {profiles.map((profile, index) => (
          <div
            key={index}
            onClick={() => navigate(profile.path)}
            className="text-center cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={profile.img}
              alt={profile.name}
              className="w-28 h-28 rounded mb-2"
            />
            <p className="text-lg">{profile.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browse;
