import React from 'react';
import ServiceUs from './ServiceUs';

import Contact from './Contact';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import OfferYou from './OfferYou';
import Possibilities from './Possibilities';

export default function HomePage() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };


  

  return (<>
{/* تحت navbar */}
<header className="d-flex justify-content-center align-items-center">
      <div className="header-content text-white ps-4 ">
        <div className="social-container py-1 text-center">

          <motion.h1
            className='text-center fw-bolder'
            style={{fontSize:"4rem" ,letterSpacing:"8px"}}
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageVariants}
            transition={{ duration: 1 }}
          >
          LAYOUT
          </motion.h1>


          {/* العنوان مع الحركة */}
          <motion.h2
            className='my-2 text-center '
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ duration: 1 }}
          >
            شركة تسويق إلكتروني
          </motion.h2>

          {/* الفقرة الأولى مع الحركة */}
          <motion.p
            className='m-0 pt-2 fw-bold text-center'
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ duration: 1.2 }}
          >
            نقدم حلول مبتكرة واستراتيجيات مدروسة
          </motion.p>

          {/* الفقرة الثانية مع الحركة */}
          <motion.p
            className='m-0 fw-bold text-center'
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ duration: 1.4 }}
          >
            لتحويل علامتك التجارية الى رمز يثق به الناس
          </motion.p>

        </div>
      </div>
</header>

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
