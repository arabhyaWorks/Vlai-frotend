import React from 'react';
import './Footer.css';
import footerLogo from '../../Assets/Group 1000004960.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'; 








 function Footer() {



  return (<>
   <footer class="container-fluid footer">
       <div className='container footerWrapper'>
       <div class="footer-content">
            <h1>Join the community Today</h1>
            <h5>Got questions? Let's get you moving.</h5>
        </div>

       

        <div class="email-input">
            <input type="email" placeholder="example@gmail.com"/>
            <button>Join Now</button>
        </div>

        <div className='footerNav'>
            <div className='footerLogo'>
                 <img src={footerLogo} />  <h1> Vyapar Launchpad</h1>
            </div>
            <div className='footerNavChild'>
                <ul>
                    <li><h5>Home</h5></li>
                    <li><h5>Features</h5></li>
                    <li><h5>Pricing</h5></li>
                    <li><h5>Blog</h5></li>
                    <li><h5>Faqs</h5></li>
                    <li><h5>Contact</h5></li>
                </ul>
            </div>
        </div>

        <div className='subFooter'>
        <div className='d-flex'>
                <a href="#">Privacy Policy</a> 
                <a href="#">Terms & Conditions</a>
            </div>

            <p>Civiccraft Online Solutions Pvt. Ltd. | Copyright 2024</p>
            
            <div class="social-icons">
                <a href="#"><i> <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} /> </i></a>
                <a href="#"><i> <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /> </i></a>
                <a href="#"><i> <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} /> </i></a>
                <a href="#"><i> <FontAwesomeIcon icon={faEnvelope} /> </i></a>
            </div>
        </div>
       </div>
    </footer>
  </>)
}
export default React.memo(Footer);
