import React from 'react';
import ContactCard from '../components/contactcard/ContactCard';
import ContactForm from '../components/contactform/ContactForm';




function Contact() {
  return (
    <>
    <div className="container">
      <div className="row mt-3">
        <ContactForm/>
      </div>
      <div className="row mt-3">
        <ContactCard/>
      </div>

    </div>

    </>
  );
}

export default Contact;