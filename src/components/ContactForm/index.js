import React, { useState } from 'react';
import { validateEmail, validatePhone } from '../../utils/helpers';

const ContactForm = () => {
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: ''});
    const {name, email, phone, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleFormChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
        
        if(e.target.name === 'email'){
            const checkEmail = validateEmail(e.target.value);
            if(!checkEmail){
               setErrorMessage('Your email address is invalid!');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length){
                setErrorMessage(`Submit a ${e.target.name} to get in contact with me`);
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        

    }

    return (
        <form className="contact-form" onSubmit={handleFormSubmit}>
            {errorMessage && (
                <div>
                    <p className="">{errorMessage}</p>
                </div>
            )}
            <div className="m-3" >
                <label htmlFor="contact-name">Name:</label>
                <input type="text" id="contact-name" name="name" defaultValue={name} className="form-control" placeholder="Name" onBlur={handleFormChange} />
            </div>

            <div className="m-3">
                <label htmlFor="contact-email">E-mail:</label>
                <input type="email" id="contact-email" name="email" defaultValue={email} className="form-control"  placeholder="E-mail" onBlur={handleFormChange}/>
            </div>

            <div className="m-3">
                <label htmlFor="contact-phone">Phone Number: (optional)</label>
                <input type="tel" id="contact-phone" name="phone" defaultValue={phone} className="form-control" placeholder="555-555-5555" pattern='^([0-9+]{3})-([0-9+]{3})-([0-9+]{4})$'/>
            </div>

            <div className="m-3 d-grid">
                <label htmlFor="messageText"> Leave a Message:</label>
                <textarea id="messageText" name="messageText" name="message" defaultValue={message} className="form-control"  type="text" rows="5" placeholder="Text" cols="60" onBlur={handleFormChange}/>
            </div>

            <button type="submit" className="btn btn-primary" id="contact-submit">Submit</button>
        </form>
    )
};

export default ContactForm;