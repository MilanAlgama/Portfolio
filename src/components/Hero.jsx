import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/profile";

function useTypewriter(words, speed = 70, pause = 1600) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        speed
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        speed / 2
      );
    } else if (deleting && text.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => i + 1);
      }, 0);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="hero-section"
    >
      <div className="hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="hero-eyebrow">// welcome</p>
          <h1 className="hero-title">
            Hi, I'm{" "}
            <span className="text-gradient">{profile.name.split(" ")[0]}</span>
          </h1>
          <p className="hero-tagline">
            I <span className="text-gradient">{profile.tagline.toLowerCase()}</span>
          </p>

          <div className="typewriter-line">
            <span>{typed}</span>
            <span className="typewriter-cursor" />
          </div>

          <div className="hero-actions">
            <a
              href="#projects"
              className="primary-button"
            >
              View Projects
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="secondary-button"
            >
              Download Resume
            </a>
          </div>

          <div className="social-links">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="social-link"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="code-card-wrap"
        >
          <div className="code-card">
            <div className="window-dots">
              <span className="red-dot" />
              <span className="yellow-dot" />
              <span className="green-dot" />
            </div>
            <p>
              <span className="text-aurora">const</span>{" "}
              <span className="text-sky">student</span> = {"{"}
            </p>
            <p className="code-indent">
              degree: <span className="text-ink">"BSc. ICT"</span>,
            </p>
            <p className="code-indent">
              university: <span className="text-ink">"USJ"</span>,
            </p>
            <p className="code-indent">
              passion: <span className="text-ink">"building things"</span>,
            </p>
            <p className="code-indent">
              status: <span className="text-ink">"open to opportunities"</span>
            </p>
            <p>{"}"}</p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="scroll-cue"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
