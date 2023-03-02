import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Styles/ContactForm.css";

const ContactForm = ({ contactFormRef, closeModal }) => {
  const [state, handleSubmit] = useForm("mlekjaqn");
  if (state.succeeded) {
    return <p id="success">Message Sent!</p>;
  }

  return (
    <div id="contact-form">
      <div className="modal-header">
        <h4 className="contact-me h-4">Contact Me:</h4>
        <button className="modal-button" onClick={closeModal}>
          X
        </button>
      </div>
      <form id="form-fields" onSubmit={handleSubmit} ref={contactFormRef}>
        <div className="contact-fields-container">
          <div id="personal-fields">
            <label htmlFor="email">Email Address:</label>
            <input
              className="contact-field"
              id="email"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="name">Full Name:</label>
            <input
              className="contact-field"
              id="name"
              type="name"
              name="name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <label htmlFor="telephone">Phone Number:</label>
            <input
              className="contact-field"
              id="phone"
              type="text"
              name="phone"
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
          </div>
          <div id="message-field">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </div>
        <button id="submit-button" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
