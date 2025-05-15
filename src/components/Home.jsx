import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import netflixSound from '../assets/netflixIntroSound.mp3';

const TRAIL_LENGTH = 40; // Longer trail for drawing
const SPOTLIGHT_SIZE = 120; // px, smaller and more focused

function Home() {
  const [hasStarted, setHasStarted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [trail, setTrail] = useState([
    { x: 0.5, y: 0.5 },
  ]);
  const [zoomOut, setZoomOut] = useState(false); // For Netflix zoom effect
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  // Mouse move handler for spotlight trail
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setTrail((prev) => {
      const next = [...prev, { x, y }];
      return next.length > TRAIL_LENGTH ? next.slice(-TRAIL_LENGTH) : next;
    });
  };

  const startIntro = () => {
    setHasStarted(true);
    // Play sound
    const audio = new Audio(netflixSound);
    audioRef.current = audio;
    audio.play().catch(() => {});
    // When audio ends, trigger zoom out
    audio.addEventListener('ended', () => {
      setZoomOut(true);
      setTimeout(() => {
        setHidden(true);
        setTimeout(() => setShowWelcome(true), 400);
        navigate('/browse');
      }, 1200); // Wait for zoom animation
    });
    // Play video
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
      // If video ends before audio, also trigger zoom out
      video.addEventListener('ended', () => {
        if (!zoomOut) {
          setZoomOut(true);
          setTimeout(() => {
            setHidden(true);
            setTimeout(() => setShowWelcome(true), 400);
            navigate('/browse');
          }, 1200);
        }
      });
    }
  };

  const skipIntro = () => {
    setHidden(true);
    setTimeout(() => setShowWelcome(true), 400);
    navigate('/browse');
  };

  return (
    <div
      className="h-screen w-screen overflow-hidden relative flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* Soft Animated Gradient Background */}
      <div className="absolute inset-0 z-0 animate-soft-gradient bg-gradient-to-br from-zinc-900 via-black to-red-900 bg-[length:200%_200%]" />

      {/* Red Trail Follows Mouse */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-full h-full z-10"
        style={{ mixBlendMode: 'lighter' }}
      >
        {trail.map((pos, i) => {
          // Fade and shrink older spots, but fade slower for longer trail
          const opacity = 0.22 * (1 - i / (TRAIL_LENGTH * 1.15));
          const size = SPOTLIGHT_SIZE * (1 - i / (TRAIL_LENGTH * 1.5));
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `calc(${pos.x * 100}% - ${size / 2}px)` ,
                top: `calc(${pos.y * 100}% - ${size / 2}px)` ,
                width: `${size}px`,
                height: `${size}px`,
                background: `radial-gradient(circle, rgba(255,0,64,${opacity}) 0%, rgba(255,0,64,0.08) 60%, transparent 100%)`,
                filter: 'blur(12px)',
                transition: 'left 0.18s cubic-bezier(.4,2,.6,1), top 0.18s cubic-bezier(.4,2,.6,1)',
                pointerEvents: 'none',
              }}
            />
          );
        })}
      </div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        {/* Start Button */}
        {!hasStarted && (
          <button
            onClick={startIntro}
            className="text-white text-2xl md:text-3xl px-10 py-4 rounded-lg shadow-lg bg-gradient-to-r from-red-600 via-zinc-800 to-black font-semibold tracking-wide border border-white/10 hover:scale-105 hover:shadow-red-400/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 relative"
            style={{ zIndex: 30 }}
          >
            Enter Portfolio
          </button>
        )}

        {/* Skip Button */}
        {hasStarted && !hidden && (
          <button
            onClick={skipIntro}
            className="absolute top-8 right-8 text-white bg-black/60 px-4 py-2 rounded-lg border border-white/10 shadow hover:bg-red-600 transition-all z-30 text-base"
          >
            Skip
          </button>
        )}

        {/* Optional: Video Intro with Netflix Zoom-Out */}
        {!hidden && (
          <video
            ref={videoRef}
            src="/sanidhya_name_fill.mp4"
            muted={false}
            playsInline
            className={`w-[90vw] max-w-[500px] transition-all duration-1000 ease-in-out rounded-xl shadow-xl border-2 border-white/10 bg-black/80
              ${hasStarted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
              ${zoomOut ? 'netflix-zoom' : ''}`}
            style={{ zIndex: 30 }}
          />
        )}

        {/* Animated Welcome Text - only after video is hidden */}
        {showWelcome && hidden && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none animate-fadein-pro">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center mb-3">
              Welcome to <span className="text-red-500">Sanidhya's Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 text-center max-w-xl">
              Explore my work, skills, and experience in web development.
            </p>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style>{`
        .animate-soft-gradient {
          animation: softGradientBG 16s ease-in-out infinite;
        }
        @keyframes softGradientBG {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-fadein-pro {
          animation: fadeinPro 1.2s cubic-bezier(.4,2,.6,1) both;
        }
        @keyframes fadeinPro {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .netflix-zoom {
          transform: scale(2.2);
          opacity: 0;
          transition: transform 1.1s cubic-bezier(.4,2,.6,1), opacity 1.1s cubic-bezier(.4,2,.6,1);
        }
      `}</style>
    </div>
  );
}

export default Home;
