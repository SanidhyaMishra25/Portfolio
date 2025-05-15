import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';


function Recruiter() {


  const navigate = useNavigate();


  const GIF_URL =
  'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif';

const topPicks = [
  {
    title: 'Work Permit',
    img: '/Workpermit.jpg',
    path:'/workpermit'
  },
  {
    title: 'Skills',
    img: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    path:'/skills'
  },
  {
    title: 'Experience',
    img: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    path:'/about'
  },
  {
    title: 'Certifications',
    img: 'https://images.pexels.com/photos/879143/pexels-photo-879143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    path:'/certificates'
  },
  {
    title: 'Recommendations',
    img: 'https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    path: '/Recommendations'
  },
  {
    title: 'Projects',
    img: '/Myphoto.jpg',
    path:'/projects'
  },
];




  return (
    <>
    <div className="relative w-full h-[85vh] overflow-hidden z-0">
  {/* Background GIF */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${GIF_URL})` }}
  ></div>
  <div className="absolute inset-0 bg-black opacity-60"></div>

  {/* Hero Content */}
  <div className="relative z-10 flex items-end h-full w-full max-w-6xl mx-auto px-6 md:px-12 pb-8 text-left m-0">

    <div className="text-white ">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Sanidhya Mishra – Full Stack Developer
      </h1>
      <p className="text-base md:text-lg leading-relaxed max-w-3xl mb-8">
        Passionate and results-driven Full Stack Developer with experience in React, Node.js, PostgreSQL,
        and Express. Strong background in building scalable, secure applications with clean UI/UX.
        Proficient in agile team environments and committed to continuous improvement and
        innovation in every project.
      </p>
      <div className="flex gap-4">
        <a
          href="/SanidhyaMishra_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-6 py-2 rounded font-semibold flex items-center gap-2 hover:bg-gray-300 transition"
        >
          <span className="text-lg">▶</span> Resume
        </a>
        <a
          href="https://www.linkedin.com/in/sanidhyamishra25/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 text-white px-6 py-2 rounded font-semibold hover:bg-gray-600 transition"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </div>
</div>


      
      <div className='h-50%  w-100% bg-black'>

          <h1 className='bg-black text-white text-2xl font-bold pl-4 pt-6'> Top pick's Section</h1>
      
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-6 px-6 py-8">
        
  {topPicks.map((topPick, index) => (
   <div
  key={index}
  className="cursor-pointer flex flex-col items-center transition-all duration-300   rounded-lg"
  onClick={() => topPick.path && navigate(topPick.path)}
>
  <img
    src={topPick.img}
    alt={topPick.title}
    className="w-60 h-36 object-cover rounded-lg hover:shadow-[0_0_20px_5px_red] hover:scale-105 "
  />
  <p className="text-white mt-2 text-lg font-medium">{topPick.title}</p>
</div>

  ))}
</div>
      </div>
      
      
      
    </>
  );
}

export default Recruiter;
