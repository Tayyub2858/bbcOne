'use client';

function Hero() {
    return (
        <>
            <div
                className="relative w-full h-screen bg-cover bg-center flex justify-center pt-32 gap-24"
                style={{
                    backgroundImage: "url('https://i.ibb.co/w7R8CLH/bg.png')",
                    height: '100vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {/* First Image - Hidden on Mobile */}
                <img
                    className="w-[30%] h-[70%] max-w-none mx-4 flex-shrink-0 hidden lg:block"
                    src="https://static.vecteezy.com/system/resources/thumbnails/009/384/332/small_2x/old-vintage-book-clipart-design-illustration-free-png.png"
                    alt="Front Image 1"
                />

                
                <div className="w-[60%] sm:w-[80%] lg:w-[20%] h-[40%] max-w-none mx-4 flex flex-col items-center justify-between">
                    {/* Second Image for Desktop */}
                    <img
                        className="w-full sm:h-[80vh] lg:h-auto sm:w-[90%] flex-shrink-0 hidden lg:block"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/BBC_One_logo_2021.svg/2560px-BBC_One_logo_2021.svg.png"
                        alt="Front Image 2"
                    />

                    {/* Second Image for Mobile */}
                    <img
                        className="w-full h-[40vh] sm:w-[90%] lg:hidden flex-shrink-0"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/BBC_One_logo_2021.svg/2560px-BBC_One_logo_2021.svg.png"
                        alt="Front Image 2 Mobile"
                    />

                    {/* Text and Button Section */}
                    <div className="flex flex-col items-center justify-end w-fit mt-4">
                        <p className="text-white text-center mt-4 font-semibold text-2xl sm:text-3xl lg:text-2xl">
                            Lorem Ipsum Text Here
                        </p>
                        <button className="flex mx-auto mt-12 text-white bg-[#f6c300] border-1 pt-3 pb-3 px-8 focus:outline-none hover:bg-yellow-500 rounded-full font-semibold text-medium sm:text-lg lg:text-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 19V5l15 7-15 7z" />
                            </svg>
                            START LISTENING
                        </button>
                    </div>
                </div>
            </div>
        
        </>


    );
}

export default Hero;
