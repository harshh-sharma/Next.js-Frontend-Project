"use client"
import data from '@/data/data';
import React from 'react';
import { BackgroundGradient } from './ui/background-gradient';

interface data{
    title:string,
    description:string
}

const Featuresection = () => {
  return (
    <div className='flex flex-col w-full h-auto justify-center items-center bg-gray-900 py-5'>
        <div className='flex justify-center items-center flex-col my-10'>
            <h1 className='text-2xl text-center text-white my-2 font-bold'>Features</h1>
            <p className='text-center text-xl text-white font-semibold font-serif my-2'>Learn with the Best</p>
        </div>
        <div className='flex flex-wrap gap-5 justify-center items-center w-full'>
            {data.map((item:data) => <BackgroundGradient>
                <div className='w-[300px] h-[200px] px-5 py-5 gap-2 bg-zinc-900 rounded-xl'>
                    <h1 className='text-xl font-semibold font-serif text-center text-white'>{item?.title}</h1>
                    <p className='mt-2 text-center text-sm text-white'>{item.description}</p>
                    <div className='w-full justify-center items-center mt-5 flex'>
                    <button className="px-5 py-2 text-center text-sm rounded-lg bg-white">View more</button>
                    </div>
                </div>
            </BackgroundGradient>)}
        </div>
    </div>
  )
}

export default Featuresection