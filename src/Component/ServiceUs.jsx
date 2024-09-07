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
            نخدمك .. بخدماتنا المتميزة.. ونكون شريكك التسويقي من الفكرة للنجاح!
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
            <div className="col-md-4">
              <div className="service-item position-relative border rounded-3 shadow h-100 py-3 px-5">
                <div className="img">
                  <img src={motion1} className='w-100' alt="Marketing Management" />
                </div>
                <h4 className='mb-4 mt-3 fw-bolder'>تسويق وإدارة المنصات</h4>
                <p className='fw-bold'>نقوم بإدارة منصات التواصل الاجتماعي وإنشاء الحملات التسويقية المناسبة</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-item position-relative border rounded-3 shadow h-100 py-4 px-5">
                <div className="img">
                  <img src={web} className='w-100' alt="Web Design" />
                </div>
                <h4 className='mb-4 mt-3 fw-bolder'>تصميم المواقع الإلكترونية</h4>
                <p className='m-0 fw-bold'>نقوم بتصميم وبرمجة المواقع التعريفية والخدمية والمتاجر الإلكترونية</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-item position-relative border rounded-3 shadow h-100 py-4 px-5">
                <div className="img">
                  <img src={mob} className='w-100' alt="Mobile Apps" />
                </div>
                <h4 className='mb-4 mt-3 fw-bolder'>تصميم تطبيقات الجوال</h4>
                <p className='m-0 fw-bold'>تقوم بتصميم وبرمجة تطبيقات الجوال مهما كانت الفكرة صغيرة أم كبيرة</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-item position-relative border rounded-3 shadow h-100 py-4 px-5">
                <div className="img">
                  <img src={target} className='w-100' alt="Motion Graphics" />
                </div>
                <h4 className='mb-4 mt-3 fw-bolder'>مونتاج وموشن جرافيك</h4>
                <p className='m-0 fw-bold'>نقوم بعمل فيديوهات تسويقية مونتاج أو موشن جرافيك بأحدث الأساليب</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-item position-relative border rounded-3 shadow h-100 py-4 px-5">
                <div className="img">
                  <img src={graphic} className='w-100' alt="Graphic Design" />
                </div>
                <h4 className='mb-4 mt-3 fw-bolder'>تصميم الجرافيك</h4>
                <p className='m-0 fw-bold'>نقوم بتصميم الشعارات والهوية التجارية وجميع ما يخص التصميم الجرافيكي</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-item position-relative border rounded-3 shadow h-100 py-4 px-5">
                <div className="img mt-3">
                  <img src={seo} className='w-100' alt="SEO" />
                </div>
                <h4 className='mb-4 mt-3 fw-bolder'>تحسين محركات البحث</h4>
                <p className='m-0 fw-bold'>نقوم بعمل SEO لموقعك لزيادة فرصة وصول عملاء جدد وزيادة أرباحك.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>


    </>
  );
}
