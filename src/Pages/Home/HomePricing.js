import React from 'react'
import './Home.css';
import '../../Component/FetureComponent/FeatureComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';



function HomePricing() {
 
 
 
 
 return (<>
   <section class="hpricing-section text-center ">
   
   <div className='d-flex justify-content-center align-items-center flex-column ' >
   <span className='featureTag text-center mb-5' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true"> <span></span> PRICING </span>
        <h1 data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true">Start making <span class="highlight1">smarter</span> decisions,</h1>
        <h1 data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true" className='choosePlan'>Choose a plan</h1>
   </div>

        <div class="container hpricing-section-child">
            <div class="row justify-content-center align-items-center hpricingRow">
                {/* <!-- Free Plan --> */}
                <div class="col-md-3 hpricingCol">
                    <div class="card firstPCard hpricing-card mb-4 shadow-sm">
                        <div class="card-body hpriceCardBody">
                            <h5 class="card-title hpriceCardTitle">Free Plan</h5>
                            <h2 class="card-price hpriceCardPrice">$0<span style={{fontSize: 'inherit'}} class="period">/mo</span></h2>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li><i><FontAwesomeIcon icon={faArrowRight} color='#FDBD03' /></i>20 Product Listings</li>
                                <li><i><FontAwesomeIcon icon={faArrowRight} color='#FDBD03' /></i>WhatsApp Support for Store Setup</li>
                                <li><i><FontAwesomeIcon icon={faArrowRight} color='#FDBD03' /></i>Multilingual Voice Commands</li>
                                <li><i><FontAwesomeIcon icon={faArrowRight} color='#FDBD03' /></i>Limited Inventory Management</li>
                                <li><i><FontAwesomeIcon icon={faArrowRight} color='#FDBD03' /></i>Community Support</li>
                            </ul>
                           
                            <button class="firstBtn btn button button--calypso" > <span>Get notified <FontAwesomeIcon icon={faArrowRight} />  </span> </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Starter Plan --> */}
                <div class="col-md-3 hpricingCol">
                    <div class="card secondPCard hpricing-card mb-4 shadow-sm">
                        {/* <div class="card-header bg-warning text-white">BEST VALUE</div> */}
                        <div class="card-body hpriceCardBody">
                            <h5 class="card-title hpriceCardTitle">Starter <span className='featureTag purpleTag text-center' > <span></span> BEST VALUE </span></h5>
                            <h2 class="card-price hpriceCardPrice">$19.99<span style={{fontSize: 'inherit'}}  class="period">/mo</span></h2>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li><i><FontAwesomeIcon icon={faArrowRight} color='#FDBD03' /></i>For medium sellers</li>
                                <li><i><FontAwesomeIcon icon={faArrowRight} color='#FDBD03' /></i>100 Product Listings</li>
                                <li><i><FontAwesomeIcon icon={faArrowRight} color='#FDBD03' /></i>Enhanced WhatsApp integration</li>
                                <li><i><FontAwesomeIcon icon={faArrowRight} color='#FDBD03' /></i>Integration with 2 e-commerce platforms  e.g., Amazon, Flipkart</li>
                                <li><i><FontAwesomeIcon icon={faArrowRight} color='#FDBD03' /></i>Basic Inventory & SKU Alerts</li>
                                <li><i><FontAwesomeIcon icon={faArrowRight} color='#FDBD03' /></i>24/7 Support</li>
                            </ul>
                            <button class=" btn button button--calypso" > <span>Get notified <FontAwesomeIcon icon={faArrowRight} />  </span> </button>

                        </div>
                    </div>
                </div>

                {/* <!-- Visionary Plan --> */}
                <div class="col-md-3 hpricingCol">
                    <div class="card thirdPCard hpricing-card mb-4 shadow-sm">
                        <div class="card-body hpriceCardBody">
                            <h5 class="card-title hpriceCardTitle">Visionary</h5>
                            <h2 class="card-price hpriceCardPrice">$49.99<span style={{fontSize: 'inherit'}}  class="period">/mo</span></h2>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li> <i><FontAwesomeIcon icon={faArrowRight} color='#FDBD03' /></i>For big sellers</li>
                                <li><i><FontAwesomeIcon icon={faArrowRight} color='#FDBD03' /></i>500 Product Listings</li>
                                <li><i><FontAwesomeIcon icon={faArrowRight} color='#FDBD03' /></i>Holistic Market Visualization</li>
                                <li><i><FontAwesomeIcon icon={faArrowRight} color='#FDBD03' /></i>Integration with 10+ e-commerce platforms e.g., Amazon, Flipkart</li>
                                <li><i><FontAwesomeIcon icon={faArrowRight} color='#FDBD03' /></i>Custom Integrations</li>
                                <li><i><FontAwesomeIcon icon={faArrowRight} color='#FDBD03' /></i>24/7 Priority Support</li>
                            </ul>
                            <button class="firstBtn btn button button--calypso" > <span>Get notified <FontAwesomeIcon icon={faArrowRight} /> </span> </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-around checkContainer mt-4">
                <div class="col-auto hpricingColAuto">
                    <p class="mb-0">
                        <span class="pr-5 d-inline-block "> <i><FontAwesomeIcon icon={faCircleCheck} color='#FDBD03' /></i> Free trial</span>
                        <span class="pr-5 d-inline-block "><i><FontAwesomeIcon icon={faCircleCheck} color='#FDBD03' /></i> Cancel anytime</span>
                        <span class="pr-5 d-inline-block  "><i><FontAwesomeIcon icon={faCircleCheck} color='#FDBD03' /></i> Support included</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
  </>)
}


export default React.memo(HomePricing);