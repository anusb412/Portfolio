export default function About() {
  return (
    <section style={styles.container}>

      {/* INTRO CARD */}
      <div style={styles.card}>
        <h1 style={styles.title}>About Me</h1>
        <p style={styles.text}>
          Hi! I'm <strong>Anthony Nusbaum</strong>, a passionate developer who loves building 
          beautiful, high-performing apps using modern web technologies. I focus on creating 
          clean UI, smooth interactions, and user-first experiences that feel great to use.
        </p>

        <p style={styles.text}>
          I started coding <strong>2 Years Ago</strong>. Since then, I've 
          been dedicated to constantly improving, learning new tools, and pushing myself to 
          build better and smarter applications.
        </p>
      </div>

      {/* EXPERIENCE CARD */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>My Experience</h2>
        <p style={styles.text}>
          Over the years, I've worked on a variety of projects — from small personal tools 
          to fully featured applications. My experience includes:
        </p>

        <ul style={{ ...styles.list, listStyleType: "none", padding: 0, margin: 0 }}>
          <li>⭐ Building dynamic React applications with clean UI</li>
          <li>⭐ Creating responsive layouts for all screen sizes</li>
          <li>⭐ Working with APIs, authentication, and modern data flows</li>
          <li>⭐ Designing user-friendly interfaces with accessibility in mind</li>
          <li>⭐ Developing full-stack apps with Node.js and backend tools</li>
        </ul>

        <p style={{ ...styles.text, marginTop: 20 }}>
          I'm currently focusing on <strong>CRUD ToDo List with React</strong>, and looking to 
          expand into <strong>AI FAQ Chat Bot with React</strong>.
        </p>
      </div>

      {/* SKILLS CARD */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>Technical Skills</h2>

        <div style={styles.skillsGrid}>
          {[
            "React",
            "JavaScript",
            "HTML & CSS",
            "Node.js",
            "UI/UX",
            "APIs",
            "Responsive Design",
            "Git & GitHub",
            "Firebase",
            "Modern CSS",
          ].map((skill) => (
            <div key={skill} style={styles.skillItem}>{skill}</div>
          ))}
        </div>
      </div>

      {/* PERSONAL CARD */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>A Bit More Personal</h2>
        <p style={styles.text}>
          Outside of development, I enjoy <strong>PaddelBoarding, Fishing, Video Gaming, Hiking</strong>. I love finding 
          inspiration from design, gaming, music, and whatever sparks creativity. 
        </p>

        <p style={styles.text}>
          I'm always learning, improving, and trying to make something better than before. 
          Whether it's refining a UI, optimizing performance, or experimenting with new tools — 
          I enjoy the process of creating something meaningful.
        </p>
      </div>

      {/* CTA CARD */}
      <div style={styles.ctaCard}>
        <h2 style={styles.ctaTitle}>Want to Work Together?</h2>
        <p style={styles.ctaText}>
          I'm currently open to opportunities, collaborations, or project requests.  
          If you'd like to reach out, feel free to contact me anytime.
        </p>

        <a href="/contact" style={styles.ctaBtn}>Contact Me →</a>
      </div>

    </section>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "60px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "55px",
  },

  card: {
    background: "white",
    padding: "50px 40px",
    borderRadius: "16px",
    boxShadow: "0 8px 28px rgba(0,0,0,0.12)",
  },

  title: {
    fontSize: "48px",
    marginBottom: "18px",
    fontWeight: "800",
    color: "#1a1a1a",
  },

  sectionTitle: {
    fontSize: "30px",
    marginBottom: "20px",
    fontWeight: "700",
    color: "#222",
  },

  text: {
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#444",
    marginBottom: "15px",
  },

  list: {
    fontSize: "18px",
    color: "#333",
    lineHeight: "1.7",
    paddingLeft: "20px",
  },

  // SKILLS GRID
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "20px",
    marginTop: "10px",
  },

  skillItem: {
    background: "#f5f5f5",
    padding: "16px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    textAlign: "center",
    fontWeight: "600",
    fontSize: "16px",
    color: "#333",
  },

  // CALL-TO-ACTION
  ctaCard: {
    background: "#111",
    color: "white",
    padding: "60px 40px",
    borderRadius: "18px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },

  ctaTitle: {
    fontSize: "32px",
    marginBottom: "15px",
    fontWeight: "800",
  },

  ctaText: {
    fontSize: "18px",
    maxWidth: "700px",
    margin: "0 auto 25px auto",
    lineHeight: "1.7",
    color: "#ddd",
  },

  ctaBtn: {
    display: "inline-block",
    padding: "14px 26px",
    background: "white",
    color: "#111",
    fontSize: "18px",
    borderRadius: "10px",
    fontWeight: "700",
    textDecoration: "none",
    boxShadow: "0 6px 20px rgba(255,255,255,0.2)",
  },
};
