import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <section style={styles.container}>

        {/* CONTACT DETAILS */}
        <div style={styles.card}>
          <h1 style={styles.title}>Contact Me</h1>
          <p>GitHub:</p>
          <p>Email:</p>
          <p>Volcon:</p>
        </div>
        <div style={styles.form}>
          <hr />
          <ContactForm />
        </div>
        
    </section>
  );
}

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "60px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "55px",
    textAlign: 'center',
  },
  title: {
    fontSize: '48px',
    marginBottom: '18px',
    fontWeight: "700",
    color: "#1a1a1a"
  },
}
