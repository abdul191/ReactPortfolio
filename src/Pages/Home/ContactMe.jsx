import emailjs from "@emailjs/browser";
import { useRef } from 'react';

const ContactMe = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gx0f59h', 'template_gvovijl', form.current, 'xnjqtmd8RksRUL4_y')
      .then((result) => {
        console.log('Email successfully sent!', result);

        alert('Message sent successfully!');
      }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('Failed to send the message, please try again.');
      });
  };

  return (
    <section id="ContactMe" className="contactSection">
      <div>
        <p className="sectionTitle">Get In Touch</p>
        <h2 className="sectionHeading">Contact Me</h2>
        <p className="textMd">
          Feel free to reach out to me with any inquiries or questions. {"I'm"}{" "}
        </p>
      </div>
      <form ref={form} className="contactFormContainer" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="firstName" className="contactLabel">
            <span className="textMd">First Name</span>
            <input
              type="text"
              className="contactInput textMd "
              name="firstName"
              id="firstName"
              required
              placeholder="Enter your first name."
            />
          </label>
          <label htmlFor="lastName" className="contactLabel">
            <span className="textMd">Last Name</span>
            <input
              type="text"
              className="contactInput textMd "
              name="lastName"
              id="lastName"
              required
              placeholder="Enter your last name."
            />
          </label>
          <label htmlFor="email" className="contactLabel">
            <span className="textMd">Email</span>
            <input
              type="email"
              className="contactInput textMd "
              name="email"
              id="email"
              required
              placeholder="Enter your email address."
            />
          </label>
          <label htmlFor="phoneNumber" className="contactLabel">
            <span className="textMd">Phone Number</span>
            <input
              type="number"
              className="contactInput textMd "
              name="phoneNumber"
              id="phoneNumber"
              required
              placeholder="Enter your phone number."
            />
          </label>
        </div>

        <label htmlFor="chooseTopic" className="contactLabel">
          <span className="textMd">Choose a topic</span>
          <select id="ChooseTopic" name="chooseTopic" className="contactInput textMd">
            <option> Select One ... </option>
            <option> Front-end Development</option>
            <option>React Development</option>
            <option>Web Development Inquiry</option>
            <option>Project Collaboration</option>
            <option>General Inquiry</option>
          </select>
        </label>
        <label htmlFor="message" className="contactLabel">
          <span className="textMd">Message</span>
          <textarea
            id="message"
            className="contactInput textMd"
            name="message"
            rows="8"
            placeholder="Type Your message . . . "></textarea>
        </label>
        <label htmlFor="checkbox" className="checkboxLabel">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="textSm">Check to accept terms.</span>
        </label>
        <div>
          <button type="submit" className="btn btnPrimary contactFormBtn"> Submit </button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;