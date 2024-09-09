import Image from 'next/image'
import React from 'react'
import WorkImage from './images/work.png'
const WorkBlock=()=>{
    return(
<section className='relative'>
    <div className='absolute inset-0 h-full'>
        <Image src={WorkImage} alt='work' className='h-full object-cover'/>
    </div>
    <div className='relative py-[60px] lg:py-[100px] 2xl:py-[124px]'>
    <div className='container mx-auto px-4'>
        <div className='lg:flex'>
        <div className='text-white lg:w-1/2'>
            <h3 className='text-[26px] lg:text-[36px] 2xl:text-[46px] leading-8 lg:leading-[45px] 2xl:leading-[55px] font-medium pb-5 lg:pb-7 2xl:pb-10'>Let’s work Together</h3>
            <p className='text-base lg:text-lg 2xl:text-xl leading-6 lg:leading-7 2xl:leading-8 pb-4 lg:pb-0'>Lorem ipsum dolor sit amet consectetur. Mattis cursus nulla ornare tristique euismod rcu tristique nisl id nibh. viverra feugiat viverra.Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className='lg:w-1/2 lg:flex justify-end items-center'>
        <div>
            <a href="#" className='inline-block py-2.5 lg:py-3 2xl:py-5 px-8 lg:px-10 2xl:px-[77px] bg-white rounded-[10px] text-base lg:text-xl 2xl:text-[25px] leading-5 lg:leading-6 2xl:leading-[27px]'>View Vacancies</a>
            </div>
        </div>
        </div>
    </div>
    </div>
</section>
    )
}
export default WorkBlock
