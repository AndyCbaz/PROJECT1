import React from 'react'
import hero from '../assets/images/illustration-hero.svg'
import music from '../assets/images/icon-music.svg'


const Body = () => {
  return (
    <div className='text-sm rounded-3xl bg-white flex flex-col items-center '>
        <img src={hero} alt="illustrationhero" className='rounded-t-3xl' />
        <h1 className='mt-8 font-bold'>
            Order Summary
        </h1>
        <div className='flex w-72 mt-10 lg:w-80'>
            <p className='text-base text-desaturatedblue-1 tracking-tigh'>
                You can now listen to millions of songs audiobooks, and podcasts on any device anywhere you like !
            </p>
        </div>
        <div className='flex items-center mt-10 gap-10'>
            <img src={music} alt="" />
            <div className='flex flex-col'>
                <span className='font-bold text-base'>
                    Annual Plan
                </span>
                <span className='text-base text-desaturatedblue-1'>
                    $59.99/year
                </span>
            </div>
            <a href="#" className='text-base text-indigo-700 font-bold underline active:text-brightblue-2 active:no-underline lg:ml-8'>
                Change
            </a>
        </div>
        <div className='mt-10 text-base'>
            <button className='bg-brightblue-1 text-white px-14 py-4 rounded-2xl active:bg-brightblue-2'>
                Proceed to Payment
            </button>
        </div>
        <div className='my-10'>
            <button className='text-desaturatedblue-1 text-base font-bold active:text-darkblue-1 '>
                Cancel Order
            </button>
        </div>
    </div>
  )
}

export default Body