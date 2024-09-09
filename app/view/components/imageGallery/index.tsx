import Image from "next/image"
import Image1 from './images/image1.png'
import Image2 from './images/imag2.png'
import Image3 from './images/image3.png'
import Image4 from './images/image4.png'
const ImageGallery=()=>{
    return(
<section className="bg-[#F2F2F2] py-[140px]">
<div className="container mx-auto px-4">
    <div>
        <h3 className="max-w-[891px] text-[54px] leading-[72px] pb-[50px]">Lorem ipsum dolor sit amet, consectetur </h3>
        {/* <div className="flex flex-wrap [&>div]:px-4 -mx-4">
            <div className="w-1/2">
                <Image src={Image1} alt="image"/>
            </div>
            <div className="w-1/2">
                <Image src={Image2} alt="image"/>
            </div>
            <div className="w-1/2">
                <Image src={Image3} alt="image"/>
            </div>
            <div className="w-1/2">
                <Image src={Image4} alt="image"/>
            </div>
        </div> */}
         <div className="grid gap-8 grid-cols-2">
            <div className="">
                <Image src={Image1} alt="image"/>
            </div>
            <div className="">
                <Image src={Image2} alt="image"/>
            </div>
            <div className="">
                <Image src={Image3} alt="image"/>
            </div>
            <div className="">
                <Image src={Image4} alt="image"/>
            </div>
        </div>
    </div>
</div>
</section>
    )
}
export default ImageGallery