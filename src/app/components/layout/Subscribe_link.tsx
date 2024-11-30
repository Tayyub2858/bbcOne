"use client";

import { useState } from "react";
import { Menu } from "@/app/data/Data";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

interface SelectedOption {
    section: string;
    lorem: string;
}

const SubscribeLink: React.FC = () => {
    const [isTextVisible, setIsTextVisible] = useState<boolean>(true);

    const handleTextClick = (): void => {
        setIsTextVisible(!isTextVisible);
    };

    const predefinedUrl: string = "https://feeds.ipsum.com/lorem.res";

    const handleCopy = (): void => {
        navigator.clipboard
            .writeText(predefinedUrl)
            // .then(() => {
            //     toast.success("URL copied to clipboard!"); // Show success toast
            // })
            .catch((err) => {
                console.error("Failed to copy: ", err);
                // toast.error("Failed to copy URL");
            });
    };

    const [selectedOption, setSelectedOption] = useState<SelectedOption | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const handleOptionSelect = (menu: { key: number; section: string; lorem: string }) => {
        setSelectedOption({ section: menu.section, lorem: menu.lorem });
        setIsDropdownOpen(false);
    };



    return (
        <>
            <div className="container mx-auto px-5 lg:px-24 py-8 mt-6">
                <div className="bg-white py-8">
                    {isTextVisible ? (
                        <h2
                            className="text-black text-center title-font font-bold px-2 text-lg lg:text-3xl mb-4 cursor-pointer"
                            onClick={handleTextClick}
                        >
                            Subscribe to the link Lorem Ipsum using Link &gt;
                        </h2>
                    ) : (
                        <h2
                            className="text-black text-center title-font font-semibold text-xl mb-4 cursor-pointer"
                        >
                            <p className="lg:w-1/2 text-black px-2 text-center mx-auto flex items-center justify-center h-full lg:px-20">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>
                            <div className="flex w-full md:justify-center justify-center items-center mt-8">
                                <div className="relative w-1/3">
                                    <input
                                        type="text"
                                        id="hero-field"
                                        name="hero-field"
                                        className="w-full border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-gray-700 text-sm outline-none text-gray-700 py-1 px-3 leading-8 bg-transparent disabled:bg-transparent"
                                        disabled
                                        placeholder="https://feeds.ipsum.com/lorem.res"
                                        readOnly
                                    />
                                </div>
                                <button onClick={handleCopy} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-r text-lg h-full">
                                    Copy RSS Link
                                </button>
                            </div>

                            <p className="lg:w-1/2 text-black text-center mx-auto flex items-center justify-center h-full lg:px-20 mt-8">
                                Still need help? <Link href="https://feeds.ipsum.com/lorem.res" target="_blank" className="text-blue-500">&nbsp;&nbsp; Click here</Link>
                            </p>



                        </h2>
                    )}
                </div>


                <div className="flex flex-col justify-start items-start h-auto mt-8 md:flex-row">
                    <div className="relative w-[300px]">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full h-[50px] bg-white border border-gray-300 rounded-md shadow-sm px-4 flex items-center justify-between text-gray-700 text-base"
                        >
                            <span>
                                {selectedOption ? (
                                    <>
                                        <span className="font-bold">{selectedOption.section}</span> - {selectedOption.lorem}
                                    </>
                                ) : (
                                    "Select an option"
                                )}
                            </span>
                            <ChevronDownIcon className="h-5 w-5 text-gray-500" fill="currentColor" />
                        </button>

                        {isDropdownOpen && (
                            <ul className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                {Menu.map((menu) => (
                                    <li
                                        key={menu.key}
                                        onClick={() => handleOptionSelect(menu)}
                                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center"
                                    >
                                        <span className="font-bold">{menu.section}</span> - {menu.lorem}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 py-2 px-4 mt-2.5 sm:mt-0 ml-4 sm:ml-0">
                        <button className="flex items-center justify-center w-full sm:w-fit h-[36px] bg-black text-white border-2 border-white rounded-xl gap-2 px-4 shadow-lg shadow-gray-500/40 transition-all duration-300 ease-in-out transform hover:scale-110 hover:opacity-90 hover:delay-150">
                            <span className="font-bold">Listen on</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1333.33 1333.3" className="w-6 h-6">
                                <path d="M666.66 0C298.48 0 0 298.47 0 666.65c0 368.19 298.48 666.65 666.66 666.65 368.22 0 666.67-298.45 666.67-666.65C1333.33 298.49 1034.88.03 666.65.03l.01-.04zm305.73 961.51c-11.94 19.58-37.57 25.8-57.16 13.77-156.52-95.61-353.57-117.26-585.63-64.24-22.36 5.09-44.65-8.92-49.75-31.29-5.12-22.37 8.84-44.66 31.26-49.75 253.95-58.02 471.78-33.04 647.51 74.35 19.59 12.02 25.8 37.57 13.77 57.16zm81.6-181.52c-15.05 24.45-47.05 32.17-71.49 17.13-179.2-110.15-452.35-142.05-664.31-77.7-27.49 8.3-56.52-7.19-64.86-34.63-8.28-27.49 7.22-56.46 34.66-64.82 242.11-73.46 543.1-37.88 748.89 88.58 24.44 15.05 32.16 47.05 17.12 71.46V780zm7.01-189.02c-214.87-127.62-569.36-139.35-774.5-77.09-32.94 9.99-67.78-8.6-77.76-41.55-9.98-32.96 8.6-67.77 41.56-77.78 235.49-71.49 626.96-57.68 874.34 89.18 29.69 17.59 39.41 55.85 21.81 85.44-17.52 29.63-55.89 39.4-85.42 21.8h-.03z" fill="#1ed760" fillRule="nonzero" />
                            </svg>
                            <span className="font-bold">Spotify</span>
                        </button>

                        <button className="flex transition ease-in-out delay-150 items-center justify-center w-full sm:w-fit h-[36px] bg-black text-white border-2 border-white rounded-xl gap-2 px-4 shadow-lg shadow-gray-500/40 transition-all duration-300 ease-in-out transform hover:scale-110 hover:opacity-90 hover:delay-150">
                            <span className="font-bold">Listen on</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640">
                                <path d="M494.782 340.02c-.803-81.025 66.084-119.907 69.072-121.832-37.595-54.993-96.167-62.552-117.037-63.402-49.843-5.032-97.242 29.362-122.565 29.362-25.253 0-64.277-28.607-105.604-27.85-54.32.803-104.4 31.594-132.403 80.245C29.81 334.457 71.81 479.58 126.816 558.976c26.87 38.882 58.914 82.56 100.997 81 40.512-1.594 55.843-26.244 104.848-26.244 48.993 0 62.753 26.245 105.64 25.406 43.606-.803 71.232-39.638 97.925-78.65 30.887-45.12 43.548-88.75 44.316-90.994-.969-.437-85.029-32.634-85.879-129.439l.118-.035zM414.23 102.178C436.553 75.095 451.636 37.5 447.514-.024c-32.162 1.311-71.163 21.437-94.253 48.485-20.729 24.012-38.836 62.28-33.993 99.036 35.918 2.8 72.591-18.248 94.926-45.272l.036-.047z" fill="#ffff" fillRule="nonzero" />
                            </svg>
                            <span className="font-bold">Apple</span>
                        </button>

                        <button className="flex items-center justify-center w-full sm:w-fit h-[36px] bg-black text-white border border-white rounded-xl gap-2 px-4 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 hover:opacity-90 hover:delay-150">
                            <span className="font-bold">Listen on</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326667 333333" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" width="20" height="20">
                                <path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4" />
                                <path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853" />
                                <path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04" />
                                <path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335" />
                            </svg>
                            <span className="font-bold">Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubscribeLink;
