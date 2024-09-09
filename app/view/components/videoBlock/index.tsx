import Image from 'next/image'
import React from 'react'
import Play from './images/play.png'
const VideoBlock=()=>{
    return(
        <section className=''>
            <div className='container mx-auto px-4'>
                <div className='py-[30px] lg:py-[80px] 2xl:py-[100px]'>
                    <div className='relative'>
                <video src='#' controls muted poster='/assets/vidoePoster.png' className=' rounded-lg lg:rounded-[38px]'>

                </video>
                <div className='text-white absolute bottom-6 lg:bottom-[87px] left-3 lg:left-[108px]'>
                    <Image src={Play} alt='play' className='w-auto h-[25px] lg:h-auto'/>
                    <h2 className='text-[16px] lg:text-[36px] 2xl:text-[38px] leading-5 lg:leading-[39px] 2xl:leading-[41.8px] pt-1 lg:pt-[38px]'>Lorem ipsum dolor sit amet.</h2>
                    <h5 className='font-medium text-[14px] lg:text-[23px] 2xl:text-[25px] leading-[23px] 2xl:leading-[25px] lg:pt-[38px] lg:pb-[14px]'>Sanchez Alexis</h5>
                    <p className='text-[12px] lg:text-[18px] 2xl:text-[20px] leading-3 lg:leading-4 xl:leading-5 2xl:leading-[22px]'>CEO & Founder of Demo</p>
                </div>
                </div>

                </div>
            </div>
        </section>
    )
}
export default VideoBlock