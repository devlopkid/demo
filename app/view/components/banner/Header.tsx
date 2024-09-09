import Image from 'next/image'
import React from 'react'
import Logo from './images/Frame.png'

const Header = () => {
  return (
    <div className='absolute top-4 lg:top-[21px] w-full'>
    <div className='container mx-auto px-4'>
      <div className='flex justify-between items-center'>
        <Image src={Logo} alt='logo' className='w-[100px] lg:w-auto h-[5s0px] lg:h-auto'/>
        <ul className='hidden lg:inline-block [&>li]:font-medium [&>li]:text-white [&>li]:leading-6 [&>li]:text-[16px] [&>li]:inline-block [&>li:not(:last-child)]:mr-[28px]'>
          <li><a href="#">About Us</a></li>
          <li><a href="#">How We Help</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Portfolios</a></li>
         <li><a href="#">Testimonials</a></li>
        <li><a href="#">Insights</a></li>
        </ul>
       <a href='#' className='text-[14px] sm:text-[16px] lg:leading-6 font-semibold rounded-[10px] py-2 lg:py-[18px] px-3 lg:px-[55px] bg-white'>Contact Us</a>
      </div>
    </div>
    </div>
  )
}

export default Header