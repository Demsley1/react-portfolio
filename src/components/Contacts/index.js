import React from 'react';
import ContactForm from '../ContactForm';

function Contact() {
    return (
        <section className="contact-section">
            <h1 className="contact-title">Contact-Me</h1> 
            <div className="d-flex flex-wrap justify-content-evenly my-5">     
                <ContactForm />

                <div className="m-5">
                    <h3>My personal Contact Info:</h3><br></br>

                    <p>Email: emsley3684@gmail.com</p>
                    <p>Phone Number: (516)761-3072 </p>

                    <img className="img my-5" src="/images/NYC.jpg" />
                </div>
            </div>
        </section>
    )
};

export default Contact;