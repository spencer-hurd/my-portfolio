import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Styles/ContactForm.css'

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mlekjaqn");
  if (state.succeeded) {
      return <p>Message Sent!</p>;
  }
  return (
    <form id="contact-form" onSubmit={handleSubmit}>
        <h3>Contact Me:</h3>
        <label htmlFor="email">
            Email Address: 
        </label>
        <input
            className='contact-field'
            id="email"
            type="email" 
            name="email"
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
        <label htmlFor="email">
            Full Name: 
        </label>
        <input
            className='contact-field'
            id="name"
            type="name" 
            name="name"
        />
        <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
        />
        <label htmlFor="email">
            Phone Number: 
        </label>
       <input
            className='contact-field'
            id="phone"
            type="text" 
            name="phone"
        />
        <ValidationError 
            prefix="Phone" 
            field="phone"
            errors={state.errors}
        />
        <label htmlFor="email">
            Message: 
        </label>
        <textarea
            id="message"
            name="message"
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
        <button id="submit-button" type="submit" disabled={state.submitting}>
            Submit
        </button>
    </form>
  );
}

export default ContactForm;
