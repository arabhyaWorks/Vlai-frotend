import React from 'react';
import './FeatureComponent.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { ImArrowUpRight2 } from "react-icons/im";

 function FeatureComponent(props) {
    
  return (<>
  <div className={`container featureCompContainer p-5  ${props.direction}`}>


  <div className='featureCompImg '>
        <img src={props.img} />
    </div>

    <div className='featureCompContent p-3'>
    <span className='featureTag' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true"> <span></span> FEATURES </span>
    <h1 className='pt-4' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true"> 
    <span className='spanBlack' style={{color: 'black' ,background: 'none', display: 'inline' , fontSize: 'inherit'}}>{props.headingPart1}</span>    <span style={{color: "#ffc107", backgroundColor: 'transparent' , display: 'inline' , fontSize: 'inherit'}} className='spanYellow'> {props.highlight} </span> {props.headingPart2}</h1>

    <h5 className='pt-4' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true">{props.para}</h5>

    <button class=" mt-4 btn button button--calypso" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true"> <span>Learn More <ImArrowUpRight2 />  </span> </button>

    </div>

    

    </div>
  </>)
}
export default React.memo(FeatureComponent);


export function SecondFeaturedComponent(props){

    return(<>
    <div className={`container featureCompContainer featureCompContainer2 p-5   ${props.direction}` }>


    <div className='featureCompContent p-2'>
    {/* <span data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true"> <span></span> FEATURES </span> */}
    <span className='featureTag' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true"> <span></span> FEATURES </span>
    <h1 className='pt-4' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true"> {props.heading2}  using <span style={{color: "#ffc107", backgroundColor: 'transparent' , display: 'inline-block' , fontSize: 'inherit'}}> {props.highlight2} </span> {props.heading2part2}</h1>

    <h5 className='pt-4 ' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true">{props.para2}</h5>

    <button class=" mt-4 btn button button--calypso" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true"> <span>Learn More <ImArrowUpRight2 /> </span> </button>

    </div>


  <div className='featureCompImg '>
        <img src={props.secondImg} />
    </div>

    </div>




    </>)
}