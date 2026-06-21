import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Plus } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";

function TiltCard({ project }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const handleMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(800px) rotateY(${x * 10}deg) rotateX(${
        y * -10
      }deg) translateZ(10px)`,
    });
  };

  const reset = () => setStyle({ transform: "perspective(800px)" });

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ transition: "transform 0.25s ease", ...style }}
      className="project-card"
    >
      <h3 className="project-title">
        {project.title}
      </h3>
      <p className="project-copy">
        {project.description}
      </p>
      <div className="tech-list">
        {project.tech.map((t) => (
          <span
            key={t}
            className="tech-pill"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a
          href={project.github || "#"}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} GitHub repository`}
          className="project-link"
        >
          <FaGithub size={16} /> Code
        </a>
        <a
          href={project.demo || "#"}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} live demo`}
          className="project-link"
        >
          <ExternalLink size={16} /> Live Demo
        </a>
      </div>
    </div>
  );
}

function AddProjectCard() {
  const [hint, setHint] = useState(false);

  const showHint = () => {
    setHint(true);
    setTimeout(() => setHint(false), 2500);
  };

  return (
    <button
      onClick={showHint}
      className="add-project-card"
    >
      <Plus size={28} />
      <span className="add-project-text">Add Project</span>
      {hint && (
        <span className="add-project-hint">
          Edit src/data/projects.js to add a new project
        </span>
      )}
    </button>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-space">
      <div className="container-wide">
        <SectionHeading comment="// projects" title="Things I've built" />

        <div className="project-grid">
          {projects.map((project, i) => (
            <Reveal key={project.title + i} delay={i * 0.1}>
              <motion.div whileHover={{ y: -4 }} className="full-height">
                <TiltCard project={project} />
              </motion.div>
            </Reveal>
          ))}
          <Reveal delay={projects.length * 0.1}>
            <AddProjectCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
