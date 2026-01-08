import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section className="abtContainer">

      {/* HEADER CARD */}
      <div className="abtCard contactIntro">
        <h1 className="abtTitle">Contact Me</h1>
        <p className="abtText lead">
          I'd love to hear from you! Whether it's a project idea, a job opportunity, or just a chat—reach out anytime.
        </p>
        <div className="contactLinks">
          <p>
            <a href="https://github.com/anusb412" target="_blank" rel="noopener noreferrer">
              GitHub: /anusb412
            </a>
          </p>
          <p>
            <a href="mailto:anusb412@gmail.com">
              Email: anusb412@gmail.com
            </a>
          </p>
          <p>Volcon: Coming Soon 🚀</p>
        </div>
      </div>

      {/* CONTACT FORM CARD */}
      <div className="abtCard contactFormCard">
        <ContactForm />
      </div>

    </section>
  );
}
