import React, {useRef, useState} from 'react';
import './ContactForm.scss';
import emailjs from 'emailjs-com';

const Result =() => {
    return(
        <p className="succesful">Uw bericht is verzonden. Wij nemen zo snel mogelijk contact op met u!</p>
    )
}

function ContactForm(props) {

    const [result, showResult] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yavuijf', 'template_ongo5hf', form.current, 'user_LyqsrgcJReUVXccgvRAol')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
    }
    );
    e.target.reset();
    showResult(true);
  };


    return (
        <>
        <div className="form-title">Let's talk!</div>
        <form className="row" action="" ref={form} onSubmit={sendEmail}>
            <div className="col-md-12">
              <input type="text" className="form-control mt-3" name="fullName" id="inputName" placeholder='Naam'/>
              <input type="email" className="form-control mt-5" name="email" id="inputEmail" placeholder='email@gmail.com'/>
              <input type="phone" className="form-control mt-5" name="inputPhone" placeholder='+32 495 20 56 77'/>
            </div>
            <div className="col-md-12">
                <textarea className="form-control mt-5" placeholder="Laat hier uw bericht achter" name="inputMessage"></textarea>
                <button type="submit" className="btn btn-light mt-4">Verstuur</button>
            </div>
            
            <div className="formWord col-md-12 mt-5">
                <div className="row">{result ? <Result /> : null}</div>
              </div>
        </form> 
        </>



    );
}

export default ContactForm;