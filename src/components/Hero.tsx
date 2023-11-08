import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='bg-[url("")]
      h-[90vh]  flex flex-col items-center justify-center max-w-[1200px] mx-auto w-full gap-24
    '>
      <div className='text-white flex flex-col gap-5'>
         <h1 className='text-center text-2xl lg:text-5xl font-bold'>Video Sharing, Reinvented for You</h1>
        <h1  className='text-3xl text-center font-semibold'>Strengthening Engagement and <br /> Interaction Between Creators and Fans.</h1>
      </div>
        
         <div className=''>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-bounce text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
</svg>

         </div>
     </div>
  )
}
