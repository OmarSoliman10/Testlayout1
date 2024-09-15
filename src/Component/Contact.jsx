import React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import IMGContact from '../../src/img/4737427.jpg';

import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: itemsRef, inView: itemsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },  // من أعلى إلى أسفل
    visible: { opacity: 1, y: 0 },
  };

  const itemsVariants = {
    hidden: { opacity: 0, y: 50 },  // من أسفل إلى أعلى
    visible: { opacity: 1, y: 0 },
  };
// -----------------------------
  const styles = {
    container: {
      maxWidth: '600px',
      margin: 'auto',
      padding: '20px',
      backgroundColor: 'white',
      color: 'white',
      borderRadius: '10px' ,


    },
    heading: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#0e776a'
    },
    subheading: {
      textAlign: 'center',
      marginBottom: '30px',
      color: '#ccaf55',
    },
    formGroup: {
      marginBottom: '15px'
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
      boxSizing: 'border-box'
    },
    buttonContainer: {
      textAlign: 'center'
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#243f3b',
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      cursor: 'pointer'
    },
    successMessage: {
      color: 'green',
      textAlign: 'center',
      marginTop: '20px'
    },
    errorMessage: {
      color: 'red',
      textAlign: 'center',
      marginTop: '20px'
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.send('service_xs5limb', 'template_chg67xq', formData, 'm4IckXESfc_UDSWoc')
      .then((result) => {
        setSuccess(true);
        setSending(false);
        toast.success('Your message has been sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, (error) => {
        setSuccess(false);
        setSending(false);
        toast.error('There was an error sending your message. Please try again later.');
      });
  };


  return (<>

      {/* القسم الأول */}
      <motion.div
        style={{ backgroundColor: 'dark', color: '#1e1e1e', padding: '40px 0' }}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={titleVariants}
        transition={{ duration: 0.8 }}
        ref={titleRef}
      >
        <Container>
          <Row className="text-center ">
            <Col>
              <h1 style={{ color: '#0e776a' }} className='fw-bolder'>كن علي اتصال دائم بنا</h1>
            </Col>
          </Row>
        </Container>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={itemsInView ? "visible" : "hidden"}
        variants={itemsVariants}
        transition={{ duration: 0.8, delay: 0.3 }}
        ref={itemsRef}
      >
        <Container>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <div
                style={{ backgroundColor: '#243f3b', padding: '20px', borderRadius: '10px', border: '1px solid #0e776a' }}
                onClick={() => window.location.href = 'tel:01033640271'}
              >
                <FontAwesomeIcon icon={faPhone} size="2x" color="#ccaf55" />
                <p className='pointer fw-bolder mt-3 ' style={{ color: '#ffffff' }}>01033640271</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div
                style={{ backgroundColor: '#243f3b', padding: '20px', borderRadius: '10px', border: '1px solid white' }}
                onClick={() => window.location.href = 'mailto:layoutegco@gmail.com'}
              >
                <FontAwesomeIcon icon={faEnvelope} size="2x" color="#ccaf55" />
                <p className='pointer fw-bolder mt-3' style={{ color: '#ffffff' }}>layoutegco@gmail.com</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div style={{ backgroundColor: '#243f3b', padding: '20px', borderRadius: '10px', border: '1px solid white' }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" color="#ccaf55" />
                <p className='fw-bolder mt-3' style={{ color: '#ffffff' }}>الفيوم</p>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.div>

      {/* القسم الثاني */}
      <div className="container shadow-lg mb-5 py-4">
        <div className="row align-items-center mx-1">
          <motion.div
            className="col-md-6"
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
            variants={titleVariants}
            transition={{ duration: 0.8 }}
          >
            <div style={styles.container}>
              <h2 style={styles.heading}>إرسال رسالة</h2>
              <p className='fw-bolder' style={styles.subheading}>يمكنك التواصل معنا بأي وقت وسنقوم بالرد عليكم في أسرع وقت</p>
              <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                  <input
                    className='form-control'
                    type="text"
                    name="name"
                    placeholder="اكتب اسمك *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <input
                    className='form-control'
                    type="email"
                    name="email"
                    placeholder="اكتب إيميلك الخاص *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <input
                    className='form-control'
                    type="text"
                    name="phone"
                    placeholder="رقم الجوال *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <textarea
                    className='form-control'
                    name="message"
                    placeholder="اكتب رسالتك هنا *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ ...styles.input, height: '100px' }}
                  />
                </div>
                <div style={styles.buttonContainer}>
                  <button type="submit" style={styles.button} disabled={sending}>
                    {sending ? 'جاري الإرسال...' : 'إرسال رسالة'}
                  </button>
                </div>
              </form>
              {success === true && <p style={styles.successMessage}>تم إرسال رسالتك بنجاح!</p>}
              {success === false && <p style={styles.errorMessage}>حدث خطأ أثناء الإرسال، حاول مرة أخرى.</p>}
            </div>
          </motion.div>

          <motion.div
            className="col-md-6"
            initial="hidden"
            animate={itemsInView ? "visible" : "hidden"}
            variants={itemsVariants}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className='imgContact'>
              <img src={IMGContact} className='w-100' alt="Contact" />
            </div>
          </motion.div>
        </div>
      </div>


</>
    )
  }