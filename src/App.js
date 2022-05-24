
import React from 'react'

function App() {
  return (
    <>

    <div className="flex bg-gray-100 h-20 items-center justify-between p-5 border-b-2 font-bold border-[tomato] ">
  <div className='lg:w-[20%]  lg:h-20 lg:border-r-2 flex items-center justify-end lg:p-10  border-[tomato] '>
    <img  src='../img/Group 39790.png' alt=''/>
  </div>
  <div className="w-[60%]  hidden h-20 lg:border-r-2  text-gray-400 border-[tomato] p-5 lg:flex items-center justify-between">
    <h1>Home</h1>
    <h1>About Us</h1>
    <h1>Support</h1>
    <h1>Products</h1>
  </div>
  <div  className='w-[20%] hidden h-20 lg:flex items-center justify-evenly'>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
  </div>
  <div className="flex lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg></div>
</div>

{/* section-2 */}
 
<div className='w-[90%] border-l-2  lg:flex border-[tomato]  mx-auto bg-[tomato] h-auto lg:h-[550px]'>
 <div className='h-full bg-white w-full lg:w-[60%] p-8'>
   <div className='lg:w-1/2 w-full mt-5'>
   <div className='flex items-center h-20 '>
   <h1 className='text-5xl'>Next Gen</h1>
   <img className='h-14' src='../img/Star 1.png' alt=''/>
   </div>
  
<h1 className='text-5xl h-20'>SMART WATCH</h1>
<p className='h-20 font-bold'>Everyone looks your watch and it represents
who you are your values and your personal style.</p>
<h1  className='font-bold h-16 mt-5'>$550.00</h1>
<div className=" hidden w-[90%] lg:flex justify-between items-center">
<div className='border border-black md:w-[40%] w-[25%]   h-8 relative'>
  <button className='bg-[tomato] w-full font-bold h-full animate-bounce text-sm border border-black absolute right-1 bottom-1'>Shop Now</button>
  
  </div>
  <img  className="" src="../img/g.png"/>
</div>
 </div>
 
 </div>
 <div className='lg:w-[40%] w-full lg:flex justify-center  bg-white'>
   <img className='h-[550px] w-full p-2' src='../img/v.png' alt='' />
 </div>

 </div>
 <div className="w-[90%] lg:hidden flex justify-evenly items-center">
<div className='border border-black w-[25%] h-8 relative'>
  <button className='bg-[tomato] w-full font-bold h-full animate-bounce text-sm border border-black absolute right-1 bottom-1'>Shop Now</button>
  
  </div>
  <img  className="" src="../img/g.png"/>
</div>
 <div className="w-[90%]  border-2 text-center lg:flex border-[tomato] mx-auto h-auto lg:h-[150px] mb-5 ">
   <div className="w-full lg:w-[60%]   lg:flex items-center justify-between ">
     <img  className="lg:h-[150px] mx-auto p-1" src="../img/Frame 43.png"/>
     <p className="w-full lg:w-[70%] p-5 text-lg font-bold">Everyone looks at your watch and it represents who you are, your values and your personal style.</p>
   </div>
   <div className="w-full lg:w-[40%] mb-5 lg:flex items-center justify-center text-4xl font-bold">
     <h1>What's Trending?</h1>
   </div>
 </div>

</>
  )
}

export default App 