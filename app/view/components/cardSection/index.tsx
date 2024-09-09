import React from 'react'
const CardSection=()=>{
    const cardData=[
        {
            title:"Lorem ipsum dolor sit amet, consectetur",
            subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue."
        },
        {
            title:"Lorem ipsum dolor sit amet, consectetur",
            subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue."
        },
        {
            title:"Lorem ipsum dolor sit amet, consectetur",
            subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue."
        },
    ]
    return(
        <section className='py-[30px] lg:py-[100px] 2xl:py-[125px]'>
        <div className='container mx-auto px-4'>
            <div>
                <h1 className='text-[#002A3A] text-[22px] lg:text-[52px] 2xl:text-[54px] leading-[36px] lg:leading-[66px] 2xl:leading-[68px] pb-4 lg:pb-[36px]'>Lorem Ipsum</h1>
                <p className='max-w-[903px] text-lg lg:text-xl leading-6 lg:leading-[34px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum.</p>
            </div>
            <div className='pt-4 lg:pt-[68px] 2xl:pt-[72px]'>
                <div className='lg:flex [&>div]:py-2.5 lg:[&>div]:py-0 lg:[&>div]:px-[9px] lg:-mx-[9px]'>
                    {cardData.map((item,index)=>(
                        <div className='lg:w-1/3' key={index}>
                    <div className='group bg-[#ECFAFF] hover:bg-[#002A3A] rounded-[15px] pl-4 lg:pl-[34px] pr-4 lg:pr-[30px] pt-4 lg:pt-[38px] pb-6 lg:pb-[65px] transition-all duration-500 ease-out'>
                        <h5 className='pb-3 lg:pb-[21px] border-b border-[#00466D] group-hover:border-white font-semibold text-[24px] lg:text-[34px] 2xl:text-[36px] leading-6 lg:leading-8 2xl:leading-[36px] group-hover:text-white transition-all duration-500 ease-out'>0{index+1}</h5>
                        <div>
                            <h5 className='text-[#002A3A] pt-4 lg:pt-[33px] 2xl:pt-[35px] pb-4 2xl:pb-5 text-lg lg:text-[24px] 2xl:text-[28px] leading-6 lg:leading-8 2xl:leading-[35px] font-semibold group-hover:text-white transition-all duration-500 ease-out'>{item.title}</h5>
                            <p className='text-sm lg:text-base 2xl:text-lg group-hover:text-white transition-all duration-500 ease-out'>{item.subtitle}</p>
                        </div>
                    </div>
                    </div>
                    ))}
                    
                    
                    
                </div>

            </div>
        </div>
        </section>
    )
}
export default CardSection