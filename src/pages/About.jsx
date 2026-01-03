export default function About() {
  return (
    <section className="abtContainer">

      {/* INTRO CARD */}
      <div className="abtCard">
        <h1 className="abtTitle">About Me</h1>
        <p className="abtText">
          Hi! I'm <span className='name' >Anthony Nusbaum</span>, a passionate developer who loves building 
          beautiful, high-performing apps using modern web technologies. I focus on creating 
          clean UI, smooth interactions, and user-first experiences that feel great to use.
        </p>

        <p className="abtText">
          I started coding <strong>2 Years Ago</strong>. Since then, I've 
          been dedicated to constantly improving, learning new tools, and pushing myself to 
          build better and smarter applications.
        </p>
      </div>

      {/* EXPERIENCE CARD */}
      <div className="abtCard">
        <h2 className="abtSectionTitle">My Experience</h2>
        <p className="abtText">
          Over the years, I've worked on a variety of projects — from small personal tools 
          to fully featured applications. My experience includes:
        </p>

        <ul className="experienceList">
          <li>⭐ Building dynamic React applications with clean UI</li>
          <li>⭐ Creating responsive layouts for all screen sizes</li>
          <li>⭐ Working with APIs, authentication, and modern data flows</li>
          <li>⭐ Designing user-friendly interfaces with accessibility in mind</li>
          <li>⭐ Developing full-stack apps with Node.js and backend tools</li>
        </ul>

        <p className='experienceText' >
          I'm currently focusing on <strong>Kneaders Clone Website</strong>, and looking to 
          expand into <strong>VR Game Development</strong>.
        </p>
      </div>

      {/* SKILLS CARD */}
      <div className="abtCard">
        <h2 className="abtSectionTitle">Technical Skills</h2>

        <div className="skillsGrid">
          {[
            "React",
            "JavaScript",
            "HTML & Modern CSS",
            "Node.js",
            "UI/UX",
            "APIs",
            "Responsive Design",
            "Git & GitHub",
            "Firebase",
            "MongoDB"

          ].map((skill) => (
            <div key={skill} className="skillItem">{skill}</div>
          ))}
        </div>
      </div>

      {/* PERSONAL CARD */}
      <div className="abtCard">
        <h2 className="abtSectionTitle">A Bit More Personal</h2>
        <p className="abtText">
          Outside of development, I enjoy <strong>PaddelBoarding, Fishing, Video Gaming, Hiking</strong>. I love finding 
          inspiration from design, gaming, music, and whatever sparks creativity. 
        </p>

        <p className="abtText">
          I'm always learning, improving, and trying to make something better than before. 
          Whether it's refining a UI, optimizing performance, or experimenting with new tools — 
          I enjoy the process of creating something meaningful.
        </p>
      </div>

      {/* CTA CARD */}
      <div className="ctaCard">
        <h2 className="ctaTitle">Want to Work Together?</h2>
        <p className="ctaText">
          I'm currently open to opportunities, collaborations, or project requests.  
          If you'd like to reach out, feel free to contact me anytime.
        </p>

        <a href="/contact" className="ctaBtn">Contact Me →</a>
      </div>

    </section>
  );
}
