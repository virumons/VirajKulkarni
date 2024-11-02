import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import './App.css';
import logo from './Assets/logo.svg';
import work1 from './Assets/npm1box.svg';

import myself from './Assets/myself.svg'; 
import backarrow from './Assets/Back Arrow.svg';

import npm from './Assets/npm.svg';

import { Link, NavLink } from 'react-router-dom';

import Loader from './Loader';
import cafe from './Assets/cafe.svg'
import dash1 from './Assets/dashboard1.svg'
import dash2 from './Assets/dashboard2.svg'
import fody from './Assets/fody app.svg'
import registerui from './Assets/insta1.svg'
import illustrator from './Assets/illustration.svg'
import vintage from './Assets/vintage.svg'
import travel from './Assets/travel.svg'
import qoute from './Assets/qoute.svg'
import insignia from './Assets/insignia.png'
import Getalgo from './Assets/Getalgo.svg'
import footerme from './Assets/footerme.png'
import motive from './Assets/motive.svg'
import fileit from './Assets/filit.svg'
import head from './Assets/head.svg'



const Carosal =()=>{
  
  return(
    <>
    <div className='p-[10px] custom bg-[#EEEEEE] text-[#323232]'>
      <Marquee loop={0}>
        <h2>UI/UX Designer |</h2>
        <h2>Full-stack Developer |</h2>
        <h2>System Design |</h2>
        <h2>Project management |</h2>
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
     <div id='main' className='h-[100vh] bg-[#111111] flex flex-row justify-center items-center'>
      <div className='flex flex-row justify-center items-center  navbar pt-2 '> 
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
          activeLink === "About Me" ? "bg-[#BCFEE4] text-black" : "bg-transparent hover:text-[#BCFEE4] text-white"
        }`}
      >
        About Me
      </Link>


        </div>
      </div>

   <div>
       <img src={myself} className='h-[500px] mt-6  sm:h-[550px] hidden sm:flex'></img>
       <img src={head} className='  flex sm:hidden'></img>
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
        
        <div className='mt-[2rem] pl-2 h-[30vh]'>
        <p className=' w-[fit-content] text-slate-300 '>Freelancer | Designer | Dev</p>
          <h1 className='text-4xl pt-4 text-[#b7b7b7]'>Everything needs to build the webApp</h1>
          <p className='displaytxt text-3xl text-[#BCFEE4]'>I'll Help craft it.</p>
        </div>

        <div>
           <div className='flex flex-col justify-between items-center mt-4 '>
              <div className='flex flex-col sm:flex-row'>
                <img src={fody}></img>
                <img src={cafe}></img>
              </div>
              <div className='flex flex-col sm:flex-row'>
                <img src={dash1}></img>
                <img src={dash2}></img>
              </div>
              <div className='flex flex-col sm:flex-row'>
                <img src={registerui}></img>
                <img src={illustrator}></img>
              </div>
           </div>

           <div className='flex flex-col'>
            <img src={vintage}></img>
            <img src={travel}></img>
           </div>

           <div className='flex flex-col justify-center items-center h-[40vh]'>
            <h1 className='text-5xl text-center'>Connect with me on <span className='displaytxt  text-[#BCFEE4]'>Behance</span></h1>
            <div className='flex flex-row justify-center items-center'>
              <Link to="https://www.behance.net/virajkulkarni1">
              <h1>Connect</h1>
              </Link>
              <img src={backarrow}></img>
            </div>
           </div>
        </div>

        {/* component work 1 NPM*/}
        <div className='mt-[3rem] flex flex-col sm:flex-row justify-around items-center'>
          <div>
            <img src={work1} ></img>
          </div>
          <div className='w-[400px] flex-col justify-center'>
            <p className='text-[#909090] my-[20px] px-2 sm:my-0 sm:px-0 text-left'> <span className='text-[#BCFEE4]'>create-react-tailwindcss</span> is an NPM project that simplifies the process of setting up a React project with Tailwind CSS. With just one command, it initializes the necessary configuration, allowing programmers to concentrate on developing their logic instead of dealing with dependency setups.</p>
          
            <div className='flex flex-row  items-center'>
            <Link to="https://www.npmjs.com/package/create-react-tailwindcss" >
            <h1 className='hover:underline'>Project</h1> 
            </Link>
            <img src={backarrow}></img>
            </div>
           
          </div>
          <div>
            <img src={npm}  className='hover:scale-105 transition-all duration-300 mt-4 sm:mt-0'></img>
          </div>
        </div>
        {/* component work 2 Getalgo*/}
        <div className='mt-[3rem] flex flex-col sm:flex-row justify-around items-center'>
          <div className='flex flex-row my-8 sm:my-0'>
            <img src={qoute}></img>
            <h1 className='text-2xl'>02</h1>
          </div>
          <div>
            <img src={Getalgo} className='hover:scale-105 transition-all duration-300 mb-5 sm:mb-0' ></img>
          </div>
          <div className='w-[400px] flex-col justify-center'>
            <p className='text-[#909090]'><span className='text-[#BCFEE4]'>Getalgo</span>  Developed a website designed to help students learn algorithms more effectively. 
            The website includes interactive tutorials, practice problems, and quizzes to reinforce students' understanding of key concepts.</p>
            <div className='flex flex-row  items-center'>
            <Link to="https://virumons.github.io/GETALGO.V/index.html" >
            <h1 className='hover:underline'>Project</h1> 
            </Link>
            <img src={backarrow}></img>
            </div>
          </div>
         
        </div>
        {/* component work 3 motive*/}
        <div className='mt-[3rem] flex flex-col sm:flex-row justify-around items-center'>
          <div className='flex flex-row my-8 sm:my-0'>
            <img src={qoute}></img>
            <h1 className='text-2xl'>03</h1>
          </div>
          <div className='w-[400px] flex-col justify-center'>
            <p className='text-[#909090]'> <span className='text-[#BCFEE4]'>Motive</span>  is a Chrome extension that provides users with slokas from the Bhagavad Gita, along with their meanings. The goal is to help individuals learn one sloka daily, whether at work or in any other field, and to gain insight from it.</p>
            <div className='flex flex-row  items-center'>
        
            <h1 className='text-[#efa2a2]'>Not Deployed :( </h1> 
         
           
            </div>
          </div>
          <div>
            <img src={motive}  className='hover:scale-105 transition-all duration-300 mt-5 sm:mt-0'></img>
          </div>
        </div>
        {/* component work 4 Fileit*/}
        <div className='mt-[3rem] flex flex-col sm:flex-row justify-around items-center'>
          <div className='flex flex-row my-8 sm:my-0'>
            <img src={qoute}></img>
            <h1 className='text-2xl'>04</h1>
          </div>
       
          <div>
            <img src={fileit}  className='hover:scale-105 transition-all duration-300'></img>
          </div>
          <div className='w-[400px] flex-col justify-center mt-5 sm:mt-0'>
            <p className='text-[#909090]'> <span className='text-[#BCFEE4]'>Fileit</span>  is the decentralized storage based file sharing system where user can share file which is secure and safe.</p>
            <div className='flex flex-row  items-center'>
            <h1 className='text-[#efa2a2]'>Not Deployed :( </h1> 
            </div>
          </div>
        </div>
        {/* component work 5 */}
        <div className='mt-[3rem] flex flex-col sm:flex-row justify-around items-center'>
          <div className='flex flex-row my-8 sm:my-0'>
            <img src={qoute}></img>
            <h1 className='text-2xl'>05</h1>
          </div>
       
        
          <div className='w-[400px] flex-col justify-center'>
            <p className='text-[#909090]'> <span className='text-[#BCFEE4]'>Insignia</span> - Built College Fest website for students to register with events for insignia we successfully managed 2000-3000 registrations from our website.</p>
            <div className='flex flex-row  items-center'>
            <Link to="https://www.sdmcetinsigniafest.com/" >
            <h1 className='hover:underline'>Project</h1> 
            </Link>
            <img src={backarrow}></img>
            </div>
          </div>
          <div>
            <img src={insignia} className='w-[600px] rounded-xl hover:scale-105 transition-all duration-300 mt-5 sm:mt-0'></img>
          </div>
        </div>

      </div>
    </div>
  )
}


const Footer =()=>{
  return(
    <>
 
  <div className='bg-[#111111] text-[#909090] flex flex-col justify-center items-center h-[90vh]'>
  
    <img src={footerme} className='animate-bounce'></img>
    <h1 >Copyright © 2024 Viraj Kulkarni.</h1>
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
      <div className='scroll-smooth' >
      <HeroSec />
      <Carosal />
      <Heroposter /> 
      {/* <Education /> */}
      {/* <Skills /> */}
      {/* <Projects /> */}
       <Work />
      {/* <Processing /> */}
      <Footer />
      
      </div>
    </>
  )
}

export default App
