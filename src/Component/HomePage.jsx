import React from 'react';
import ServiceUs from './ServiceUs';

import Contact from './Contact';

// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
import OfferYou from './OfferYou';
import Possibilities from './Possibilities';
import heroBg from '../img/hero-bg-2.jpg'; // استيراد الصورة
import heroImg from '../img/hero-img.png'; // استيراد الصورة

export default function HomePage() {

  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.3,
  // });

  // const textVariants = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: { opacity: 1, y: 0 },
  // };

  // const imageVariants = {
  //   hidden: { opacity: 0, y: -50 },
  //   visible: { opacity: 1, y: 0 },
  // };

 

  return (<>

    <section id="hero" class="hero section dark-background">
      <img src={heroBg} alt="" className="hero-bg w-100" />

      <div class="container">
        <div class="row gy-4 justify-content-between">
          
        <div 
          className="col-lg-4 order-lg-last hero-img" 
          data-aos="zoom-out" 
          data-aos-delay="100" 
          style={{ display: window.innerWidth <= 768 ? 'none' : 'block' }}>
          <img src={heroImg} className="img-fluid animated" alt="" />
        </div>

          <div class="col-lg-6  d-flex flex-column justify-content-center " data-aos="fade-in">
            <h1 className='fw-bolder'>LAYOUT </h1>
            <span className='fs-1 fw-bold w-75 my-2' >شركة تسويق إلكتروني</span>
            <p className='mt-2 fw-bold '>نقدم حلول مبتكرة واستراتيجيات مدروسة لتحويل علامتك التجارية الى رمز يثق به الناس.</p>

          </div>

        </div>
      </div>

      <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"></path>
        </defs>
        <g className="wave1">
          <use xlinkHref="#wave-path" x="50" y="3"></use>
        </g>
        <g className="wave2">
          <use xlinkHref="#wave-path" x="50" y="0"></use>
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="9"></use>
        </g>
      </svg>


    </section>

{/* تحت navbar */}



{/* نقدم لك؟ */}
<OfferYou />

{/* خدماتنا */}
<ServiceUs />

{/* الاحتمالات المحتملة */}
<Possibilities />

{/* تواصل معانا */}
<Contact />


    </>
  )
}
