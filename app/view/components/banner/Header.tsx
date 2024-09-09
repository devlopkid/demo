"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Logo from './images/Frame.png'
import { MdClose } from 'react-icons/md'
import { TiThMenu } from 'react-icons/ti'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sideBar,setSiderBar]=useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    // <div className='absolute top-4 lg:top-[21px] w-full'>
    // <div className='fixed top-4 lg:top-[21px] w-full z-50'>
    <>
    <div className={`fixed top-4 lg:top-[21px] w-full z-50 ${scrolled?'bg-black !top-0 py-4':''}`}>
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
        <div className='flex gap-4 items-center'>
       <a href='#' className='text-[14px] sm:text-[16px] lg:leading-6 font-semibold rounded-[10px] py-2 lg:py-[18px] px-3 lg:px-[55px] bg-white'>Contact Us</a>
       <p onClick={()=>setSiderBar(true)} className=' lg:hidden'>
       <TiThMenu className='text-white text-2xl'/>
       </p>
       </div>
      </div>
      
    </div>
    </div>
    {sideBar&&
    <div className='h-[100vh] w-full bg-black fixed top-0 z-[100] lg:hidden'>
      <div className='flex justify-end px-7 pt-6'>
      <MdClose className='text-white text-2xl ' onClick={()=>setSiderBar(false)} />
      </div>
      <ul className='[&>li]:font-medium [&>li]:text-white [&>li]:leading-6 [&>li]:text-xl [&>li:not(:last-child)]:mb-[28px] py-[70px] px-10'>
          <li><a href="#">About Us</a></li>
          <li><a href="#">How We Help</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Portfolios</a></li>
         <li><a href="#">Testimonials</a></li>
        <li><a href="#">Insights</a></li>
        </ul>
    </div>}
    </>
  )
}

export default Header