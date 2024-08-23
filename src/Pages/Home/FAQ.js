import React from 'react';
import './Home.css';






function FAQ() {



  return (<>
  <div class="container mb-5 faqContainer ">
<div className='faqWrapper1 w-50'>
    <h1>
    Frequently Asked <span> Questions</span>
    </h1>
    <h5>
    Have questions about <strong>Vyapar Launchpad?</strong> Discover answers to the most common queries and learn how our platform simplifies online store management, helping you streamline your business across multiple e-commerce platforms.
    </h5>
</div>
<div class="accordion faqWrapper2 w-50" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        How Vyapar Launchpad can help in my e-commerce business?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Vyapar Launchpad is a platform designed to help sellers in India set up and manage their online stores effortlessly across multiple e- commerce platforms. It simplifies catalog management, order processing, and customer communication, all from a single app.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How does Vyapar Launchpad support multilingual sellers?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Vyapar Launchpad offers Bhashini-powered multilingual support, allowing you to set up and manage your store using voice commands in your preferred language, eliminating language barriers.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Can I manage multiple e-commerce platforms through Vyapar Launchpad?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Yes, Vyapar Launchpad allows you to integrate and manage your products, inventory, and orders across multiple e-commerce platforms like Amazon, Flipkart, and others, all in one place.
      </div>
    </div>
  </div>

  {/*  */}
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
      How does WhatsApp integration work on Vyapar Launchpad?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      With WhatsApp integration, you can easily send product details, images, and receive orders directly through WhatsApp. It streamlines communication between you and your customers.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
      Is Vyapar Launchpad beginner-friendly for new online sellers?
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Absolutely! Vyapar Launchpad is designed for ease of use, featuring voice commands, simple onboarding, and clear instructions for sellers who are new to e-commerce.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed lastBtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
      Does Vyapar Launchpad provide analytics and insights for my business?
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Yes, Vyapar Launchpad offers detailed analytics and performance insights for your products and orders, helping you make data- driven decisions to grow your business.
      </div>
    </div>
  </div>
</div>
    </div>
  </>)
}


export default React.memo(FAQ);
