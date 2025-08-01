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
import DarkVeil from './DarkVeil';
import FlowingMenu from './FlowingMenu'
import Squares from './Squares';


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
     <div id='main' className='h-[120vh] sm:h-[100vh] bg-[#111111] z-10 flex flex-row justify-center items-center'>
      <div className='flex flex-row justify-center items-center z-10  navbar pt-2 '> 
      {/* sticky top-0 */}
        <NavLink to='/'> <img src={logo} className='h-[40px] sm:h-[56px] sm:my-[10px]'></img></NavLink>

        <div className='flex flex-row justify-center content-center  bg-[#8e8e8e45] text-white px-2 py-2 sm:px-4 sm:py-[10px] sm:m-2  rounded-full ' >

      <Link to="/"
        onClick={() => handleLinkClick("Work")}
        className={`px-3 sm:px-8 py-2 sm:py-2 rounded-full sm:text-[18px] ${
          activeLink === "Work" ? "bg-[#BCFEE4] text-black" : "bg-[#8e8e8e45] text-white"
        }`}
      >
        Work
      </Link>

      {/* About Me Link */}
      <Link to="/about"
        onClick={() => handleLinkClick("About Me")}
        className={`px-3 sm:px-8 py-2 sm:py-2 rounded-full text-[18px] ${
          activeLink === "About Me" ? "bg-[#BCFEE4] text-black" : "bg-transparent hover:text-[#BCFEE4] text-white"
        }`}
      >
        About Me
      </Link>


        </div>
      </div>

   <div>
       {/* <img src={myself} className='h-[500px] mt-6  sm:h-[550px] hidden sm:flex'></img> */}
       <img src={head} className='  flex sm:hidden'></img>
   </div>
   </div>
    </>
  )
}



const Heroposter = () => {
  return (

<div className="relative   flex flex-col overflow-hidden">

{/* Background DarkVeil */}
<div className="absolute inset-0 z-0">
  <DarkVeil />
</div>

{/* Content */}
{/* <Link className='text-white text-right py-2 sm:pr-8'>Resume</Link> */}
<div className="relative z-10 bg-[#111111]/70 h-[70vh] flex flex-col items-center justify-center px-3 py-3 ">
  <p className="bg-[#d1d1d119] w-fit px-8  py-2 text-sm sm:text-2xl text-slate-300 rounded-full">
    Build that helps
  </p>
  <h1 className="text-4xl sm:text-8xl pl-2 text-white">I craft Design in every</h1>
  <h1 className="displaytxt text-2xl sm:text-6xl p-2 py-3 text-[#c0c0c0]">
    Possible manner
  </h1>
</div>

</div>

  )
}

