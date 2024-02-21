import React from 'react';
import './App.css';

const Education = () => {
  return (
    <>
    <div className='flex flex-row justify-center content-center my-8'>
        <div className='flex flex-col justify-center content-center'>
        <div >
        <h1 className='text-[25px] sm:text-[40px] '>Education</h1>
        </div>

        <div className='w-[320px] border-2 border-black mt-5 bg-white p-[20px] sm:w-[600px] sm:h-[350px] shadow-[15px_15px_0px_0px_#FD9E06] flex flex-col justify-around content-center'>
           
            <h1 className='text-[25px] sm:text-[30px] font-semibold text-[#414141] my-[10px]'>SDM College of Engineering and Technology, Dharwad <span className='px-[8px] py-[5px] mx-[5px] w-[20%] text-[18px] text-white rounded-lg bg-[#4BB0F3]'>Current</span></h1>
            
            <h3 className='w-[40%] p-[5px] sm:w-[30%] text-center bg-[#D9D9D9] border-2 border-black'>2022-2025</h3>
            <div className='flex flex-wrap learning'>
            <p>Engineering approach</p><p>Problem-solving</p><p>computer architecture</p> <p>Unix and OS</p>
            </div>
        </div>

        <div className='h-[100px] w-[2px] mt-1 bg-[#464646] rounded-2xl '>

        </div>

        
        <div className='w-[320px] border-2 border-black mt-5 bg-white p-[20px] sm:w-[600px] sm:h-[350px] shadow-[15px_15px_0px_0px_#FD9E06] flex flex-col justify-around content-center'>
           
            <h1 className='text-[25px] sm:text-[30px] font-semibold text-[#414141] my-[10px]'>KLE CIM Munavalli Polytechnic, Hubli</h1>
            
            <h3 className='w-[40%] p-[5px] sm:w-[30%] text-center bg-[#D9D9D9] border-2 border-black'>2019-2022</h3>
            <div className='flex flex-wrap learning'>
            <p>Engineering fundamental</p><p>Exploring technology</p><p>Web development</p><p>Leadership</p>
            </div>
        </div>

        <div className='h-[100px] w-[2px] mt-1 bg-[#464646] rounded-2xl'>
        
        </div>

        <div className='w-[320px] border-2 border-black mt-5 bg-white p-[20px] sm:w-[600px] sm:h-[350px] shadow-[15px_15px_0px_0px_#FD9E06] flex flex-col justify-around content-center'>
           
           <h1 className='text-[25px] sm:text-[30px] font-semibold text-[#414141] my-[10px]'>Swami Vivekananda Vidya Mandir, Dombivali</h1>
           
           <h3 className='p-[5px] w-[30%] text-center bg-[#D9D9D9] border-2 border-black'>2019</h3>
           <div className='flex flex-wrap learning'>
           <p>Enjoyment</p><p>Fundamental Maths</p><p>History of India</p><p>Science</p>
           </div>
       </div>
      
        </div>
    </div>
 
    </>
  )
}

export default Education
