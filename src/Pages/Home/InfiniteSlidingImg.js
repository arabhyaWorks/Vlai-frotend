import React from 'react';
import flipkart from '../../Assets/Flipkart.png';
import ondc from '../../Assets/ONDC.png';
import zomato from '../../Assets/Zomato.png';
import amazon from '../../Assets/Amazon.png';
import swiggy from '../../Assets/Swiggy.png';
import  meesho from '../../Assets/meesho.png';
import nykaa from '../../Assets/nykaa.png';
import jiomart from '../../Assets/jio mart.png';

import Marquee from "react-fast-marquee";

 function InfiniteSlidingImg() {
  return (<>
  <div className='container-fluid py-5 px-0 infiniteImgContainer'>
    <Marquee  loop={0}>
      <img className='mx-3' src={flipkart}/>
      <img className='mx-3'  src={ondc}/>
      <img className='mx-3'  src={zomato}/>
      <img className='mx-3'  src={amazon}/>
      <img className='mx-3'  src={swiggy}/>
      <img className='mx-3'  src={meesho}/>
      <img className='mx-3'  src={nykaa}/>
      <img className='mx-3'  src={jiomart}/>
      {/* second loop */}
      <img className='mx-3'  src={flipkart}/>
      <img className='mx-3'  src={ondc}/>
      <img className='mx-3'  src={zomato}/>
      <img className='mx-3'  src={amazon}/>
      <img className='mx-3'  src={swiggy}/>
      <img className='mx-3'  src={meesho}/>
      <img className='mx-3'  src={nykaa}/>
      <img className='mx-3'  src={jiomart}/>
    </Marquee>
  </div>
  </>)
}


export default React.memo(InfiniteSlidingImg);