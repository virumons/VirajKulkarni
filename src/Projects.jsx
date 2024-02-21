import React from 'react';
import geta from './Assets/Getalgo.svg';
import npx from './Assets/npx.svg';
import qna from './Assets/qna.svg';
import fody from './Assets/fody.svg';
import { Link, NavLink } from 'react-router-dom';
import './App.css';

function Projects() {
  return (
    <div>
      <div className='flex flex-col justify-between items-center py-[1rem] my-[1rem]'>
        <h1 className='text-[30px]'>Projects</h1>

        <div className='w-[80%] m-[10px]'>
            <h1 className='nos'>1</h1>
            <img src={npx} className=' w-[100%] sm:w-[100%]' ></img>
            <div>
                <p className='my-[20px]'>create-react-tailwindcss is an NPM project that simplifies the process of setting up a React project with Tailwind CSS. With just one command, it initializes the necessary configuration, allowing programmers to concentrate on developing their logic instead of dealing with dependency setups.</p>
                <div className='flex flex-wrap learning my-6'>
                    <p>NodeJS</p><p>Unix</p><p>Javascript</p><p>NPM</p>
                </div>
                <Link to="https://www.npmjs.com/package/create-react-tailwindcss" className='px-[15px] py-[5px] my-[10px] border-2 border-black rounded-2xl hover:bg-[#0099FF] transition duration-100 ease-in-out'>Visit
            </Link>
            </div>
        </div>

        <div className='w-[80%] m-[10px] py-[20px] '>
            <h1 className='nos'>2</h1>
            <img src={geta} className=' w-[100%] sm:w-[100%]' ></img>
            <div>
                <p className='my-[20px]'>(Recommended to open on laptop or desktop)
Developed a website designed to help students learn algorithms more effectively. The website includes interactive tutorials, practice problems, and quizzes to reinforce students' understanding of key concepts. The goal of the website is to provide a user-friendly platform for students to learn algorithms at their own pace and in a more engaging way than traditional classroom settings.</p>
                <div className='flex flex-wrap learning my-6'>
                    <p>HTML5</p><p>CSS3</p><p>Javascript</p><p>PHP</p><p>Vanta.js</p>
                </div>
                <Link to="https://virumons.github.io/GETALGO.V/index.html" className='px-[15px] py-[5px] my-[10px] border-2 border-black rounded-2xl hover:bg-[#0099FF] transition duration-100 ease-in-out'>Visit
            </Link>
            </div>
        </div>

        <div className='w-[80%] m-[10px] py-[20px] '>
            <h1 className='nos'>3</h1>
            <img src={qna} className=' w-[100%] sm:w-[100%]' ></img>
            <div>
                <p className='my-[20px]'>
This API leverages Pandas to process data from an Excel file, offering a reliable source for general knowledge queries. Managed locally with UVICORN, it handles GET and POST requests, delivering JSON responses with HTTPException handling.</p>
                <div className='flex flex-wrap learning my-6'>
                    <p>Python</p><p>Uvicorn</p><p>Fast-API</p><p>Pandas</p>
                </div>
                <Link to="https://github.com/virumons/QuestionsAPI.git" className='px-[15px] py-[5px] my-[10px] border-2 border-black rounded-2xl hover:bg-[#0099FF] transition duration-100 ease-in-out'>Visit
            </Link>
            </div>
        </div>
       
        <div className='w-[80%] m-[10px] py-[20px] '>
            <h1 className='nos'>4</h1>
            <img src={fody} className=' w-[100%] sm:w-[100%]' ></img>
            <div>
                <p className='my-[20px]'>The UI/UX case study for a food delivery app, The case study mainly covers the user interface design thinking which delivers the process of creating a user interface design and documenting the process with collective elements used..</p>
                <div className='flex flex-wrap learning my-6'>
                    <p>AD illustator</p><p>Figma</p>
                </div>
                <Link to="https://www.behance.net/gallery/178072141/Foody-A-Food-Delivery-Application-%28UIUX%29" className='px-[15px] py-[5px] my-[10px] border-2 border-black rounded-2xl hover:bg-[#0099FF] transition duration-100 ease-in-out'>Visit
            </Link>
            </div>
        </div>
       
      </div>
    </div>
  )
}

export default Projects
