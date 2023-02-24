import React from 'react'

const Body = () => {
  return (
    <div className='text-sm border-solid border-red-500 border-2 rounded-lg bg-white flex flex-col items-center '>
        <img src="./src/assets/images/illustration-hero.svg" alt="illustrationhero" className='rounded-t-3xl' />
        <h1 className='pt-4 border-solid border-red-500 border-2 font-bold'>
            Order Summary
        </h1>
        <div className='a border-solid border-red-500 border-2 flex w-72 mt-10'>
            <p className='text-base text-desaturatedblue-1 tracking-tigh'>You can now listen to millions of songs audiobooks, and podcasts on any device anywhere you like !</p>
        </div>
    </div>
  )
}

export default Body