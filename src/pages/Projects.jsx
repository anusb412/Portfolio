import TODO from '../assets/TODO LIST/todo1.png';
import Auth1 from '../assets/Auth/auth1.png';
import KNEADERS from '../assets/kneaders_portfolio.png';
import COUNTER from '../assets/LetterCounterApp.png';
import QR from '../assets/QR.png';

export default function Projects() {
  const projectList = [
    {
      title: "SIMPLE QR CODE",
      img: QR,
      alt: 'qr code',
      description: "simpe qr code",
      tech: ['HTML', 'CSS'],
      link: "https://github.com/anusb412/qr-code-component-main"
    },
    {
      title: "JS LETTER COUNTER",
      img: COUNTER,
      alt: "Letter Counter",
      description: 'Javascript, Html and Css Letter Counter that counts the characters used.',
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/anusb412/Letter-Counter"
    },

    {
      title: "CRUD ToDo List",
      img: TODO,
      alt: "CRUD Todo App",
      description:
        "Simple React ToDo List with Add, Remove, Move-Up, and Move-Down functionality.",
      tech: ["React", "JavaScript", "CSS"],
      link: "https://github.com/anusb412/ToDoList",
    },
    {
      title: "⚡ React Login Authentication",
      img: Auth1,
      alt: "React Auth Project",
      description:
        "Full authentication flow with frontend and backend integration.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/anusb412/Auth",
    },
    {
      title: "Kneaders Clone Website",
      img: KNEADERS,
      alt: "",
      description:
        "A responsive clone of the Kneaders website focused on layout and styling accuracy.",
      tech: ["HTML", "CSS", "Responsive Design"],
      link: "https://github.com/anusb412/kneaders",
    },
  ];

  return (
    <section className="abtContainer">

      {/* HEADER */}
      <div className="abtCard abtIntro">
        <h1 className="abtTitle">Projects</h1>
        <p className="abtText lead">
          A selection of projects that showcase my skills in web development and design.
        </p>
      </div>

      {/* PROJECT GRID */}
      <div className="projectsGrid">
        {projectList.map((project) => (
          <div key={project.title} className="projectCard abtCard">
            
            {/* IMAGE or Placeholder */}
            {project.img ? (
              <img src={project.img} alt={project.alt} className="projectImg" />
            ) : (
              <div className="projectPlaceholder">
                <span>No Image</span>
              </div>
            )}

            <h3 className="projectTitle">{project.title}</h3>
            <p className="abtText">{project.description}</p>

            {/* TECH TAGS */}
            {project.tech && (
              <div className="techTags">
                {project.tech.map((tech) => (
                  <span key={tech} className="techTag">{tech}</span>
                ))}
              </div>
            )}

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ctaBtn"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>

    </section>
  );
}
