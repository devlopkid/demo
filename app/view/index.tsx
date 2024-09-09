import React from 'react'
import Banner from './components/banner'
import VideoBlock from './components/videoBlock'
import ThirdBlock from './components/third-block'
import ImageGallery from './components/imageGallery'
import Experience from './components/experience'
import CardSection from './components/cardSection'
import SliderOne from './components/sliderOne/SliderOne'
import Insights from './components/insights'
import WorkBlock from './components/workBlock'


const View = () => {
  return (
    <div>
        <Banner/>
        <VideoBlock/>
        <ThirdBlock/>
        <ImageGallery/>
        <Experience/>
        <CardSection/>
        <SliderOne/>
        <Insights/>
        <WorkBlock/>
      
    </div>
  )
}

export default View