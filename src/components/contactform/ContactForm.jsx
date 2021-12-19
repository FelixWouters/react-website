import React, {useRef, useState} from 'react'
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
            <form action="" ref={form} onSubmit={sendEmail}>
              <div className="formWord">
                <h2>Stel uw vraag hier</h2>
                <span>Naam</span>
                <br/>
                <input className="input100" type="text" name="fullName" required=""/>
                <br/>
                <span>Telefoon</span>
                <br/>
                <input className="input100" type="text" name="phone" required=""/>
                <br/>
                <span>Email</span>
                <br/>
                <input className="input100" type="text" name="email" required=""/>
                <b/>
              </div>

              <div className="formWord">
                <span>Bericht</span>
                <br/>
                <textarea name="message" required=""></textarea>
                <br/>
                <button type="submit">VERSTUUR</button>

                <div className="row">{result ? <Result /> : null}</div>
              </div>
            </form>


    );
}

export default ContactForm;
