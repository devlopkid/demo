import Image from 'next/image'
import React from 'react'
import insightsImage1 from './images/insightsImage1.png'
import insightsImage2 from './images/insightsImage2.png'
import insightsImage3 from './images/insightsImage3.png'
const Insights=()=>{
    const insightsData=[
        {
            date:"21 March 2023",
            title:"dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis",
            imgUrl:insightsImage1
        },
        {
            date:"21 March 2023",
            title:"dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis",
            imgUrl:insightsImage2
        },
        {
            date:"21 March 2023",
            title:"dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis",
            imgUrl:insightsImage3
        }

    ]
    return(
<section className='py-[30px] lg:py-[80px] 2xl:py-[100px]'>
    <div className='container mx-auto px-4'>
        <div>
            <h3 className='text-[22px] lg:text-[50px] 2xl:text-[54px] leading-7 lg:leading-[54px] 2xl:leading-[60px] font-light'>Latest Insights</h3>
        </div>
        <div className='pt-4 lg:pt-[57px] 2xl:pt-[67px]'>
            <div className='lg:flex lg:[&>div]:px-5 2xl:[&>div]:px-6 lg:-mx-5 2xl:-mx-6 [&>div:not(:last-child)]:mb-7 lg:[&>div:not(:last-child)]:mb-0'>
                {insightsData.map((item,index)=>(
                    <div className='lg:w-1/3 relative' key={index}>
                <Image src={item.imgUrl} alt='insightsImage1'/>
                <div className='absolute bottom-4 lg:bottom-10 2xl:bottom-[46px] px-3 lg:px-[42px] 2xl:px-[47px] text-white'>
                <p className='text-sm lg:text-base p-2.5 2xl:pb-3'>{item.date}</p>
                <h4 className='text-base lg:text-2xl 2xl:text-[28px] leading-5 lg:leading-8 2xl:leading-9 font-medium'>{item.title}</h4>
                <a href="#" className='inline-block text-base lg:text-lg 2xl:text-xl font-medium pt-1.5 lg:pt-3 2xl:pt-4'>Read More</a>
                </div>

                </div>
                ))}
                
            </div>
        </div>
    </div>
</section>
    )
}
export default Insights