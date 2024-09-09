import Image from "next/image"
import Image1 from './images/image1.png'
import Image2 from './images/imag2.png'
import Image3 from './images/image3.png'
import Image4 from './images/image4.png'
const ImageGallery=()=>{
    const galleryInfo=[
        {
            title:"Consectetur adipiscing elit",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.",
            imgUrl:Image1
        },
        {
            title:"Consectetur adipiscing elit",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.",
            imgUrl:Image2
        },
        {
            title:"Consectetur adipiscing elit",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.",
            imgUrl:Image3
        },
        {
            title:"Consectetur adipiscing elit",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.",
            imgUrl:Image4
        },
    ]
    return(
<section className="bg-[#F2F2F2] py-[30px] lg:py-[100px] 2xl:py-[140px]">
<div className="container mx-auto px-4">
    <div>
        <h3 className="max-w-[700px] 2xl:max-w-[891px] text-[26px] lg:text-[44px] 2xl:text-[54px] leading-8 lg:leading-[52px] 2xl:leading-[72px] pb-10 2xl:pb-[50px]">Lorem ipsum dolor sit amet, consectetur </h3>
         <div className="grid gap-4 lg:gap-8 grid-cols-1 lg:grid-cols-2">
            {galleryInfo.map((item,index)=>(
 <div className="relative" key={index}>
 <Image src={item.imgUrl} alt="image" className="h-[230px] lg:h-full object-cover rounded-[12px]"/>
 <div className="absolute bottom-4 lg:bottom-[42px] 2xl:bottom-[52px] text-white pl-2.5 lg:pl-[25px] 2xl:pl-[30px] pr-2.5 lg:pr-[40px] 2xl:pr-[50px]">
     <h3 className="pb-2 text-lg lg:text-2xl 2xl:text-[28px] leading-5 lg:leading-7 2xl:leading-[38px]">{item.title}</h3>
     <p className="text-sm lg:text-base 2xl:text-lg">{item.content}</p>
 </div>
</div>
            ))}
           
            
        </div>
    </div>
</div>
</section>
    )
}
export default ImageGallery