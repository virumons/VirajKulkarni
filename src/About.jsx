import React from 'react'
import logo from './Assets/logo.svg'
import projects from './Assets/projects.svg'
import hand from './Assets/Hand.svg'
import types from './Assets/Type.svg'
import aboutme from './Assets/aboutme.svg'
import { Link, NavLink } from 'react-router-dom';

function About() {
  return (

    <div className='mx-[10px] sm:m-[10px]'>
       <div className='flex flex-row justify-center content-center   pt-2 '> 
      {/* sticky top-0 */}
        <NavLink to='/'> <img src={logo} className='h-[54px] my-[10px]'></img></NavLink>
        <div className='flex flex-row justify-center content-center  bg-[#242424] text-white px-4 py-[10px] m-2 rounded-2xl ' >
         
            <img src={projects} className='h-[30px]  px-4 sm:h-[30px] '></img>
            <NavLink to='/projects' className={"hidden sm:flex sm:px-[10px] sm:text-[20px]"}>Projects</NavLink>
          
            <img src={hand} className='h-[33px]  px-4 sm:h-[35px]'></img>
            <NavLink
            to="/about"
            className={({isActive,isPending})=>
              isPending ? "pending" : isActive ? "Active" : "hidden sm:flex sm:px-[10px] sm:text-[20px]"
          }>About</NavLink>

         
            <img src={types} className='h-[30px] px-4 sm:h-[35px]'></img>
            <NavLink
            to="/contact"
            className={({isPending,isActive})=>
            isPending ? "pending" : isActive ? "Active" : "hidden sm:flex sm:px-[10px] sm:text-[20px]"
          }
            >Contact</NavLink>

         
        </div>
      </div>

      <div className='mt-[2rem] sm:mt-[20px] flex flex-col sm:flex-row justify-around items-center'>
        <div className='p-[10px] sm:w-[40%]'>
            <h1 className='text-[25px] text-center sm:text-left'>
            Hi there! 👋 I'm Viraj, a Computer Science and Engineering student at SDMCET, Dharwad. 
            I'm skilled in web and application development, with experience leading project groups. 
            I'm passionate about collaboration and problem-solving, constantly striving for growth and learning. 
            </h1>
            <h1 className='text-[25px] text-center sm:text-left mt-2'>
            Excited to connect with fellow learners and developers to grow together. 
            Have a great day! 👋
            </h1>
        </div>
        <div>
            <img src={aboutme} className='h-[600px]'></img>
        </div>
      </div>
    </div>
  )
}

export default About

