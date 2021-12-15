import React from 'react';
import ContactForm from '../components/ContactForm';




function Contact() {
  return (
    <>
    <div className="container">
      <div className="row text-center mt-3">
        <h1>Contact</h1>
      </div>
      <div className="row mt-3">
        <ContactForm/>
      </div>
    </div>

    </>
  );
}

export default Contact;