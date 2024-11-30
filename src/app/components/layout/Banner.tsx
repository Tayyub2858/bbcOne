"use client"

function Banner() {
    return (
        <>
            <div className='bg-white mt-6'>
                <div className="container mx-auto flex px-5 lg:px-24 py-8 md:flex-row flex-col items-center">
                    <div className="w-[60%] lg:max-w-[400px] lg:w-[80%] md:w-1/2 w-full mb-10 md:mb-0">
                        <img
                            className="object-cover object-center"
                            alt="hero"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/BBC_One_logo_2021.svg/2560px-BBC_One_logo_2021.svg.png"
                        />
                    </div>

                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h2 className="text-black title-font font-bold text-3xl mb-4">Lorem Ipsum is simply dummy text of the printing</h2>
                        <p className="mb-8 text-xl font-medium text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
                        <div className="flex w-full md:justify-start justify-center items-end">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Lorem Ipsum Lorem Ipsum</button>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
