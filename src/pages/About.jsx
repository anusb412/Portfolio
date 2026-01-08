export default function About() {
  return (
    <section className="abtContainer">

      {/* INTRO */}
      <div className="abtCard abtIntro">
        <h1 className="abtTitle">About Me</h1>
        <p className="abtText lead">
          Hi! I'm <span className="name">Anthony Nusbaum</span>, a passionate
          developer who loves building beautiful, high-performing apps using
          modern web technologies.
        </p>

        <p className="abtText">
          I focus on creating clean UI, smooth interactions, and user-first
          experiences that feel great to use. I started coding
          <strong> 2 years ago</strong> and have been relentlessly improving ever since.
        </p>
      </div>

      {/* EXPERIENCE */}
      <div className="abtCard">
        <h2 className="abtSectionTitle">My Experience</h2>

        <ul className="experienceList">
          <li>⚡ Dynamic React applications with clean UI</li>
          <li>📱 Fully responsive layouts for all screen sizes</li>
          <li>🔐 APIs, authentication, and modern data flows</li>
          <li>🎨 UI/UX design with accessibility in mind</li>
          <li>🛠 Full-stack apps using Node.js & backend tools</li>
        </ul>

        <p className="abtText subtle">
          Currently working on the <strong>Kneaders Clone Website</strong> and
          expanding into <strong>VR Game Development</strong>.
        </p>
      </div>

      {/* SKILLS */}
      <div className="abtCard">
        <h2 className="abtSectionTitle">Technical Skills</h2>

        <div className="skillsGrid">
          {[
            "React",
            "JavaScript",
            "HTML & CSS",
            "Node.js",
            "UI / UX",
            "APIs",
            "Responsive Design",
            "Git & GitHub",
            "Firebase",
            "MongoDB",
          ].map(skill => (
            <div key={skill} className="skillItem skillPill">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* PERSONAL */}
      <div className="abtCard">
        <h2 className="abtSectionTitle">Beyond the Code</h2>
        <p className="abtText">
          Outside of development, I enjoy <strong>paddleboarding, fishing,
          gaming, and hiking</strong>. Creativity for me comes from many places — design, games, music, and curiosity.
        </p>

        <p className="abtText">
          I enjoy refining details, improving performance, and experimenting
          with new ideas. Progress is the fun part.
        </p>
      </div>

      {/* CTA */}
      <div className="ctaCard">
        <h2 className="ctaTitle">Let’s Build Something Great</h2>
        <p className="ctaText">
          I’m open to opportunities, collaborations, and freelance projects.
        </p>
        <a href="/contact" className="ctaBtn">Contact Me →</a>
      </div>

    </section>
  );
}
