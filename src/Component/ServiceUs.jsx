import React from 'react';
import motion1 from '../../src/img/motion.png';
import web from '../../src/img/web.png';
import mob from '../../src/img/mob.png';
import target from '../../src/img/target.png';
import graphic from '../../src/img/graphic.png';
import seo from '../../src/img/seo.png';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ServiceUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,  // الحركة تحدث مرة واحدة فقط
    threshold: 0.1      // النسبة المطلوبة لظهور العنصر على الشاشة (10% من العنصر يجب أن يكون مرئيًا)
  });

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <section className='py-5 services' style={{ backgroundColor: "#f5fbff" }}>
        <div className="container section-title text-center pb-3">
          <motion.h1
            className='fw-bolder'
            style={{ color: "#0e776a" }}
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            خدماتنا
          </motion.h1>
          <motion.p
            className='fw-bold'
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
          لزيادة مبيعاتك ... وجعل علامتك التجارية هى الاولى فى عالم البحث         
 </motion.p>
        </div>

        <motion.div
          className='container'
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1 }}
        >
          <div className='row g-4'>
            {[
              { img: motion1, title: 'تسويق وإدارة المنصات', desc: 'نقوم بإدارة منصات التواصل الاجتماعي وإنشاء الحملات التسويقية المناسبة' },
              { img: web, title: 'تصميم المواقع الإلكترونية', desc: 'نصمم موقعك الالكتروني بشكل جذاب وسهل الاستخدام، يحفز المستخدمين على الشراء ويعكس هوية علامتك التجارية.' },
              { img: mob, title: 'تصميم تطبيقات الجوال', desc: 'لدينا خبرة واسعة فى تصميم وتطوير تطبيقات الجوال لتوفير تجربة تناسب احتياجاتك.' },
              { img: target, title: 'مونتاج وموشن جرافيك', desc: 'ننشئ تجربة بصرية متكاملة توضح الافكار المعقدة و تحقق الاهداف التسويقية.' },
              { img: graphic, title: 'تصميم الجرافيك', desc: 'نصمم هويتك التجارية بدئًا من الشعار وحتى جميع عناصرها.' },
              { img: seo, title: 'تحسين محركات البحث', desc: 'نقوم بعمل SEO لموقعك لزيادة فرصة وصول عملاء جدد وزيادة أرباحك.' },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="col-md-4"
                variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <div className="service-item position-relative border rounded-3 shadow h-100 py-3 px-5">
                  <div className="img">
                    <img src={service.img} className='w-100' alt={service.title} />
                  </div>
                  <h4 className='mb-4 mt-3 fw-bolder'>{service.title}</h4>
                  <p className='fw-bolder'>{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
