import Image from 'next/image'
import React from 'react'
import BgImage from './images/sliderBg.png'
import SliderImage from './images/sliderImage.png'
const SliderOne =()=>{
    return(
        <section className='relative'>
            <div className='absolute bottom-0 lg:bottom-auto lg:inset-0 '>
                <Image src={BgImage} alt='' className='h-[450px] sm:h-[500px] lg:h-auto object-cover object-right lg:object-fill'/>
               
            </div>
            <div className='relative py-[30px] lg:py-[80px] 2xl:py-[100px]'>
                <div className='container mx-auto px-4'>
                    <div className='lg:flex'>
                        <div className='lg:w-[50%] 2xl:w-[52%] my-auto'>
                            
                            <h2 className='text-[24px] lg:text-[50px] 2xl:text-[54px] leading-7 lg:leading-[60px] 2xl:leading-[66px] font-medium pb-4 lg:pb-10 2xl:pb-[48px]'><span className='block font-light'>Lorem Ipsum</span> dolor sit consectetur</h2>
                            <p className='text-base lg:text-lg 2xl:text-xl lg:leading-7 2xl:leading-[34px] pb-3 lg:pb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum. </p>
                        </div>
                        <div className='lg:w-[50%] 2xl:w-[48%] pt-6 lg:pt-0'>
<div className='lg:w-[400px] 2xl:w-[532px] rounded-[14px] bg-white pb-4 lg:pb-[38px] 2xl:pb-[42px] ml-auto'>
    <h5 className='pt-3 lg:pt-[30px] 2xl:pt-[35px] pl-3 lg:pl-[38px] 2xl:pl-[42px] pb-2.5 lg:pb-[18px] 2xl:pb-[22px] font-medium text-lg lg:text-[26px] 2xl:text-[29px] leading-6 lg:leading-7 2x:leading-8'>Lorem Ipsum?</h5>
    <div className='relative px-1.5 lg:px-2.5 '>
        <div>
    <Image src={SliderImage} alt='slider' className='w-full h-auto sm:h-[450px] lg:h-auto object-cover object-top'/>
    </div>
  
    <div className='absolute bottom-0 '>
    <div className='pl-3 lg:pl-[28px] 2xl:pl-[32px] pr-3 lg:pr-[25px] 2xl:pr-[29px]'>
        <h4 className='text-lg lg:text-[25px] 2xl:text-[29px] leading-6 lg:leading-7 2xl:leading-8 font-medium pb-3 2xl:pb-5'>Lorem Ipsum</h4>
        <p className='text-xs lg:text-sm 2xl:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    </div>
    </div>

</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default SliderOne