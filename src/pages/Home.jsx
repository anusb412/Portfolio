import { Link } from "react-router-dom";

export default function Home() {
  const skills = [
    "React",
    "JavaScript",
    "HTML/CSS",
    "Node.js",
    "UI/UX",
    "APIs",
    "Responsive Design",
  ];

  return (
    <main className="mainContainer">
      {/* HERO SECTION */}
      <section className="homeCard heroCard">
        <h1 className="heroTitle">Hello, I'm Anthony 👋</h1>

        <p className="heroSubtitle">
          I’m a modern frontend developer creating clean, responsive,
          and professional React applications.
        </p>

        <div className="buttonGroup">
          <Link to="/projects" className="primaryBtn">
            View Projects
          </Link>

          <Link to="/contact" className="secondaryBtn">
            Contact
          </Link>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="homeCard">
        <h2
          className="heroTitle"
          style={{ fontSize: "28px", marginBottom: "24px" }}
        >
          Skills
        </h2>

        <div className="skillsGrid">
          {skills.map((skill) => (
            <div key={skill} className="skillPill">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="homeCard">
        <h2
          className="heroTitle"
          style={{ fontSize: "28px", marginBottom: "24px" }}
        >
          About Me
        </h2>

        <p className="aboutPreview">
          I specialize in building beautiful, functional web apps with a focus
          on clean UI, accessibility, and performance. I enjoy turning ideas
          into polished digital experiences that feel effortless to use.
        </p>

        <Link to="/about" className="aboutBtn">
          Learn More →
        </Link>
      </section>
    </main>
  );
}
