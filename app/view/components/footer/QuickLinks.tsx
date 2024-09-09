import React from 'react'
const QuickLinks =()=>{
    return(
       <div>
<div className='container mx-auto px-4'>

        <div className='pt-[30px] lg:pt-[50px] 2xl:pt-[60px] pb-[22px] lg:pb-[38px] 2xl:pb-[48px] text-white lg:flex gap-12 items-center'>
            <p className='text-xl lg:text-2xl font-medium pb-4 lg:pb-0'>Quick Links</p>
            <ul className='[&>li]:text-[14px] lg:[&>li]:text-[15px] 2xl:[&>li]:text-[17px]  [&>li]:leading-[16px] 2xl:[&>li]:leading-[18px] font-medium [&>li:not(:last-child)]:pr-6 lg:[&>li:not(:last-child)]:pr-4 2xl:[&>li:not(:last-child)]:pr-5 [&>li]:inline-block'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/"> About Us </a>
                </li>
                <li>
                    <a href="/"> Pricing </a>
                </li>
                <li>
                    <a href="/"> Portfolios </a>
                </li>
                <li>
                    <a href="/">Insights </a>
                </li>
            </ul>
        </div>
       </div>
       </div>
    )
}
export default QuickLinks