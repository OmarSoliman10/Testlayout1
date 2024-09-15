import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function OfferYou() {
  const { ref, inView } = useInView({
    triggerOnce: true,  // الحركة تحدث مرة واحدة فقط
    threshold: 0.01,    // النسبة المطلوبة لظهور العنصر على الشاشة (1% من العنصر يجب أن يكون مرئيًا)
  });

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const styles = {

    subheading: {
      fontSize: "1rem", // حجم الخط الأساسي
      '@media (min-width: 768px)': { // للأجهزة المتوسطة والكبيرة
        fontSize: "1.25rem",
      },
      '@media (min-width: 1200px)': { // للشاشات الكبيرة
        fontSize: "1.5rem",
      },
    },
    icon: {
      color: "#ccaf55",
      fontSize: "2rem", // حجم الأيقونة الأساسي
      '@media (min-width: 768px)': { // للأجهزة المتوسطة والكبيرة
        fontSize: "2.5rem",
      },
      '@media (min-width: 1200px)': { // للشاشات الكبيرة
        fontSize: "3rem",
      },
    },
    serviceItem: {
      cursor: 'pointer',
      padding: '20px',
      marginBottom: '20px',
      '@media (min-width: 768px)': { // للأجهزة المتوسطة والكبيرة
        padding: '30px',
        marginBottom: '30px',
      },
      '@media (min-width: 1200px)': { // للشاشات الكبيرة
        padding: '40px',
        marginBottom: '40px',
      },
    },
  };

  return (
    <>
      <section className="services light-background my-5">
        <div className="container section-title text-center my-5" data-aos="fade-up">
          <motion.h1
            className='fw-bolder text-center'
            style={{ color: "#0e776a" }}
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            نقدم لك؟
          </motion.h1>

          <motion.p
            className='fw-bold'
            style={styles.subheading}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
          ما يميزنا ... لنكون الشريك التسويقي الافضل للشركات العالمية
          </motion.p>
        </div>

        <motion.div
          className="container"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1 }}
        >
          <div className="row gy-4 text-center">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative" style={styles.serviceItem}>
                <i className="fa-regular fa-lightbulb" style={styles.icon}></i>
                <h3 style={{ color: "#0e776a" }}>افكار ابداعية</h3>
                <p className='fs-6 fw-bold'>
                تمتلك لاي اوت فريق يتميز بالابداع، ويهتم بتطوير الذات ومتابعة كل جديد؛ ليقدم حلول تسويقية حديثة تؤدي الى نمو الاعمال التجارية فى كافة المجالات.                  </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative" style={styles.serviceItem}>
                <i className="fa-solid fa-display" style={styles.icon}></i>
                <h3 style={{ color: "#0e776a" }}>خدمات متكاملة</h3>
                <p className='fs-6 fw-bold'>
                توفر لاي اوت لعملائها جميع انواع الخدمات التسويقية فى مكان واحد، حيث لديها متخصصين فى كل من الحملات الاعلانية، الجرافيك والموشن جرافيك، إدارة الصفحات، كتابة المحتوي غيرها من الخدمات.                     </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative" style={styles.serviceItem}>
                <i className="fa-solid fa-arrow-trend-up" style={styles.icon}></i>
                <h3 style={{ color: "#0e776a" }}>خطط وتقارير</h3>
                <p className='fs-6 fw-bold'>
                نسير على خطط تسويقية شاملة لتحقيق اهداف العميل، يعمل على وضعها فريق متخصص وعلى قدر من الخبرة والكفاءه فى مجال التسويق، ونضع  التقارير النهائيه التى تبرز نجاح خططنا.                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative" style={styles.serviceItem}>
                <i className="fa-solid fa-mobile-screen-button" style={styles.icon}></i>
                <h3 style={{ color: "#0e776a" }}>متابعة بعد انتهاء العمل</h3>
                <p className='fs-6 fw-bold'>
                نبقى على تواصل مع عملاءنا بعد انتهاء الخدمة لضمان سير العمل بشكل صحيح، وتحقيق النتائج المرجوة، حرصا على رضى العملاء عن خدمتنا.                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative" style={styles.serviceItem}>
                <i className="fa-solid fa-phone" style={styles.icon}></i>
                <h3 style={{ color: "#0e776a" }}>خدمة عملاء متميزة</h3>
                <p className='fs-6 fw-bold'>
                خدمة عملاء متصلون على مدار الساعة لتلقى طلباتكم واستفساراتكم والرد عليها سواء من خلال الواتساب، السوشيال ميديا، الايميل الإلكتروني.                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative" style={styles.serviceItem}>
                <i className="fa-regular fa-clock" style={styles.icon}></i>
                <h3 style={{ color: "#0e776a" }}>الالتزام</h3>
                <p className='fs-6 fw-bold'>
                الالتزام بالمواعيد والاتفاقات هو اهم اولوياتنا، والحفاظ على قيمنا من صدق وامانة حتى نحقق الجودة فى اعمالنا.                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
