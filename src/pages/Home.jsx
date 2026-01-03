export default function Home() {
  return (
    <section className="container">

      {/* HERO */}
      <div className="heroCard">
        <h1 className="title">Hello, I'm Anthony 👋</h1>
        <p className="subtitle">
          I’m a modern frontend developer creating clean, responsive,
          and professional React applications.
        </p>

        <div className="buttons">
          <a href="/projects" className="primaryBtn">View Projects</a>
          <a href="/contact" className="secondaryBtn">Contact</a>
        </div>
      </div>

      {/* SKILLS */}
      <div className="skillsCard">
        <h2 className="sectionTitle">Skills</h2>

        <div className='skillsGrid'>
          {["React", "JavaScript", "HTML/CSS", "Node.js", "UI/UX", "APIs", "Responsive Design"]
            .map((skill) => (
              <div key={skill} className="skillItem">{skill}</div>
            ))
          }
        </div>
      </div>

      {/* ABOUT PREVIEW */}
      <div className="aboutCard">
        <h2 className="sectionTitle">About Me</h2>
        <p className="aboutText">
          I specialize in building beautiful, functional web apps with a focus
          on clean UI, accessibility, and high performance. I love turning ideas
          into polished digital experiences that users enjoy.
        </p>

        <a href="/about" className="aboutBtn">Learn More →</a>
      </div>

    </section>
  );
}

