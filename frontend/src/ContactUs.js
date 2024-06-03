import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

function ContactUs() {

    const form = useRef();
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
      <h2>GET IN TOUCH</h2>

      <div className="contact-details">
        {/* <div className="contact-detail">
          <i className="fas fa-map-marker-alt"></i> 
          <h3>ADDRESS</h3>
          <p>Petite Maison au coin<br />24410 Festalemps, France</p>
        </div>

        <div className="contact-detail">
          <i className="fas fa-phone"></i>
          <h3>PHONE</h3>
          <p>123456789</p>
        </div> */}

        <div className="contact-detail">
          <i className="fas fa-envelope"></i>
          <h3>EMAIL</h3>
          <p>petitemaisonaucoin@gmail.com</p>
        </div>
      </div>

      <div className="message-us-section">
        <h2>Message Us</h2>
        <p>
          If you wish to contact us directly, please fill in the information below!
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
          <p className="success-message">Email sent successfully!</p>
            )}
            {submissionStatus === 'error' && (
            <p className="error-message">There was an error sending your email. Please try again later.</p>
            )}
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
