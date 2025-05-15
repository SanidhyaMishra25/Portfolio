import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import this
import netflixSound from '../assets/netflixIntroSound.mp3';

function Home() {
  const [hasStarted, setHasStarted] = useState(false);
  const [scaleUp, setScaleUp] = useState(false);
  const [hidden, setHidden] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate(); // ✅ Initialize it

  const startIntro = () => {
    setHasStarted(true);

    const audio = new Audio(netflixSound);
    audio.play().catch(err => {
      console.warn('Audio play error:', err.message);
    });

    const video = videoRef.current;
    if (video) {
      video.play().catch(err => {
        console.warn('Video play error:', err.message);
      });

      video.addEventListener('ended', () => {
        setScaleUp(true);
        setTimeout(() => {
          setHidden(true);
          navigate('/browse'); // ✅ Navigate after animation
        }, 1000);
      });
    }
  };

  return (
    <div className="h-screen bg-black flex justify-center items-center overflow-hidden relative">
      {!hasStarted && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
          <button
            onClick={startIntro}
            className="text-white text-2xl border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition"
          >
            Click to Start
          </button>
        </div>
      )}

      {!hidden && (
        <video
          ref={videoRef}
          src="/sanidhya_name_fill.mp4"
          muted={false}
          playsInline
          className={`w-[600px] transition-all duration-1000 ease-in-out 
            ${scaleUp ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}
        />
      )}
    </div>
  );
}

export default Home;
