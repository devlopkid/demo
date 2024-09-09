import React from 'react'
import Banner from './components/banner'
import VideoBlock from './components/videoBlock'
import ThirdBlock from './components/third-block'
import ImageGallery from './components/imageGallery'
import Experience from './components/experience'
import CardSection from './components/cardSection'
import SliderOne from './components/sliderOne/SliderOne'


const View = () => {
  return (
    <div>
        <Banner/>
        <VideoBlock/>
        <ThirdBlock/>
        {/* <ImageGallery/> */}
        <Experience/>
        <CardSection/>
        <SliderOne/>
      
    </div>
  )
}

export default View