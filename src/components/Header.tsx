import Image from 'next/image'
import React from 'react'
import waitlist from '@zootools/waitlist-js'
export default function Header() {

  const clickPopup = (event : any ) => {
    event.preventDefault();
  
    // Pass your waitlist ID
    waitlist.openPopup("Cq1V1JRI0q5TK7S71Tvr")
  }
  return (
    <div  className='flex justify-between max-w-[1200px]  rounded-b-lg mx-auto w-full items-center h-[70px] px-4 py-3 sticky top-0 bg-black/40'>
          <div>
             <Image  src={`/img/logo.jpg`}  width={200} height={200} alt='logo' className='w-12 h-12 rounded-full cursor-pointer '  />
          </div>
            <div className='flex items-center gap-3 bg-black/20 border border-indigo-500 py-2 px-5 rounded-lg cursor-pointer hover:shadow-2xl  hover:scale-110'>
            <span className="relative flex h-3 w-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>
                 <h1 className='font-semibold text-white' onClick={clickPopup}>Join waitlist</h1>
            </div>
        </div>
  )
}
