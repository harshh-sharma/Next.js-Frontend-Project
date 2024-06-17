import React from 'react'
import { Spotlight } from './ui/Spotlight';

const Herosection = () => {
  return (
    <div className='min-h-screen bg-black flex justify-center items-center w-full'>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className='flex flex-col text-white w-full md:w-6/12 gap-5 flex-wrap'>
            <h1 className='text-3xl md:text-6xl font-bold text-white text-center'>Master the Art of Music</h1>
            <p className='text-center font-thin'>Dive into our comprensive music course and transform your musical journey today.Whether you're a beginner or looking to refine your skills,join us to <br/> unlock your true potential</p>
            <button>Explore courses</button>
        </div>
    </div>
  )
}

export default Herosection;