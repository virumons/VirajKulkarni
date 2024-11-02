import React from 'react'
import logo from './Assets/logo.svg'
import './App.css'
import badge from './Assets/badge.svg'
import aboutme from './Assets/myselfabout.svg'
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react'

function About() {
  const [activeLink, setActiveLink] = useState("Work");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (

    <div className=' bg-[#111111] sm:h-[100vh]'>
      <div className='flex flex-row justify-center items-center   pt-2 '> 
      {/* sticky top-0 */}
        <NavLink to='/'> <img src={logo} className='h-[56px] my-[10px]'></img></NavLink>
        <div className='flex flex-row justify-center content-center  bg-[#8e8e8e45] text-white px-4 py-[10px] m-2 rounded-full ' >


      <Link to="/"
        onClick={() => handleLinkClick("Work")}
        className={`px-8 py-2 rounded-full text-[18px] ${
          activeLink === "Aboutme" ? "bg-[#BCFEE4] text-black" : "bg-transparent   text-white"
        }`}
      >
        Work
      </Link>

      {/* About Me Link */}
      <Link to="/about"
        onClick={() => handleLinkClick("About Me")}
        className={`px-8 py-2 rounded-full text-[18px] ${
          activeLink === "Work" ? "bg-[#BCFEE4] text-black" : "bg-transparent text-white"
        }`}
      >
        About Me
      </Link>


        </div>
      </div>
          {/* head connect */}
          <div className='flex flex-col sm:flex-row justify-around items-center'>
            <img src={aboutme} className='h-[300px]'></img>

            <div className='bg-[#BCFEE4] m-2 sm:m-0 sm:w-[600px] p-8 rounded-3xl'>
              <h1 className='text-xl'>Hello there, My Name is viraj kulkarni</h1>
              <p className='text-[#343434] text-[18px] pt-2'>I believe in continuous learning and growth, and I always strive to learn new things to enhance my knowledge and skillset. 
                I am confident that my passion for development and my commitment to learning will help me make significant contributions to any team or project I work on. </p>
              <p className=' displaytxt pt-3'>Excited to connect and grow.</p>
            </div >

            <div className='m-2 sm:m-0 sm:w-[500px] bg-[#287356] p-6 rounded-2xl text-[#e4e4e4]'>
              <h1 className='text-3xl text-white'>Learn and grow by crafting it.</h1>
              <p className='displaytxt text-xl mt-3'>Connect with me </p>
              
              <div className='flex flex-wrap justify-start '>

              <div className='flex flex-row justify-around items-center p-2'>
              <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png" alt="github"/>
              <Link to="https://github.com/virumons">
              <p className='pl-2'>Github</p>
              </Link>
              </div>

              <div className='flex flex-row justify-start items-center p-2'>
              <img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/mail.png" alt="mail"/>
              <p className='pl-2'>virajkulkarni85@gmail.com</p>
              </div>
              
              <div className='flex flex-row justify-start items-center p-2'>
              <img width="32" height="32" src="https://img.icons8.com/windows/32/FFFFFF/behance.png" alt="behance"/>
              <Link to="https://www.behance.net/virajkulkarni1">
              <p className='pl-2'>Behance</p>
              </Link>
              </div>
              
               
              <div className='flex flex-row justify-start items-center p-2'>
              <img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/linkedin.png" alt="linkedin"/>
              <Link to="https://www.linkedin.com/in/viraj-kulkarni-516611250/">
              <p className='pl-2'>Linkedin</p>
              </Link>
              </div>
              </div>
            </div>
          </div>
{/* skills */}
          <div className='flex flex-col sm:flex-row justify-around items-center mt-5'>
            <div className='bg-[#F9DF8D] p-5 rounded-xl text-[#111111] text-[15px] flex flex-wrap m-2 sm:m-0 sm:w-[600px]'>
              
              <div className='border border-black px-4 py-2 m-1 rounded-2xl'>
                <h1>UI/UX Design & prototyping</h1>
              </div>
              
              <div className='border border-black px-4 py-2 m-1 rounded-2xl'>
                <h1>Web/Mobile responsive</h1>
              </div>
              
              <div className='border border-black px-4 py-2 m-1 rounded-2xl'>
                <h1>Poster Design</h1>
              </div>
              
              <div className='border border-black px-4 py-2 m-1 rounded-2xl'>
                <h1>Banner Design</h1>
              </div>
              
              <div className='border border-black px-4 py-2 m-1 rounded-2xl'>
                <h1>Social media posts Design</h1>
              </div>

              <div className='border border-black px-4 py-2 m-1 rounded-2xl'>
                <h1>Reactjs</h1>
              </div>
              
              <div className='border border-black px-4 py-2 m-1 rounded-2xl'>
                <h1>Expressjs</h1>
              </div>

              <div className='border border-black px-4 py-2 m-1 rounded-2xl'>
                <h1>Nodejs</h1>
              </div>
              <div className='border border-black px-4 py-2 m-1 rounded-2xl'>
                <h1>PostgreSQL</h1>
              </div>
              <div className='border border-black px-4 py-2 m-1 rounded-2xl'>
                <h1>MongoDB</h1>
              </div>
              <div className='border border-black px-4 py-2 m-1 rounded-2xl'>
                <h1>Redux</h1>
              </div>
              <div className='border border-black px-4 py-2 m-1 rounded-2xl'>
                <h1>Tailwindcss</h1>
              </div>
              <div className='border border-black px-4 py-2 m-1 rounded-2xl'>
                <h1>Java</h1>
              </div>
              <div className='border border-black px-4 py-2 m-1 rounded-2xl'>
                <h1>Golang</h1>
              </div>
            </div>
            <img src={badge} className='m-4 sm:m-0'></img>
            <div className='h-[20vh] flex flex-col justify-center items-center sm:h-0'>
              <p className='bg-[#d1d1d119] w-[fit-content] px-8 py-2 text-slate-300 rounded-full'>Build that helps</p>
              <h1 className='displaytxt text-6xl text-white'>Viraj Kulkarni</h1>
            </div>
          </div>
    </div>
  )
}

export default About

