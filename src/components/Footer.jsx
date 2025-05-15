import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-6 flex flex-col items-center border-t border-zinc-800 mt-8">
      <div className="text-lg font-bold mb-2">
        Sanidhya Mishra
      </div>
      <div className="flex gap-6 mb-2">
        <a
          href="https://www.linkedin.com/in/sanidhyamishra25"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/SanidhyaMishra25"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transition"
        >
          GitHub
        </a>
      </div>
      <div className="text-xs text-gray-500">&copy; {new Date().getFullYear()} All rights reserved.</div>
    </footer>
  );
}

export default Footer;