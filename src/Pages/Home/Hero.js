import React from 'react';
import './Home.css';
import playIcon from '../../Assets/Play Icon.png';
import leftImg from '../../Assets/Group 1000004933.png';
import rightImg from '../../Assets/Group 1000004934.png';
import bottomImg from '../../Assets/Group 1000004931.png';



function Hero() {
  return (<>
  <div className='container-fluid heroContainer pt-5 px-0 d-flex  '>
  <div className='leftImgContainer'>
    <img style={{width: '100%' , height: '100%' , objectFit: 'cover'}} src={leftImg}/>
  </div>
  <div class=" heroContent text-center mt-5 text ">
    <h1 className=''>The Only <span class="highlight">All In One</span> Seller App <br/> For Your E-Commerce Store</h1>
    <p class="lead mt-3">Seamlessly manage your store, handle orders, and  receive <br/> alerts with our AI-driven, multilingual voice companion.</p>
    <div class="mt-5 d-flex justify-content-center gap-4 heroBtnContainer">
      <a href="#" class="btn btn-lg">Get Started For Free</a>
      <a href="#" class="btn  btn-lg ml-5"> <i> <img src={playIcon}/> </i> Play Video</a>
    </div>
    <p class="mt-3 heroLastHeading">NB: No credit card required. Plans start at $0/month.</p>
  </div>
  <div className='RightImgContainer'>
    <img className='rightImg' style={{width: '100%' , height: '100%' , objectFit: 'cover'}} src={rightImg}/>
  </div> 
    </div> 
  </>)
}

export default React.memo(Hero);