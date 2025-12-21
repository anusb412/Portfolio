export default function Home() {
  return (
    <section style={styles.container}>

      {/* HERO */}
      <div style={styles.heroCard}>
        <h1 style={styles.title}>Hello, I'm Anthony 👋</h1>
        <p style={styles.subtitle}>
          I’m a modern frontend developer creating clean, responsive,
          and professional React applications.
        </p>

        <div style={styles.buttons}>
          <a href="/projects" style={styles.primaryBtn}>View Projects</a>
          <a href="/contact" style={styles.secondaryBtn}>Contact</a>
        </div>
      </div>

      {/* SKILLS */}
      <div style={styles.skillsCard}>
        <h2 style={styles.sectionTitle}>Skills</h2>

        <div style={styles.skillsGrid}>
          {["React", "JavaScript", "HTML/CSS", "Node.js", "UI/UX", "APIs", "Responsive Design"]
            .map((skill) => (
              <div key={skill} style={styles.skillItem}>{skill}</div>
            ))
          }
        </div>
      </div>

      {/* ABOUT PREVIEW */}
      <div style={styles.aboutCard}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <p style={styles.aboutText}>
          I specialize in building beautiful, functional web apps with a focus
          on clean UI, accessibility, and high performance. I love turning ideas
          into polished digital experiences that users enjoy.
        </p>

        <a href="/about" style={styles.aboutBtn}>Learn More →</a>
      </div>

    </section>
  );
}

const styles = {
  // Container
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "60px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "55px",
  },

  // HERO CARD
  heroCard: {
    background: "white",
    padding: "60px 40px",
    borderRadius: "18px",
    textAlign: "center",
    boxShadow: "0 8px 28px rgba(0,0,0,0.12)",
  },

  title: {
    fontSize: "52px",
    marginBottom: "15px",
    fontWeight: "800",
    color: "#1a1a1a",
  },

  subtitle: {
    fontSize: "20px",
    color: "#555",
    maxWidth: "700px",
    margin: "0 auto 35px auto",
    lineHeight: "1.6",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
  },

  primaryBtn: {
    padding: "14px 28px",
    background: "#2563eb",
    color: "white",
    borderRadius: "10px",
    fontWeight: "600",
    textDecoration: "none",
    fontSize: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    transition: "0.2s",
  },

  secondaryBtn: {
    padding: "14px 28px",
    border: "2px solid #2563eb",
    color: "#2563eb",
    borderRadius: "10px",
    fontWeight: "600",
    textDecoration: "none",
    fontSize: "16px",
    transition: "0.2s",
  },

  // HOVER EFFECTS
  primaryBtnHover: {},
  secondaryBtnHover: {},

  // SKILLS CARD
  skillsCard: {
    background: "#ddcbcbff",
    padding: "50px 40px",
    borderRadius: "16px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
  },

  sectionTitle: {
    fontSize: "30px",
    marginBottom: "25px",
    fontWeight: "700",
    color: "#222",
  },

  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
  },

  skillItem: {
    background: "white",
    padding: "16px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    textAlign: "center",
    fontWeight: "600",
    fontSize: "16px",
    color: "#333",
  },

  // ABOUT CARD
  aboutCard: {
    background: "#978282ff",
    padding: "50px 40px",
    borderRadius: "16px",
    boxShadow: "0 8px 28px rgba(0,0,0,0.12)",
  },

  aboutText: {
    fontSize: "18px",
    color: "#444",
    lineHeight: "1.7",
    maxWidth: "800px",
    marginBottom: "25px",
  },

  aboutBtn: {
    display: "inline-block",
    padding: "12px 22px",
    background: "#111",
    color: "white",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "600",
    boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
  },
};
