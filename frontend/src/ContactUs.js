import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';
import { useTranslation } from 'react-i18next';

function ContactUs() {

    const form = useRef();
    const { t } = useTranslation();
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const sendEmail = (e) => {
      e.preventDefault();
      setSubmissionStatus('sending');
  
      //Sends an email using EmailJS
      emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID) 
        .then((result) => {
          console.log('Success!', result.text);
          form.current.reset();
          setSubmissionStatus('success');
        }, (error) => {
          console.error('Failed...', error.text);
          setSubmissionStatus('error');
        });
    };
    
  return (
    <section className="contact-section">
      <h2>{t('getInTouch')}</h2>

      <div className="contact-details">
        <div className="contact-detail">
          <i className="fas fa-envelope"></i>
          <h3>EMAIL</h3>
          <p>petitemaisonaucoin@gmail.com</p>
        </div>
      </div>

      <div className="message-us-section">
        <h2>{t('messageUs')}</h2>
        <p>
          {t('directContact')}
        </p>

        <form ref={form} onSubmit={sendEmail} className="message-form">
          <div className="form-group">
            <input type="text" name="from_name" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="from_email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Comments" rows="4" required></textarea>
          </div>
          <button type="submit">SUBMIT</button>

          {submissionStatus === 'success' && (
          <p className="success-message">{t('successMessage')}</p>
            )}
            {submissionStatus === 'error' && (
            <p className="error-message">{t('errorMessage')}</p>
            )}
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
