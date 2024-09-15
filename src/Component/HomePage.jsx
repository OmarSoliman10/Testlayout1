import React from 'react';
import ServiceUs from './ServiceUs';

import Contact from './Contact';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import OfferYou from './OfferYou';
import Possibilities from './Possibilities';
import heroBg from '../img/hero-bg-2.jpg'; // استيراد الصورة
import heroImg from '../img/hero-img.png'; // استيراد الصورة
import LOGO from '../../src/img//LOGO.png';


export default function HomePage() {

  const { ref, inView } = useInView({
    triggerOnce: true,  // الحركة تحدث مرة واحدة فقط
    threshold: 0.01,    // النسبة المطلوبة لظهور العنصر على الشاشة (1% من العنصر يجب أن يكون مرئيًا)
  });

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (<>
{/* تحت navbar */}

 <section id="hero" className="hero section dark-background">
      <img src={heroBg} alt="" className="hero-bg w-100" />

      <div className="container"           
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1 }}>

        <div className="row gy-4 justify-content-between">
          
          <motion.div 
            className="col-lg-4 order-lg-last hero-img" 
            data-aos="zoom-out" 
            data-aos-delay="100" 
            style={{ display: window.innerWidth <= 768 ? 'none' : 'block' }}
          >
            <img src={heroImg} className="img-fluid animated" alt="" />
          </motion.div>

          <motion.div 
            className="col-lg-6 d-flex flex-column justify-content-center" 
            data-aos="fade-in">

            <motion.div style={{ width: "60%" }}
                        initial={{ opacity: 0, y: -50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1 }}
            >  {/* حركة دوران للّوجو */}
              <img src={LOGO} className="w-100" alt="" />
            </motion.div>

            <motion.span className="fw-bold w-75 my-2" 
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}>
              شركة تسويق إلكتروني
            </motion.span>
            <motion.p className="mt-2 fw-bold"             
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}>
              نقدم حلول مبتكرة واستراتيجيات مدروسة لتحويل علامتك التجارية الى رمز يثق به الناس.
            </motion.p>
          </motion.div>

        </div>
      </div>
      <motion.svg 
        className="hero-waves" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        viewBox="0 24 150 28" 
        preserveAspectRatio="none"

      >
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"></path>
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
      </motion.svg>
</section>

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
