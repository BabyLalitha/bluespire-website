import React from 'react'

function HomeService() {
    return (
        <div className='font-poppins max-w-screen-2xl mx-auto'>
            <div className='h-auto w-[100%] flex flex-col items-center max-w-screen-2xl'>

                {/* *************Heading************** */}
                <div className='w-[90vw] my-16 max-w-screen-xl mx-auto'>
                    <p className='font-poppins text-4xl text-center font-normal'>
                        Within the vast blue canvas of inspiration, we weave logic, creativity, and curiosity to craft, solve, and create.
                    </p>
                </div>

                {/* ***************Services container**************** */}
                <div className='grid grid-cols-1 sm:grid-cols-2  gap-2 gap-y-16 w-[100%] max-w-screen-xl mx-auto'>
                    <div className='w-[90%] sm:w-[90%] mx-auto'>

                        <div className='mb-4'>
                            <p className='text-lg font-semibold'>
                                Consult And Design
                            </p>
                        </div>
                        <div className='mb-6'>
                            <p className='text-md'>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                            </p>
                        </div>
                        <button className='border-2 border-blue rounded-3xl px-5 text-blue hover:bg-blue hover:text-white'>
                            Learn More
                        </button>
                    </div>
                    <div className='w-[90vw] sm:w-[90%] mx-auto'>

                        <div className='mb-4'>
                            <p className='text-lg font-semibold'>
                                Engineer & Automate
                            </p>
                        </div>
                        <div className='mb-6'>
                            <p className='text-md'>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                            </p>
                        </div>
                        <button className='border-2 border-blue rounded-3xl px-5 text-blue hover:bg-blue hover:text-white'>
                            Learn More
                        </button>
                    </div>
                    <div className='w-[90vw] sm:w-[90%] mx-auto'>
                        <div className='mb-4'>
                            <p className='text-lg font-semibold'>
                                Analyze & Optimize
                            </p>
                        </div>
                        <div className='mb-6'>
                            <p className='text-md'>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                            </p>
                        </div>
                        <button className='border-2 border-blue rounded-3xl px-5 text-blue hover:bg-blue hover:text-white'>
                            Learn More
                        </button>
                    </div>
                    <div className='w-[90vw] sm:w-[90%] mx-auto'>
                        <div className='mb-4'>
                            <p className='text-lg font-semibold'>
                                Cloud Solutions
                            </p>
                        </div>
                        <div className='mb-6'>
                            <p className='text-md'>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                            </p>
                        </div>
                        <button className='border-2 border-blue rounded-3xl px-5 text-blue hover:bg-blue hover:text-white'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeService