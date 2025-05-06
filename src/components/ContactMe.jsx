import emailjs from "@emailjs/browser";
import { useRef } from 'react';
import { useTranslation } from "react-i18next";

const ContactMe = () => {
  const form = useRef();
  const { t } = useTranslation();

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
        <p className="sectionTitle">{t("contact.title")}</p>
        <h2 className="sectionHeading">{t("contact.heading")}</h2>
        <p className="textMd">
          {t("contact.description")}
        </p>
      </div>
      <form ref={form} className="contactFormContainer" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="firstName" className="contactLabel">
            <span className="textMd">{t("contact.firstName")}</span>
            <input
              type="text"
              className="contactInput textMd "
              name="firstName"
              id="firstName"
              required
              placeholder={t("contact.firstName")}
            />
          </label>
          <label htmlFor="lastName" className="contactLabel">
            <span className="textMd">{t("contact.lastName")}</span>
            <input
              type="text"
              className="contactInput textMd "
              name="lastName"
              id="lastName"
              required
              placeholder={t("contact.lastName")}
            />
          </label>
          <label htmlFor="email" className="contactLabel">
            <span className="textMd">{t("contact.email")}</span>
            <input
              type="email"
              className="contactInput textMd "
              name="email"
              id="email"
              required
              placeholder={t("contact.email")}
            />
          </label>
          <label htmlFor="phoneNumber" className="contactLabel">
            <span className="textMd">{t("contact.phoneNumber")}</span>
            <input
              type="number"
              className="contactInput textMd "
              name="phoneNumber"
              id="phoneNumber"
              required
              placeholder={t("contact.phoneNumber")}
            />
          </label>
        </div>

        <label htmlFor="chooseTopic" className="contactLabel">
          <span className="textMd">{t("contact.chooseTopic")}</span>
          <select id="chooseTopic" name="chooseTopic" className="contactInput textMd">
            <option>{t("contact.selectOne")}</option>
            <option>{t("contact.topics.frontend")}</option>
            <option>{t("contact.topics.react")}</option>
            <option>{t("contact.topics.web")}</option>
            <option>{t("contact.topics.collab")}</option>
            <option>{t("contact.topics.general")}</option>
          </select>
        </label>
        <label htmlFor="message" className="contactLabel">
          <span className="textMd">{t("contact.message")}</span>
          <textarea
            id="message"
            className="contactInput textMd"
            name="message"
            rows="8"
            placeholder={t("contact.placeholderMessage")}
          ></textarea>
        </label>
        <label htmlFor="checkbox" className="checkboxLabel">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="textSm">{t("contact.acceptTerms")}</span>
        </label>
        <div>
          <button type="submit" className="btn btnPrimary contactFormBtn">             {t("contact.submit")}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;