import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is just a demo)");
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        style={styles.input}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        style={styles.input}
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        style={{ ...styles.input, height: "120px", resize: "vertical" }}
        required
      />

      <button type="submit" style={styles.button}>Send</button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    maxWidth: "400px",
    margin: "0 auto",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#4a74f5",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
  },
};
