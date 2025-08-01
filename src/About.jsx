// import React from 'react'
// import logo from './Assets/logo.svg'
// import './App.css'
// import badge from './Assets/badge.svg'
// import aboutme from './Assets/myselfabout.svg'
// import { Link, NavLink } from 'react-router-dom';
// import { useState } from 'react'
// import img1 from './Assets/tools.svg'
// import myself from './Assets/myself.svg'
// function About() {
//   const [activeLink, setActiveLink] = useState("Work");

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };
//   return (


// <div className="bg-[#111111] min-h-screen w-full px-4 sm:px-8 py-6">
  
//   {/* Navbar */}
//   <div className="flex flex-row justify-center items-center pt-2">
//     <NavLink to='/'>
//       <img src={logo} className="h-[56px] my-[10px]" alt="Logo" />
//     </NavLink>
//     <div className="flex flex-row justify-center content-center bg-[#8e8e8e45] text-white px-4 py-[10px] m-2 rounded-full">
//       <Link
//         to="/"
//         onClick={() => handleLinkClick("Work")}
//         className={`px-8 py-2 rounded-full text-[18px] ${
//           activeLink === "Aboutme" ? "bg-[#BCFEE4] text-black" : "bg-transparent text-white"
//         }`}
//       >
//         Work
//       </Link>
//       <Link
//         to="/about"
//         onClick={() => handleLinkClick("About Me")}
//         className={`px-8 py-2 rounded-full text-[18px] ${
//           activeLink === "Work" ? "bg-[#BCFEE4] text-black" : "bg-transparent text-white"
//         }`}
//       >
//         About Me
//       </Link>
//     </div>
//   </div>

//   {/* Bento Grid */}
//   <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">

//     {/* Profile Image */}
//     <div className=" rounded-2xl  flex justify-center items-center ">
//       <img src={myself} className="w-full h-full" alt="About Me" />
//     </div>

//     {/* About Me Text */}
//     <div className="bg-[#BCFEE4] rounded-3xl p-6 col-span-2 flex flex-col justify-center">
//       <h1 className="text-xl">Hello there, My Name is Viraj Kulkarni</h1>
//       <p className="text-[#343434] text-[18px] pt-2">
//         I believe in continuous learning and growth, and I always strive to learn new things to enhance my knowledge and skillset. 
//         I am confident that my passion for development and my commitment to learning will help me make significant contributions to any team or project I work on.
//       </p>
//       <p className="displaytxt pt-3">Excited to connect and grow.</p>
//     </div>

//     {/* Connect Section */}
//     <div className="bg-[#287356] rounded-2xl p-6 text-[#e4e4e4] col-span-1 flex flex-col justify-center">
//       <h1 className="text-3xl text-white">Learn and grow by crafting it.</h1>
//       <p className="displaytxt text-xl mt-3">Connect with me</p>
//       <div className="mt-4 space-y-3">

//         <div className="flex flex-row items-center">
//           <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png" alt="github" />
//           <Link to="https://github.com/virumons" className="pl-2">Github</Link>
//         </div>

//         <div className="flex flex-row items-center">
//           <img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/mail.png" alt="mail" />
//           <p className="pl-2">virajkulkarni85@gmail.com</p>
//         </div>

//         <div className="flex flex-row items-center">
//           <img width="32" height="32" src="https://img.icons8.com/windows/32/FFFFFF/behance.png" alt="behance" />
//           <Link to="https://www.behance.net/virajkulkarni1" className="pl-2">Behance</Link>
//         </div>

//         <div className="flex flex-row items-center">
//           <img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/linkedin.png" alt="linkedin" />
//           <Link to="https://www.linkedin.com/in/viraj-kulkarni-516611250/" className="pl-2">Linkedin</Link>
//         </div>
//       </div>
//     </div>

//     {/* images */}
//     <div className="rounded-xl col-span-3 flex flex-wrap justify-center ">
//   <img src={img1} alt="Skill 1" className="w-full  rounded-xl object-cover" />
// </div>


//     {/* Badge + Name */}
//     <div className="flex flex-col justify-center items-center bg-[#1c1c1c] rounded-xl p-4 col-span-1">
//       <img src={badge} alt="Badge" className="mb-4" />
//       <p className="bg-[#d1d1d119] px-8 py-2 text-slate-300 rounded-full">Build that helps</p>
//       <h1 className="displaytxt text-4xl text-white mt-2">Viraj Kulkarni</h1>
//     </div>

//   </div>
// </div>

//   )
// }

// export default About

