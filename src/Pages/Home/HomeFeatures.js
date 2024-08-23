import React from 'react';
import './Home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { ImArrowUpRight2 } from "react-icons/im";
import bannerImg from '../../Assets/Group 1000004938.png';
import animateBannerImg from '../../Assets/Group 1000004939.png';


function HomeFeatures(){
  
  
  
  return (<>
  <div className='container-fluid homeFeatureContainer py-5 '>

    <div className='homeFeatureContent pb-5'>
        <h6 className='text-center pt-5' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true">Features</h6>
    <h1 className='text-center' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true">Discover Vyapar Launchpad's Features</h1>
    <h4 className='text-center pt-5' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true">Unlock a world of possibilities for your e-commerce store with vlai's range of <br/> features designed to streamline your setting up store, product listing, improving <br/> seo ranking, generating images, and many more.</h4>
    </div>




    <div className='container hFeatureBannerContainer p-5'>

    <div className='hFeatureBannerContent'>

    <span className='hfeatureTag' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true"> <span className='hfeatureTag'></span> FEATURES </span>
    <h1 className='pt-4' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true">Manage your store <br/> using <span style={{color: "#ffc107"}}>Voice</span> commands.</h1>
    <h5 className='pt-4' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true">Effortlessly manage your store  with intuitive voice commands, streamlining tasks like inventory updates, order management, and product listings for a seamless e-commerce experience.</h5>
   
    {/* <button class="btn mt-4" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true">Get early access <i><FontAwesomeIcon icon={faArrowRight} style={{color: 'white'}} /> </i></button> */}

    <button class=" mt-4 btn button button--calypso" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true"> <span>Learn More <ImArrowUpRight2 /> </span> </button>

    </div>

    <div className='hFeatureBannerImg' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true">
        <img className='bannerImg' src={bannerImg} />
        <img className='animeBannerImg' src={animateBannerImg} />

    </div>
    </div>
    {/* 2nd container */}
    
  </div>
  </>)
}

export default React.memo(HomeFeatures);