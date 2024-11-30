"use client"

import { HostsData } from '@/app/data/Data'
import React from 'react'

function Hosts() {
    return (
        <>
            <div className="container px-6 lg:px-24 py-8 mx-auto">
                <div className="flex flex-col  w-full mb-8">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Hosts</h1>
                </div>
                <div className="flex flex-wrap -m-2 gap-10">
                    {HostsData.map((host, index) => (
                        <>
                            <div className="p-2 lg:w-[40%] md:w-[45%] w-full">
                                <div className="h-full flex items-center border-gray-200 border p-4 rounded bg-white">
                                    <img
                                        alt="Hosts"
                                        className="w-[100px] h-[100px] bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                        src={host.url}
                                    />
                                    <div className="flex-grow">
                                        <h2 className="text-black title-font font-bold text-3xl">{host.name}</h2>
                                        <p className="text-black text-xl font-medium">{host.position}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Hosts
