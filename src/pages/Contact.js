import React from 'react';
import ContactCard from '../components/contactcard/ContactCard';
import ContactForm from '../components/contactform/ContactForm';




function Contact() {
  return (
    <>
    <div className="container mt-3">
      <div className="row">
      <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
        <ContactCard/>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
        <ContactForm/>
      </div>
      </div>
    </div>

    </>
  );
}

export default Contact;