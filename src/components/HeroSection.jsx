import React from 'react'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'

export const HeroSection = () => {
  return (
    <section className="bg-black">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center items-center justify-center flex flex-col">
        <img src="logo.png" alt="Logo Here...." className='w-42 h-42 animate-bounce-slow'/>
        <h1 className="mb-4 -mt-48 text-5xl font-extrabold text-white z-20 relative top-0">CryptX</h1>
        <p className="mb-8 text-lg font-normal text-gray-400 "> At CryptX we focus on providing accurate information about different type of Exchanges and Coins available in the market to contribute to your economic growth.</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 transition hover:scale-125 delay-100">
            <a href="#about" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700">
                Learn more
               <BsFillArrowRightSquareFill color='white' size={20} className='ml-4'/>
            </a>
        </div>
    </div>
</section>
  )
}

export default HeroSection