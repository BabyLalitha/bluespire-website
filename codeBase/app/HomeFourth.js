import React from 'react'

function HomeFourth() {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div>
                {/* text container */}
                <div className='text-center w-[100%]'>
                    <h2 className='text-4xl font-medium'>
                        You’re in good company
                    </h2>
                    <div className='w-[70vw] mx-auto'>
                        <p className='text-2xl font-light my-7'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        </p>
                    </div>
                </div>

                {/* box container */}
                <div className='my-16'>
                    <div className='w-[80vw] grid md:grid-cols-4 grid-cols-2 gap-5 gap-y-20 max-w-screen-2xl mx-auto'>
                        <div className='h-[60px] w-[150px] bg-gray-200 mx-auto'>
                        </div>
                        <div className='h-[60px] w-[150px] bg-gray-200 mx-auto'>
                        </div>
                        <div className='h-[60px] w-[150px] bg-gray-200 mx-auto'>
                        </div>
                        <div className='h-[60px] w-[150px] bg-gray-200 mx-auto'>
                        </div>
                        <div className='h-[60px] w-[150px] bg-gray-200 mx-auto'>
                        </div>
                        <div className='h-[60px] w-[150px] bg-gray-200 mx-auto'>
                        </div>
                        <div className='h-[60px] w-[150px] bg-gray-200 mx-auto'>
                        </div>
                        <div className='h-[60px] w-[150px] bg-gray-200 mx-auto'>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='w-[100%] md:h-[30vh] h-auto bg-light-gray flex flex-col md:flex-row justify-center items-center'>
                        <div className='md:w-[50vw] w-[90%] pt-7 pb-5'>
                            <p className='text-center text-3xl font-extralight '>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            </p>
                        </div>
                        <div className='md:w-[40vw] pb-7 md:pb-0 w-[100%] flex justify-center items-center'>
                            <div className='md:ml-10 flex justify-center items-center w-auto'>
                                <button className='w-32 border-2 rounded-3xl border-blue text-blue hover:bg-blue hover:text-white mr-10'>
                                    Join Today
                                </button>
                                <button className='w-32 border-2 rounded-3xl border-blue text-blue hover:bg-blue hover:text-white'>
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFourth