const ContactMe = () => {
  return (
    <section id="ContactMe" className="contactSection">
      <div>
        <p className="subTitle">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="textLg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
          expedita!
        </p>
      </div>
      <form className="contactFormContainer">
        <div className="container">
          <label htmlFor="firstName" className="contactLabel">
            <span className="textMd">First Name</span>
            <input
              type="text"
              className="contactInput textMd "
              name="firstName"
              id="firstName"
              required
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
            />
          </label>
        </div>

        <label htmlFor="chooseTopic" className="contactLabel">
          <span className="textMd">Choose a topic</span>
          <select id="ChooseTopic" className="contactInput textMd">
            <option> Select One ... </option>
            <option> Item 1 </option>
            <option> Item 2 </option>
            <option> Item 3 </option>
          </select>
        </label>
        <label htmlFor="message" className="contactLabel">
          <span className="textMd">Message</span>
          <textarea
            id="message"
            className="contactInput textMd"
            rows="8"
            placeholder="Type Your message . . . "></textarea>
        </label>
        <label htmlFor="checkbox" className="checkboxLabel">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="textSm">I Accept The Terms</span>
        </label>
        <div>
            <button className="btn btnPrimary contactFormBtn"> Submit </button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
