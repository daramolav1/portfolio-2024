import React, { useRef, useState } from "react";
import Alert from "react-bootstrap/Alert";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <Alert variant="success" className="success-msg">
      Your Message has been successfully sent.
    </Alert>
  );
};

const FormThree = () => {
  const form = useRef();

  const [result, showresult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_btvvpzj",
        "template_gjhhf58",
        form.current,
        "esMH_WvnP-B0UkoQW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    showresult(true);

    setTimeout(() => {
      showresult(false);
    }, 5000);
  };

  return (
    <form
      ref={form}
      onSubmit={(event) => handleSubmit(event)}
      className="axil-contact-form"
      name="home-contact"
      netlify
    >
      <div className="form-group">
        <label htmlFor="contact-name">Name</label>
        <input
          type="text"
          className="form-control"
          name="contact-name"
          placeholder="John Smith"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="contact-email">Email</label>
        <input
          type="email"
          className="form-control"
          name="contact-email"
          placeholder="example@mail.com"
          required
        />
      </div>
      <div className="form-group mb--40">
        <label htmlFor="contact-message">How can we help you?</label>
        <textarea
          name="contact-message"
          id="contact-message"
          className="form-control textarea"
          cols="30"
          rows="6"
        ></textarea>
      </div>
      <input type="hidden" name="form-name" value="home-contact" />
      <div className="text-end">
        <button
          type="submit"
          className="axil-btn btn-fill-primary w-auto btn-primary"
          name="submit-btn"
        >
          SEND
        </button>
      </div>
      <div className="form-group">{result ? <Result /> : null}</div>
    </form>
  );
};

export default FormThree;
