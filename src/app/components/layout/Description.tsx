"use client"

import React from 'react'

function Description() {
    return (
        <>
            <div className="container px-4 sm:px-8 md:px-16 lg:px-24 py-8 mx-auto">
                <div className="flex flex-wrap w-full mb-8 flex-col items-center text-center">
                    <p className="lg:w-1/2 w-full leading-relaxed lg:text-xl text-black">
                        Lorem Ipsum has been the <strong>ever since the 1500s</strong>
                    </p>
                    <p className="lg:w-1/2 w-full leading-relaxed lg:text-xl text-black">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="w-full h-full flex items-center justify-center ">
                    <img
                        className="w-[95%] sm:h-[40vh] lg:w-[70%] lg:h-[30vh] flex-shrink-0"
                        src="https://www.pngkey.com/png/detail/494-4945740_horizontal-logo-for-on-line-logo.png"
                        alt="Front Image 2"
                    />
                </div>
                <div className="h-full text-center mt-8 px-4 sm:px-8">
                    <p className="mb-8 text-base lg:text-xl font-medium">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    </p>
                </div>

                <div className="mt-12">
                    <div className="border-b border-gray-400"></div>
                </div>
            </div>
        </>
    )
}

export default Description
