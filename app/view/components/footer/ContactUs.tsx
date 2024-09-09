import Image from 'next/image'
import React from 'react'
import Fb from './images/fb.png'
const ContactUs=()=>{
    return(
        <div>
<div className='container mx-auto px-4'>

            <div className=' border-b border-t border-[#FFFFFF1C] lg:flex'>
                <div className='lg:w-[35%] py-[30px] lg:py-[100px] 2xl:py-[120px] lg:pr-[44px] 2xl:pr-[54px]'>
                    <ul className='[&>li]:py-2.5 lg:[&>li]:py-[17px] 2xl:[&>li]:py-[19px] [&>li]:px-2.5 lg:[&>li]:px-[24px] 2xl:[&>li]:px-[27px] [&>li]:text-base lg:[&>li]:text-lg 2xl:[&>li]:text-xl [&>li]:font-medium [&>li]:bg-opacity-30 text-white [&>li]:bg-[#FFFFFF08] [&>li:not(:last-child)]:mb-2.5 lg:[&>li:not(:last-child)]:mb-4 2xl:[&>li:not(:last-child)]:mb-[19px]'>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>

                </div>
                <div className='lg:w-[30%] py-[30px] lg:py-[100px] 2xl:py-[120px] lg:border-l lg:border-r  border-t lg:border-t-0 border-b lg:border-b-0 border-[#FFFFFF1C] lg:pl-[50px] 2xl:pl-[60px] lg:pr-[50px] 2xl:pr-[68px]'>
                    <ul className='[&>li]:py-2.5 lg:[&>li]:py-[17px] 2xl:[&>li]:py-[19px] [&>li]:px-2.5 lg:[&>li]:px-[24px] 2xl:[&>li]:px-[27px] [&>li]:text-base lg:[&>li]:text-lg 2xl:[&>li]:text-xl [&>li]:font-medium [&>li]:bg-opacity-30 text-white [&>li]:bg-[#FFFFFF08] [&>li:not(:last-child)]:mb-2.5 lg:[&>li:not(:last-child)]:mb-[17px] 2xl:[&>li:not(:last-child)]:mb-[19px]'>
                        <li>Lorem</li>
                        <li>Ipsum</li>
                        <li>Consectetur</li>
                        <li>Efficitur</li>
                    </ul>

                </div>
                <div className='lg:w-[35%] py-[30px] lg:py-[100px] 2xl:py-[120px] lg:pl-[58px] 2xl:pl-[68px] text-white'>
                    <h4 className='text-left lg:text-[22px] 2xl:text-[26px] leading-4 font-medium pb-3 lg:pb-[30px] 2xl:pb-[35px]'>Contact Us</h4>
                    <p className='text-sm lg:text-base pb-2.5 lg:pb-4 2xl:pb-5'>Lorem Ipsum, <span className='block'>Iso lorem,Iso Lorem Posum</span></p>
                    <div className='text-sm lg:text-base font-semibold'>
                        <a href="tel:+910000000000" className='block'>+91 00000 00000</a>
                        <a href="mailto:info@demo.com" className='block'>info@demo.com</a>

                    </div>
                    <div className='pt-4 lg:pt-8 2xl:pt-10'>
                        <p className='pb-2.5 lg:pb-4 2xl:pb-5 text-sm lg:text-base font-semibold'>Follow us on</p>
                        <ul className='[&>li:not(:last-child)]:pr-2.5 lg:[&>li:not(:last-child)]:pr-[14px] [&>li]:inline-block'>
                            <li><a href="#"><Image src={Fb} alt='fb'/></a></li>
                            <li><a href="#"><Image src={Fb} alt='fb'/></a></li>
                            <li><a href="#"><Image src={Fb} alt='fb'/></a></li>
                            <li><a href="#"><Image src={Fb} alt='fb'/></a></li>
                            <li><a href="#"><Image src={Fb} alt='fb'/></a></li>

                        </ul>

                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default ContactUs