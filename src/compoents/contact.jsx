import "./css/contact.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5ljbno4', 'template_o30s3sm', form.current, 'user_MF9QHQ01x51CdnRf7iwJr')
            .then((result) => {
                console.log(result.text);
                document.getElementById("form").reset();
                alert('Thanks for Contact Me');
            }, (error) => {
                console.log(error.text);
                document.getElementById("form").reset()
            });
    };

    return (
        <div className="contact" id="Contact">
            <h1 className="page-header">Contact Me</h1>
            <hr />
            <h6 className="page-subheader5"> Keep in Touch With Me</h6>
            <div className="form">
                <form ref={form} onSubmit={sendEmail} id="form">
                    <div>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="user_email" />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <button id="submit-btn">submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
