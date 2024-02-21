import React, { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import './App.css';
import logo from './Assets/logo.svg';
import projects from './Assets/projects.svg';
import hand from './Assets/Hand.svg';
import types from './Assets/Type.svg';
import myself from './Assets/myself.svg'; 
import handwave from './Assets/handWave.svg';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import { Link, NavLink } from 'react-router-dom';
import linkdin from './Assets/LinkedIn.svg';
import insta from './Assets/Instagram.svg';
import be from './Assets/Behance.svg';


const Carosal =()=>{
  
  return(
    <>
    <div className='p-[10px] custom bg-[#EEEEEE]'>
      <Marquee loop={0}>
        <h2>UI/UX Designer |</h2>
        <h2>Full-stack Developer |</h2>
        <h2>System Design |</h2>
        <h2>Project management |</h2>
        <h2>3D Modelling illustrations |</h2>
        <h2>Restful API's |</h2>
      </Marquee>
    </div>
    </>
  )
}

const HeroSec =()=>{
  
  return(
    <>
     <div id='main'>
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
   <div className='flex flex-col sm:flex-row sm:justify-center sm:content-center items-center sm:py-5 ' >
     <div className='w-[80%]  border-2 border-black mt-5 bg-white p-[20px] sm:w-[30%] sm:h-[400px] shadow-[26px_24px_0px_0px_rgba(204,_33,_204,_0.82)] flex flex-col justify-center content-center'>
       <div className='flex flex-row'>
         <img src={handwave} className='p-2 h-[60px] sm:h-[70px]' ></img>
         <h2 className='bg-[#FEC93D] rounded-2xl p-2'> Hey there, I'm viraj kulkarni</h2>
       </div>
         <h1 className='text-[25px] sm:text-[35px] font-extrabold py-4 '>A Web developer and UI/UX Designer</h1>
         <p className='align-end'>Currently student at SDMCET, Dharwad</p>
     </div>
       <img src={myself} className='h-[500px] mt-6 sm:m-0 sm:h-[580px]'></img>
     
   </div>
   </div>
    </>
  )
}

const Footer =()=>{
  return(
    <>
      <div className='bg-[#1a1a1a] py-[1rem] px-[20px] text-white'>
        <div className='py-4 flex flex-col justify-start sm:flex-row sm:justify-evenly sm:items-center '>
          <div className='sm:px-[1rem]'>
            <img src={logo} className='h-[40px] sm:h-[70px] mx-[5px]'></img>
          </div>
          <div className='flex flex-col p-[10px] sm:px-[1rem]'>
            <h1 className='text-[25px] font-medium py-2'>Viraj Avinash kulkarni</h1>
            <p>virajkulkarni85@gmail.com</p>
            <p>Github - Virumons</p>
            
          </div>
          <div className='flex flex-col p-4 sm:px-[1rem]'>
            <h1>Links--</h1>
            <NavLink
            to="/about"
            className={({isActive,isPending})=>
              isPending ? "pending" : isActive ? "Active" : "p-[10px] text-[#7c7c7c] text-[20px] hover:text-[#ededed]"
          }>About</NavLink>
            <NavLink
            to="/contact"
            className={({isPending,isActive})=>
            isPending ? "pending" : isActive ? "Active" : "p-[10px] text-[#7c7c7c] text-[20px] hover:text-[#ededed]"
          }
            >Contact</NavLink>
          </div>
        </div>

        <div className='flex flex-row justify-center items-center px-[1rem]'>
          <h1>© 2024 viraj kulkarni</h1>
          <div className='flex flex-row px-[1rem]'>
            <Link to="https://www.linkedin.com/in/viraj-kulkarni-516611250/">
              <img src={linkdin} className='h-[50px] mx-[10px]'></img>
            </Link>

            <Link to="https://www.instagram.com/virui_ux?igsh=MXh6cjNobjlrYmkzcA==">
              <img src={insta}  className='h-[50px] mx-[10px]'></img>
            </Link>

            <Link to="https://www.behance.net/gallery/178072141/Foody-A-Food-Delivery-Application-%28UIUX%29">
              <img src={be}  className='h-[50px] mx-[10px]'></img>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}


const App = () => {
  return (
    <>
      <div >
      <HeroSec />
      <Carosal />
      
      <Education />
      
      <Skills />
      <Projects />
      <Footer />
      </div>
    </>
  )
}

export default App
