import React, {useRef} from 'react';
import "./Contact.css";
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from 'react-icons/ri';
import {SiZalo} from 'react-icons/si';
import emailjs from "emailjs-com";
const Contact = () => {
const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9wg6koc', 'template_pe8zpmk', form.current, '-BsOW-C8SRUSTHiBu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>

<h5>Get In Touch</h5>
<h2>Contact Me</h2>
<div className="container contact_container">
  <div className="contact_options">
    <article className="contact_option">
      <MdOutlineEmail className='contact_option-icon'/>
     <h4> Email</h4>
      <h5>minh.duyng23@gmail.com</h5>
      <a href="mailto:dummyegator@gmail.com" rel="noreferrer" target="_blank">Send a message</a>
    </article>

    <article className="contact_option">
      <RiMessengerLine className='contact_option-icon'/>
     <h4> Messenger</h4>
      <h5>Nguyễn Duy</h5>
      <a href="https://www.facebook.com/messages/t/100063464345841" rel="noreferrer" target="_blank">Send a message</a>
    </article>

    <article className="contact_option">
      <SiZalo className='contact_option-icon'/>
     <h4> Zalo</h4>
      <h5>+84 783 62 72 72 </h5>
      <a href="https://zalo.me/0783627272" rel="noreferrer" target="_blank">Send a message</a>
    </article>
  </div>
 {/* END OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
</div>

    </section>

  )
}

export default Contact