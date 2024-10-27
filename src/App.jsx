import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import './App.css';
import logo from './Assets/logo.svg';
import work1 from './Assets/npm1box.svg';
import hand from './Assets/Hand.svg';
import types from './Assets/Type.svg';
import myself from './Assets/myself.svg'; 
import backarrow from './Assets/Back Arrow.svg';
import Education from './Education';
import npm from './Assets/npm.svg';
import Projects from './Projects';
import { Link, NavLink } from 'react-router-dom';
import linkdin from './Assets/LinkedIn.svg';
import insta from './Assets/Instagram.svg';
import be from './Assets/Behance.svg';
import Loader from './Loader';


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
  const [activeLink, setActiveLink] = useState("Work");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return(
    <>
     <div id='main'>
      <div className='flex flex-row justify-center items-center   pt-2 '> 
      {/* sticky top-0 */}
        <NavLink to='/'> <img src={logo} className='h-[56px] my-[10px]'></img></NavLink>
        <div className='flex flex-row justify-center content-center  bg-[#8e8e8e45] text-white px-4 py-[10px] m-2 rounded-full ' >


      <Link to="/"
        onClick={() => handleLinkClick("Work")}
        className={`px-8 py-2 rounded-full text-[18px] ${
          activeLink === "Work" ? "bg-[#BCFEE4] text-black" : "bg-[#8e8e8e45] text-white"
        }`}
      >
        Work
      </Link>

      {/* About Me Link */}
      <Link to="/about"
        onClick={() => handleLinkClick("About Me")}
        className={`px-8 py-2 rounded-full text-[18px] ${
          activeLink === "About Me" ? "bg-[#BCFEE4] text-black" : "bg-transparent text-white"
        }`}
      >
        About Me
      </Link>


        </div>
      </div>
   <div className='flex flex-col sm:flex-row sm:justify-center sm:content-center items-center sm:py-5 ' >
     {/* <div className='w-[80%]  border-2 border-black mt-5 bg-white p-[20px] sm:w-[30%] sm:h-[400px] shadow-[26px_24px_0px_0px_rgba(204,_33,_204,_0.82)] flex flex-col justify-center content-center'>
       <div className='flex flex-row'>
         <img src={handwave} className='p-2 h-[60px] sm:h-[70px]' ></img>
         <h2 className='bg-[#FEC93D] rounded-2xl p-2'> Hey there, I'm viraj kulkarni</h2>
       </div>
         <h1 className='text-[25px] sm:text-[35px] font-extrabold py-4 '>A Web developer and UI/UX Designer</h1>
         <p className='align-end'>Currently student at SDMCET, Dharwad</p>
     </div> */}
       <img src={myself} className='h-[500px] mt-6 sm:m-0 sm:h-[550px]'></img>
     
   </div>
   </div>
    </>
  )
}



const Heroposter = () => {
  return (
    <div className='px-3 bg-[#111111] flex flex-col'>
      {/* <Link className='text-white text-right py-2 sm:pr-8'>Resume</Link> */}
    <div className='bg-[#111111] h-[70vh] flex flex-col justify-end px-3 py-3 border-b-2 border-[#909090] '>
      <p className='bg-[#d1d1d119] w-[fit-content] px-8 py-2 text-slate-300 rounded-full'>Build that helps</p>
      <h1 className='text-8xl text-white'>I craft Design in every</h1>
      <h1 className='displaytxt text-6xl py-3 text-[#c0c0c0]'>Possible manner</h1>
    </div>
    </div>
  )
}


const Work = () => {
  return (
    <div className='bg-[#111111] text-white px-4 py-[5rem] '>
      <div>
        <h1 className='text-8xl'>Work</h1>
        
        <div className='mt-[2rem] pl-2'>
        <p className=' w-[fit-content] text-slate-300 '>Freelancer | Designer | Dev</p>
          <h1 className='text-4xl pt-4 text-[#b7b7b7]'>Everything needs to build the webApp</h1>
          <p className='displaytxt text-3xl text-[#BCFEE4]'>I'll Help craft it.</p>
        </div>

        {/* component work 1*/}
        <div className='mt-[3rem] flex flex-row justify-around items-center'>
          <div>
            <img src={work1}></img>
          </div>
          <div className='w-[400px] flex-col justify-center'>
            <p className='text-[#909090]'> <span className='text-[#BCFEE4]'>create-react-tailwindcss</span> is an NPM project that simplifies the process of setting up a React project with Tailwind CSS. With just one command, it initializes the necessary configuration, allowing programmers to concentrate on developing their logic instead of dealing with dependency setups.</p>
            <Link to="" className=''>Project <img src={backarrow}></img></Link>
          </div>
          <div>
            <img src={npm}></img>
          </div>
        </div>
      </div>
    </div>
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
          {/* <div className='flex flex-col p-4 sm:px-[1rem]'>
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
          </div> */}
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

            <Link to="https://www.behance.net/virajkulkarni1">
              <img src={be}  className='h-[50px] mx-[10px]'></img>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}



const Processing = () => {
  return (
    <div className='h-[80vh] flex flex-col justify-center items-center bg-black text-white'>
      <h1 className='text-2xl sm:text-8xl'>Under maintainence</h1>
      <p className='displaytxt text-xl sm:text-3xl'> Apperciate your patience 😊  </p>
      <Loader />
      <p className='displaytxt text-xl mt-4'> Viraj Kulkarni</p>
    </div>
  )
}




const App = () => {
  return (
    <>
      <div >
      {/* <HeroSec />
      <Carosal />
      <Heroposter /> */}
      {/* <Education /> */}
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Work /> */}
      <Processing />
      <Footer />
      </div>
    </>
  )
}

export default App
