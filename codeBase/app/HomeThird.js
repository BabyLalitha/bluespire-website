import React from 'react'
import Image from 'next/image';
import HomeImageOne from './../public/assets/homeImg01.png';

function HomeThird() {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div className='my-16'>
                <div className='w-[100%] h-auto flex flex-col md:flex-row justify-center items-center'>
                    <div className='h-full w-[100%] md:w-1/2'>
                        <h3 className='mb-5 font-semibold text-lg pl-[5%] md:hidden'>
                            Sed ut perspiciatis unde omnis
                        </h3>
                        <Image className='w-[90vw] h-auto md:h-[45vh] md:w-auto mx-auto my-5' src={HomeImageOne} alt="homeImageone" />
                    </div>
                    <div className='h-full md:w-1/2 w-[100%] flex justify-center items-center'>
                        <div className='md:w-[40vw] w-[90%]'>
                            <h3 className='mb-5 font-semibold text-lg hidden md:block'>
                                Sed ut perspiciatis unde omnis
                            </h3>
                            <p className='text-md font-light'>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-[100%] h-auto flex flex-col md:flex-row justify-center items-center my-10 md:my-0'>
                    <div className='h-full w-[100%] md:w-1/2 md:order-2'>
                        <h3 className='mb-5 font-semibold text-lg pl-[5%] md:hidden'>
                            Sed ut perspiciatis unde omnis
                        </h3>
                        <Image className='w-[90vw] h-auto md:h-[45vh] md:w-auto mx-auto my-5' src={HomeImageOne} alt="homeImageone" />
                    </div>
                    <div className='h-full md:w-1/2 w-[100%] flex justify-center items-center'>
                        <div className='md:w-[40vw] w-[90%]'>
                            <h3 className='mb-5 font-semibold text-lg hidden md:block'>
                                Sed ut perspiciatis unde omnis
                            </h3>
                            <p className='text-md font-light'>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeThird