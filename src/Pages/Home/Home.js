import React from 'react'
import Hero from './Hero';
import InfiniteSlidingImg from './InfiniteSlidingImg';
import Demo from './Demo';
import HomeFeatures from './HomeFeatures';
import FeatureComponent from '../../Component/FetureComponent/FeatureComponent';
import {SecondFeaturedComponent} from '../../Component/FetureComponent/FeatureComponent';
import img1 from '../../Assets/hero image.png'
import img2 from '../../Assets/Frame 1000004907.png'
import img3 from '../../Assets/Product page.png'
import Discovery from '../../Component/FetureComponent/Discovery';
import HomePricing from './HomePricing';
import FAQ from './FAQ';



function Home() {
  return (<>
  <Hero/>
  <InfiniteSlidingImg/>
  <Demo/>
  <HomeFeatures />
  <FeatureComponent headingPart1={'Simplify your listing through '} highlight={'WhatsApp'} img={img1} 
  para={'Effortlessly manage your store with intuitive  commands through WhatsApp. List products, set up SKU alerts, receive order notifications, update inventory, and communicate with customers seamlessly. '} />

<SecondFeaturedComponent  heading2={'AI-Driven'} highlight2={`Product Page`} heading2Part2={'generation'} secondImg={img3} 
  para2={'Automatically generate high-quality product listings with optimized titles, descriptions, and images. Save time and ensure your products stand out.'} />

<FeatureComponent headingPart1={'AI-Driven'} highlight={`Image Generation`} headingPart2={'for your store'} img={img2} 
  para={'Effortlessly enhance your product listings with AI-driven image generation. Create high-quality, optimized images that make your products look professional and appealing, saving you time and effort.'} />
 

<Discovery />

<HomePricing />

<FAQ/>
 
  </>)
}


export default React.memo(Home);