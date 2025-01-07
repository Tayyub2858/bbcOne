'use client';

import React from 'react';
import { EpisodesData } from '@/app/data/Data';

function Episodes() {
    return (
        <>
            <div className="container px-6 lg:px-24 py-8 mx-auto">
                <div className="flex flex-col w-full mb-8">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Latest Episodes</h1>
                </div>
                <div className="flex flex-wrap -m-2 gap-10">
                    <div className="p-2 lg:w-full md:w-full w-full">
                        {EpisodesData?.map((episod, index) => (
                            <div
                                key={episod.key}  
                                className="h-fit mb-8 items-center border-gray-200 border lg:px-10 p-6 lg:pl-10 rounded bg-white hover:bg-[#e7e7e7] leading-normal"
                            >
                                <p className="text-black text-xl font-medium mb-1">{episod.date}</p>
                                <h4 className="text-black title-font font-bold text-xl mb-1">{episod.episode}</h4>
                                <h1 className="text-black title-font font-bold text-3xl mb-1">{episod.title}</h1>
                                <p className="mb-8 text-base lg:text-xl font-medium text-justify lg:pr-12">{episod.details}</p>
                                <button className="flex w-fit h-fit px-4 py-1 text-black border border-black rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[30px] mr-2" viewBox="0 0 24 24" fill="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 19V5l15 7-15 7z" />
                                    </svg>
                                    <span className='mt-0.5'>{episod.videoTime}</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Episodes;
