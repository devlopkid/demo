import React from 'react'
const Experience=()=>{
    const experienceData=[
       {
        title:"8Years",
        subTitile:"of Success"
       },
       {
        title:"200+",
        subTitile:"Members"
       },
       {
        title:"155+",
        subTitile:"All Over The USA"
       },{
        title:"200k",
        subTitile:"Satisfied Clients"
       }

    ]
    return(
        <section className='py-6 lg:py-[90px] 2xl:py-[95px]'>
<div className='container mx-auto px-4'>
    {/* <div className='flex [&>div:not(:last-child)]:border-r-2 [&>div:not(:last-child)]:border-[#002A3A] [&>div:not(:last-child)]:pr-[100px] [&>div]:ml-[100px]'> */}
    <div className='lg:flex [&>div:not(:last-child)]:border-b lg:[&>div:not(:last-child)]:border-b-0 lg:[&>div:not(:last-child)]:border-r [&>div:not(:last-child)]:border-[#002A3A] [&>div:not(:last-child)]:pb-5 lg:[&>div:not(:last-child)]:pb-0 [&>div:not(:first-child)]:pt-5 lg:[&>div:not(:first-child)]:pt-0 [&>div]:text-center lg:[&>div:first-child]:!text-left'>
    {/* <div className='flex [&>div]:flex-1 [&>div:not(:last-child)]:border-r-2 [&>div:not(:last-child)]:border-[#002A3A] [&>div:not(:last-child)]:text-center [&>div:first-child]:!text-left [&>div:last-child]:!text-right' > */}
        {experienceData.map((item,index)=>(
            <div key={index} className='lg:flex-auto'>
            <h3 className='text-[26px] lg:text-[52px] 2xl:text-[54px] leading-5 lg:leading-[35px] 2xl:leading-[37px] font-semibold pb-3 2xl:pb-5'>{item.title}</h3>
            <p className=' text-[20px] lg:text-[32px] 2xl:text-[34px] leading-3 lg:leading-[39px] 2xl:leading-[41px]'>{item.subTitile}</p>
        </div>
        ))}
        
    </div>
</div>
        </section>
    )
}
export default Experience