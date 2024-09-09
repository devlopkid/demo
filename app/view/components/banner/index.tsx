import Image from 'next/image'
import React from 'react'
import BannerBg from './images/bannerbg.png'
import Header from './Header'

const Banner = () => {
  return (
    <section className='relative h-screen max-h-[800px] 2xl:max-h-[889px]'>
      <div className='absolute inset-0'>
        <Image src={BannerBg} alt='banner' className='h-full w-full object-cover'/>
      </div>
      {/* <Header/> */}
      <div className='absolute z-10 bottom-10 lg:bottom-[144px] w-full'>
    <div className='container mx-auto px-4'>
    <div className='text-white max-w-[1028px]'>
      <h1 className='font-medium text-[24px] lg:text-[52px] 2xl:text-[54px] leading-6 xl:leading-[68px] 2xl:leading-[70.2px]'>Lorem ipsum dolor sit amet</h1>
      <p className='pt-3 lg:pt-[38px] font-normal text-[16px] lg:text-[18px] leading-6 lg:leading-[30.6px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. </p>
    </div>
    </div>
    </div>
    </section>
  )
}

export default Banner