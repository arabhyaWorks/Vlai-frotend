import React , {useState , useEffect} from 'react';
import demoImg from '../../Assets/hhhhhhh.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Demo() {

useEffect(()=>{
Aos.init();
} , [])

  return (<>
  <div className="container-fluid py-5  demoContainer">
  
    <h6 className="text-center" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true"> Demo Video </h6>
    <h1 className="text-center" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true" >Struggling with e-commerce setup <br/> and management</h1>
    <div className="container demoImgContainer pt-5 " data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true">
      {/* <div className='downToTopMovingDiv'></div>
      <div className='leftToRightMovingDiv'></div> */}

    <img className='' src={demoImg} />
    </div>
  </div>
  </>)
}


export default React.memo(Demo);