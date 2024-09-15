import React from 'react';
import ServiceUs from './ServiceUs';
import Contact from './Contact';
import { motion } from 'framer-motion';
import OfferYou from './OfferYou';
import Possibilities from './Possibilities';
import heroBg from '../img/hero-bg-2.jpg'; // استيراد الصورة
import heroImg from '../img/hero-img.png'; // استيراد الصورة
import LOGO from '../../src/img//LOGO.png';


export default function HomePage() {

  const textVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const logoVariant = {
    hidden: { opacity: 0, y: -100 },  // تبدأ من الأعلى (y: -100)
    visible: { opacity: 1, y: 0, transition: { duration: 1.3, ease: "easeOut" } },
  };

  const imgVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };


  const paragraphVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.3, ease: "easeOut" } },
  };


  return (<>
{/* تحت navbar */}

 <section id="hero" className="hero section dark-background">
      <motion.img src={heroBg} alt="" className="hero-bg w-100" 
        initial="hidden" 
        animate="visible" 
        variants={imgVariant}  // حركة مختلفة لصورة الخلفية
      />

      <div className="container">
        <div className="row gy-4 justify-content-between">
          
          <motion.div 
            className="col-lg-4 order-lg-last hero-img" 
            data-aos="zoom-out" 
            data-aos-delay="100" 
            style={{ display: window.innerWidth <= 768 ? 'none' : 'block' }}
            initial="hidden"
            animate="visible"
            variants={imgVariant}  // حركة تكبير للصورة
          >
            <img src={heroImg} className="img-fluid animated" alt="" />
          </motion.div>

          <motion.div 
            className="col-lg-6 d-flex flex-column justify-content-center" 
            data-aos="fade-in"
            initial="hidden"
            animate="visible"
            variants={textVariant}  // حركة دخول للنص من اليسار
          >
            <motion.div style={{ width: "60%" }} variants={logoVariant}>  {/* حركة دوران للّوجو */}
              <img src={LOGO} className="w-100" alt="" />
            </motion.div>
            <motion.span className="fw-bold w-75 my-2" variants={textVariant}>
              شركة تسويق إلكتروني
            </motion.span>
            <motion.p className="mt-2 fw-bold" variants={paragraphVariant}>
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
