export default function Projects() {
  return (
    <section style={styles.container}>
      <h1>Projects</h1>
      <ul style={{ ...styles.list, listStyleType: "none", padding: 0, margin: 0 }}>
        <li>
          ⚡ React Login Auth (Frontend & Backend)
          <a href="https://github.com/anusb412/Auth">Check Me Out!</a>
          </li>
        <li>🎮 ECommerce Shop </li>
        <li>🧠 Kneaders CopyCat</li>
      </ul>
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

  list: {
    fontSize: "18px",
    color: "#333",
    lineHeight: "1.7",
    paddingLeft: "20px",
  },


}
