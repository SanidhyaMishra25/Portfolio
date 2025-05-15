import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Dynamic profile image based on path
  const getProfileImage = () => {
    if (location.pathname.includes('/developer')) return '/gray.png';
    if (location.pathname.includes('/stalker')) return '/red.png';
    if (location.pathname.includes('/adventurer')) return '/yellow.png';
    if (location.pathname.includes('/recruiter')) return '/blue.png';
    return '/profile.png'; // default or fallback
  };

  const profiles = [
    { name: 'Recruiter', path: '/recruiter', img: '/blue.png' },
    { name: 'Developer', path: '/developer', img: '/gray.png' },
    { name: 'Stalker', path: '/stalker', img: '/red.png' },
    { name: 'Adventurer', path: '/adventurer', img: '/yellow.png' }
  ];

  const navLinks = [
    { name: 'Home', path: '/browse' },
    { name: 'Professional', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Hire Me', path: '/contact' },
  ];

  // Close mobile menu when clicking outside
  const handleClickOutside = (e) => {
    if (isOpen && !e.target.closest('nav')) {
      setIsOpen(false);
    }
  };

  // Add click outside listener
  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm shadow-md border-b border-white/5 px-4 md:px-6 py-4 flex items-center justify-between transition-all duration-300">
        {/* Left: Logo / Name */}
        <div className="flex items-center">
          <img src="/Name.png" alt="Logo" className="w-24 md:w-30 h-8 md:h-10 mr-2 drop-shadow-lg" />
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-red-500 transition-colors duration-200"
            aria-label="Open navigation menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Center: Nav links (desktop) */}
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <li key={link.name} className="mb-0">
              <Link
                to={link.path}
                className={`relative px-2 py-1 transition-colors text-white duration-200 hover:text-red-500 font-semibold block md:inline-block ${location.pathname === link.path ? 'text-red-500' : ''}`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute left-0 -bottom-1 w-full h-1 bg-red-500 rounded-full animate-fadein" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Profile image with toggle (desktop) */}
        <div className="hidden md:block relative">
          <img
            src={getProfileImage()}
            alt="Profile"
            className="w-8 h-8 rounded-full cursor-pointer border-2 border-white/50 shadow-lg hover:border-red-500 transition"
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </div>
      </nav>

      {/* Full-screen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-lg animate-slideIn overflow-y-auto">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-3xl p-2 rounded-full hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          
          {/* Mobile Navigation Links */}
          <ul className="flex flex-col items-center justify-center gap-6 px-4 py-8">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full text-center">
                <Link
                  to={link.path}
                  className={`text-xl font-semibold px-6 py-4 block rounded-lg transition-colors duration-200 ${
                    location.pathname === link.path ? 'text-red-500' : 'text-white'
                  } hover:bg-zinc-800/80`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Profile Section */}
          <div className="mt-8 px-4 pb-8">
            <h2 className="text-xl text-white font-semibold mb-6 text-center">Switch Profile</h2>
            <div className="grid grid-cols-2 gap-4">
              {profiles.map((profile, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-lg cursor-pointer hover:bg-zinc-800/80 transition-colors duration-200"
                  onClick={() => {
                    navigate(profile.path);
                    setIsOpen(false);
                  }}
                >
                  <img 
                    src={profile.img} 
                    alt={profile.name} 
                    className="w-16 h-16 rounded-full border-2 border-white/20 mb-2" 
                  />
                  <span className="font-medium text-white text-center">{profile.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Sidebar overlay (desktop only) */}
      {showSidebar && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setShowSidebar(false)}
          />
          {/* Sidebar */}
          <div className="fixed top-0 right-0 w-72 h-full bg-zinc-900/95 backdrop-blur-lg text-white shadow-lg z-50 p-6 transform transition-transform duration-300 ease-in-out animate-slideIn">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Switch Profile</h2>
              <button
                onClick={() => setShowSidebar(false)}
                className="text-gray-400 hover:text-white text-2xl transition-colors duration-200"
              >
                ×
              </button>
            </div>
            <ul className="space-y-4">
              {profiles.map((profile, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg cursor-pointer hover:bg-zinc-800/80 transition-colors duration-200"
                  onClick={() => {
                    navigate(profile.path);
                    setShowSidebar(false);
                  }}
                >
                  <img src={profile.img} alt={profile.name} className="w-10 h-10 rounded-full border-2 border-white/20" />
                  <span className="font-medium">{profile.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