import React, { useState } from 'react';
import logo from './Assets/logo.svg';
import './App.css';
import badge from './Assets/badge.svg';
import aboutme from './Assets/myselfabout.svg';
import { Link, NavLink } from 'react-router-dom';
import img1 from './Assets/tools.svg';
import myself from './Assets/myself.svg';

function About() {
  const [activeLink, setActiveLink] = useState("Work");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="bg-[#111111] min-h-screen w-full px-3 sm:px-8 py-6">
      
      {/* Navbar */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2 text-center">
        <NavLink to='/'>
          <img src={logo} className="h-[50px] sm:h-[56px]" alt="Logo" />
        </NavLink>
        <div className="flex flex-wrap justify-center bg-[#8e8e8e45] text-white px-4 py-2 rounded-full gap-2">
          <Link
            to="/"
            onClick={() => handleLinkClick("Work")}
            className={`px-6 py-1.5 sm:px-8 sm:py-2 rounded-full text-[16px] sm:text-[18px] ${
              activeLink === "Aboutme"
                ? "bg-[#BCFEE4] text-black"
                : "bg-transparent text-white"
            }`}
          >
            Work
          </Link>
          <Link
            to="/about"
            onClick={() => handleLinkClick("About Me")}
            className={`px-6 py-1.5 sm:px-8 sm:py-2 rounded-full text-[16px] sm:text-[18px] ${
              activeLink === "Work"
                ? "bg-[#BCFEE4] text-black"
                : "bg-transparent text-white"
            }`}
          >
            About Me
          </Link>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">

        {/* Profile Image */}
        <div className="rounded-2xl flex justify-center items-center">
          <img src={myself} className="w-full h-auto rounded-xl" alt="About Me" />
        </div>

        {/* About Me Text */}
        <div className="bg-[#BCFEE4] rounded-3xl p-5 sm:p-6 col-span-1 md:col-span-2 flex flex-col justify-center">
          <h1 className="text-lg sm:text-xl">Hello there, My Name is Viraj Kulkarni</h1>
          <p className="text-[#343434] text-[16px] sm:text-[18px] pt-2">
            I believe in continuous learning and growth, and I always strive to learn new things to enhance my knowledge and skillset. 
            I am confident that my passion for development and my commitment to learning will help me make significant contributions to any team or project I work on.
          </p>
          <p className="displaytxt pt-3 text-base sm:text-lg">Excited to connect and grow.</p>
        </div>

        {/* Connect Section */}
        <div className="bg-[#287356] rounded-2xl p-5 sm:p-6 text-[#e4e4e4] col-span-1 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl text-white">Learn and grow by crafting it.</h1>
          <p className="displaytxt text-lg sm:text-xl mt-3">Connect with me</p>
          <div className="mt-4 space-y-3">
            <div className="flex flex-row items-center">
              <img width="28" height="28" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png" alt="github" />
              <Link to="https://github.com/virumons" className="pl-2 text-sm sm:text-base">Github</Link>
            </div>
            <div className="flex flex-row items-center">
              <img width="28" height="28" src="https://img.icons8.com/ios/50/FFFFFF/mail.png" alt="mail" />
              <p className="pl-2 text-sm sm:text-base break-all">virajkulkarni85@gmail.com</p>
            </div>
            <div className="flex flex-row items-center">
              <img width="30" height="30" src="https://img.icons8.com/windows/32/FFFFFF/behance.png" alt="behance" />
              <Link to="https://www.behance.net/virajkulkarni1" className="pl-2 text-sm sm:text-base">Behance</Link>
            </div>
            <div className="flex flex-row items-center">
              <img width="28" height="28" src="https://img.icons8.com/ios/50/FFFFFF/linkedin.png" alt="linkedin" />
              <Link to="https://www.linkedin.com/in/viraj-kulkarni-516611250/" className="pl-2 text-sm sm:text-base">Linkedin</Link>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="rounded-xl col-span-1 md:col-span-3 flex flex-wrap justify-center">
          <img src={img1} alt="Skill" className="w-full rounded-xl object-cover" />
        </div>

        {/* Badge + Name */}
        <div className="flex flex-col justify-center items-center bg-[#1c1c1c] rounded-xl p-4 col-span-1">
          <img src={badge} alt="Badge" className="mb-4 w-16 sm:w-auto" />
          <p className="bg-[#d1d1d119] px-6 py-1.5 text-slate-300 rounded-full text-sm sm:text-base">Build that helps</p>
          <h1 className="displaytxt text-2xl sm:text-4xl text-white mt-2 text-center">Viraj Kulkarni</h1>
        </div>

      </div>
    </div>
  );
}

export default About;
