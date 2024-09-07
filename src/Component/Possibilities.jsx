import React from 'react';
import  { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCheckCircle, faClock, faUser } from '@fortawesome/free-solid-svg-icons';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export default function Possibilities() {

    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });
    
      const { ref: countersRef, inView: countersInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });
    
      const h1Variants = {
        hidden: { opacity: 0, y: -30 },  // من أعلى إلى أسفل
        visible: { opacity: 1, y: 0 },
      };
    
      const pVariants = {
        hidden: { opacity: 0, y: 30 },  // من أسفل إلى أعلى
        visible: { opacity: 1, y: 0 },
      };
    
      const counterVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      };

      const Counter = ({ end, label , icon }) => {
        const [count, setCount] = useState(0);
    
        useEffect(() => {
          let start = 0;
          const duration = 2000; // 2 seconds
          const increment = Math.ceil(end / (duration / 10));
      
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(timer);
            }
            setCount(start);
          }, 10);
      
          return () => clearInterval(timer);
        }, [end]);
      
        return (
          <div  style={{ textAlign: 'center', color: 'white' }}>
            <FontAwesomeIcon icon={icon} style={{ fontSize:"2rem", marginBottom: '10px' , color:"#ccaf55" }} />
            <h5 className='fs-1'>+{count}</h5>
            <p 
                className='m-0 fw-bolder ' 
                style={{ fontSize: window.innerWidth < 768 ? "0.9rem" : "1.5rem" }}>{label}
            </p>          
          </div>
        );
      };
  return (<>
  
  <section className='light-background py-5'>
      <div className="container section-title mt-4 text-center pb-3" >
        {/* حركة العنوان */}
        <motion.h1
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={h1Variants}
          transition={{ duration: 1 }}
          className='fw-bolder'
          style={{ color: "#0e776a" }}
        >
          احصائيات!
        </motion.h1>

        {/* حركة الفقرة */}
        <motion.p
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={pVariants}
          transition={{ duration: 1, delay: 0.3 }}
          className='fw-bold'
        >
          فخورين أننا كنا شركاء بصناعة جزء من نجاح شركائنا
        </motion.p>
      </div>

      {/* حركة العدادات */}
      <div className='py-5' style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#1c1c1c'}}>
        <motion.div
          ref={countersRef}
          initial="hidden"
          animate={countersInView ? "visible" : "hidden"}
          variants={counterVariants}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Counter end={17} label="جوائزنا" icon={faTrophy} />
        </motion.div>

        <motion.div
          ref={countersRef}
          initial="hidden"
          animate={countersInView ? "visible" : "hidden"}
          variants={counterVariants}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Counter end={49} label="عدد المشروعات" icon={faCheckCircle} />
        </motion.div>

        <motion.div
          ref={countersRef}
          initial="hidden"
          animate={countersInView ? "visible" : "hidden"}
          variants={counterVariants}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <Counter end={575} label="ساعات العمل" icon={faClock} />
        </motion.div>

        <motion.div
          ref={countersRef}
          initial="hidden"
          animate={countersInView ? "visible" : "hidden"}
          variants={counterVariants}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Counter end={199} label="عملاء راضون" icon={faUser} />
        </motion.div>
      </div>
    </section>


</>
    )
  }