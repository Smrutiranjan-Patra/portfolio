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
        <section className="contact section" id="Contact">
            <div className="section-heading">
                <p className="eyebrow">Contact</p>
                <h1 className="page-header">Let us build something useful.</h1>
                <p className="page-subheader5">Share a role, project, or collaboration idea and I will get back to you.</p>
            </div>
            <div className="form">
                <form ref={form} onSubmit={sendEmail} id="form">
                    <div>
                        <label>Name</label>
                        <input type="text" name="user_name" placeholder="Your name" required />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="user_email" placeholder="you@example.com" required />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea name="message" placeholder="Tell me about the opportunity or project" required></textarea>
                    </div>
                    <div>
                        <button id="submit-btn" type="submit">Send message</button>
                    </div>
                </form>
                <div className="sidedetails">
                    <h2>Direct links</h2>
                    <a href="mailto:guessme.smruti@gmail.com">guessme.smruti@gmail.com</a>
                    <a href="tel:9776444262">+91 9776444262</a>
                    <a href="https://goo.gl/maps/TDDTGna6qYtZFVT17" target="_blank" rel="noreferrer">Puri, Odisha</a>
                    <div className="contact-note">
                        <strong>Best fit</strong>
                        <span>Full-stack roles, MERN applications, API integrations, and product-facing React work.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
