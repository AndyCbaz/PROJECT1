import React from 'react'
import hero from '../assets/images/illustration-hero.svg'
import music from '../assets/images/icon-music.svg'


const Body = () => {
  return (
    <div className='text-sm border-solid border-red-500 border-2 rounded-3xl bg-white flex flex-col items-center '>
        <img src={hero} alt="illustrationhero" className='rounded-t-3xl' />
        <h1 className='pt-4 border-solid border-red-500 border-2 font-bold'>
            Order Summary
        </h1>
        <div className='a border-solid border-red-500 border-2 flex w-72 mt-10'>
            <p className='text-base text-desaturatedblue-1 tracking-tigh'>You can now listen to millions of songs audiobooks, and podcasts on any device anywhere you like !</p>
        </div>
        <div className='flex items-center mt-10 border-solid border-red-500 border-2 gap-6'>
            <img src={music} alt="" />
            <div className='flex flex-col'>
                <span className='font-bold text-base'>Annual Plan</span>
                <span className='text-base text-desaturatedblue-1'>$59.99/year</span>
            </div>
            <a href="" className='text-base text-indigo-700 font-bold underline'>Change</a>
        </div>
    </div>
  )
}

export default Body