function Mystack() {
  const demoItems = [
    { link: '#', text: 'Product designs', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'System softwares', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'Front-ends', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Web apps', image: 'https://picsum.photos/600/400?random=4' }
  ];
  return (
    <div className=''>
<div style={{ height: '600px', position: 'relative', backgroundColor: "#0c0c0c" }}>
  <FlowingMenu items={demoItems} />
</div>
    </div>
  )
}


const Work = () => {
  return (
    <div className='bg-[#0C0C0C] text-white  pt-[5rem] '>
      <div>
        <div className='flex flex-col sm:flex-row justify-around'>
        <h1 className='text-5xl pl-4 sm:text-[15rem] bg-slate-600'>Work</h1>
        
        <div className='mt-[2rem]  h-[30vh]'>
        <p className=' w-[fit-content] text-slate-300 '>Freelancer | Designer | Dev</p>
          <h1 className='text-2xl sm:text-4xl pt-4 text-[#b7b7b7]'>Everything needs to build the webApp</h1>
          <p className='displaytxt text-3xl text-[#BCFEE4]'>I'll Help craft it.</p>
        </div>
        </div>
       
        <div className='w-[100%]'>
         
           <div className="w-full mt-4 space-y-0">
  <div className="flex flex-col sm:flex-row">
    <img src={fody} className="w-full sm:w-1/2 object-cover" />
    <img src={cafe} className="w-full sm:w-1/2 object-cover" />
  </div>

  <div className="flex flex-col sm:flex-row">
    <img src={dash1} className="w-full sm:w-1/2 object-cover" />
    <img src={dash2} className="w-full sm:w-1/2 object-cover" />
  </div>

  <div className="flex flex-col sm:flex-row">
    <img src={registerui} className="w-full sm:w-1/2 object-cover" />
    <img src={illustrator} className="w-full sm:w-1/2 object-cover" />
  </div>
</div>


           <div className='flex flex-col'>
            <img src={vintage}></img>
            <img src={travel}></img>
           </div>
        </div>


        <div className="relative overflow-hidden">

{/* Squares background */}
<div className="absolute inset-0 z-0">
  <Squares
    speed={0.5}
    squareSize={40}
    direction="diagonal"
    borderColor="#212121"
    hoverFillColor="#222"
  />
</div>

{/* All content */}
<div className="relative z-10">

  {/* Behance Section */}
  <div className="flex flex-col justify-center items-center h-[40vh]">
    <h1 className="text-5xl text-center">
      Connect with me on{" "}
      <span className="displaytxt text-[#BCFEE4]">Behance</span>
    </h1>
    <div className="flex flex-row justify-center items-center">
      <Link to="https://www.behance.net/virajkulkarni1">
        <h1>Connect</h1>
      </Link>
      <img src={backarrow} alt="Back Arrow" />
    </div>
  </div>

  {/* Work 1 */}
  <div className="mt-[3rem] flex flex-col sm:flex-row justify-around items-center">
    <div>
      <img src={work1} alt="Work 1" />
      
    </div>
    <div className="sm:w-[380px] flex-col justify-center">
      <p className="text-[#909090] my-[20px] px-2 sm:my-0 sm:px-0 text-left">
        <span className="text-[#BCFEE4]">create-react-tailwindcss</span>{" "}
        is an NPM project that simplifies the process of setting up a
        React project with Tailwind CSS. With just one command, it
        initializes the necessary configuration, allowing programmers to
        concentrate on developing their logic instead of dealing with
        dependency setups.
      </p>
      <div className="flex flex-row items-center">
        <Link to="https://www.npmjs.com/package/create-react-tailwindcss">
          <h1 className="hover:underline">Project</h1>
        </Link>
        <img src={backarrow} alt="Back Arrow" />
       
      </div>
    </div>
    <div>
      <img
        src={npm}
        className="hover:scale-105 transition-all duration-300 mt-4 sm:mt-0"
        alt="NPM Logo"
      />
    </div>
  </div>

  {/* Work 2 */}
  <div className="mt-[3rem] flex flex-col sm:flex-row justify-around items-center">
    <div className="flex flex-row my-8 sm:my-0">
      <img src={qoute} alt="Quote" />
      <h1 className="text-2xl">02</h1>
    </div>
    <div>
      <img
        src={Getalgo}
        className="hover:scale-105 transition-all duration-300 mb-5 sm:mb-0"
        alt="Getalgo"
      />
    </div>
    <div className="sm:w-[380px] flex-col justify-center">
      <p className="text-[#909090]">
        <span className="text-[#BCFEE4]">Getalgo</span> Developed a
        website designed to help students learn algorithms more
        effectively. The website includes interactive tutorials, practice
        problems, and quizzes to reinforce students' understanding of key
        concepts.
      </p>
      <div className="flex flex-row items-center">
        <Link to="https://virumons.github.io/GETALGO.V/index.html">
          <h1 className="hover:underline">Project</h1>
        </Link>
        <img src={backarrow} alt="Back Arrow" />
      </div>
    </div>
  </div>

  {/* Work 3 */}
  <div className="mt-[3rem] flex flex-col sm:flex-row justify-around items-center">
    <div className="flex flex-row my-8 sm:my-0">
      <img src={qoute} alt="Quote" />
      <h1 className="text-2xl">03</h1>
    </div>
    <div className="w-[380px] flex-col justify-center">
      <p className="text-[#909090]">
        <span className="text-[#BCFEE4]">Motive</span> is a Chrome
        extension that provides users with slokas from the Bhagavad Gita,
        along with their meanings. The goal is to help individuals learn
        one sloka daily, whether at work or in any other field, and to
        gain insight from it.
      </p>
      <div className="flex flex-row items-center">
        <h1 className="text-[#efa2a2]">Not Deployed :(</h1>
      </div>
    </div>
    <div>
      <img
        src={motive}
        className="hover:scale-105 transition-all duration-300 mt-5 sm:mt-0"
        alt="Motive"
      />
    </div>
  </div>

  {/* Work 4 */}
  <div className="mt-[3rem] flex flex-col sm:flex-row justify-around items-center">
    <div className="flex flex-row my-8 sm:my-0">
      <img src={qoute} alt="Quote" />
      <h1 className="text-2xl">04</h1>
    </div>
    <div>
      <img
        src={fileit}
        className="hover:scale-105 transition-all duration-300"
        alt="Fileit"
      />
    </div>
    <div className="sm:w-[380px] flex-col justify-center mt-5 sm:mt-0">
      <p className="text-[#909090]">
        <span className="text-[#BCFEE4]">Fileit</span> is the decentralized
        storage-based file sharing system where users can share files
        securely and safely.
      </p>
      <div className="flex flex-row items-center">
        <h1 className="text-[#efa2a2]">Not Deployed :(</h1>
      </div>
    </div>
  </div>

  {/* Work 5 */}
  <div className="mt-[3rem] flex flex-col sm:flex-row justify-around items-center">
    <div className="flex flex-row mt-8 sm:my-0">
      <img src={qoute} alt="Quote" />
      <h1 className="text-2xl">05</h1>
    </div>
    <div className="sm:w-[380px] flex-col justify-center">
      <p className="text-[#909090]">
        <span className="text-[#BCFEE4]">Insignia</span> - Built a college
        fest website for students to register for events. We successfully
        managed 2000-3000 registrations from our website.
      </p>
      <div className="flex flex-row items-center">
        <Link to="https://www.sdmcetinsigniafest.com/">
          <h1 className="hover:underline">Project</h1>
        </Link>
        <img src={backarrow} alt="Back Arrow" />
      </div>
    </div>
    <div>
      <img
        src={insignia}
        className="w-[600px] rounded-xl hover:scale-105 transition-all duration-300 mt-5 sm:mt-0"
        alt="Insignia"
      />
    </div>
  </div>

</div>
</div>

      </div>
    </div>
  )
}


const Footer =()=>{
  return(
    <>
 
  <div className='bg-[#07040C] text-[#909090] flex flex-col justify-center items-center h-[90vh]'>
  
    <img src={footerme} className=''></img>
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
      <Mystack />
       <Work />
      {/* <Processing /> */}
      <Footer />
      
      </div>
    </>
  )
}

export default App
