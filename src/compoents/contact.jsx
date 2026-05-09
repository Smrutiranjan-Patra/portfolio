import "./css/contact.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { portfolio } from "../data/portfolio";

export const ContactUs = () => {
    const form = useRef();
    const { contact } = portfolio;

    const sendEmail = async () => {
        try {
            const response = await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            console.log("SUCCESS!", response);
        } catch (error) {
            console.log("FAILED...", error);
        }
    };

    return (
        <section className="contact section" id="Contact">
            <div className="section-heading">
                <p className="eyebrow">{contact.eyebrow}</p>
                <h1 className="page-header">{contact.headline}</h1>
                <p className="page-subheader5">{contact.subheadline}</p>
            </div>
            <div className="form">
                <form ref={form} onSubmit={(e) => { e.preventDefault(); sendEmail(); }} id="form">
                    <div>
                        <label>{contact.form.nameLabel}</label>
                        <input type="text" name="user_name" placeholder={contact.form.namePlaceholder} required />
                    </div>
                    <div>
                        <label>{contact.form.emailLabel}</label>
                        <input type="email" name="user_email" placeholder={contact.form.emailPlaceholder} required />
                    </div>
                    <div>
                        <label>{contact.form.messageLabel}</label>
                        <textarea name="message" placeholder={contact.form.messagePlaceholder} required></textarea>
                    </div>
                    <div>
                        <button id="submit-btn" type="submit">{contact.form.submitLabel}</button>
                    </div>
                </form>
                <div className="sidedetails">
                    <h2>{contact.directTitle}</h2>
                    {contact.links.map((link) => {
                        const externalProps = link.external
                            ? { target: "_blank", rel: "noreferrer" }
                            : {};

                        return <a href={link.href} key={link.label} {...externalProps}>{link.label}</a>;
                    })}
                    <div className="contact-note">
                        <strong>{contact.noteTitle}</strong>
                        <span>{contact.note}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
