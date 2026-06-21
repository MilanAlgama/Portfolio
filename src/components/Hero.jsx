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
      setDeleting(false);
      setIndex((i) => i + 1);
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
      className="relative flex min-h-screen items-center px-6 pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow mb-4">// welcome</p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Hi, I'm{" "}
            <span className="text-gradient">{profile.name.split(" ")[0]}</span>
          </h1>
          <p className="mt-3 font-display text-2xl text-muted sm:text-3xl">
            I <span className="text-gradient">{profile.tagline.toLowerCase()}</span>
          </p>

          <div className="mt-6 flex h-8 items-center font-mono text-lg text-sky sm:text-xl">
            <span>{typed}</span>
            <span className="ml-1 inline-block h-5 w-[2px] animate-blink bg-sky" />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-aurora-gradient px-6 py-3 font-mono text-sm font-medium text-void shadow-glow transition-transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="glass glow-edge rounded-full px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex gap-5 text-muted">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-sky"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-sky"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="transition-colors hover:text-sky"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden justify-self-center md:block"
        >
          <div className="glass-strong glow-edge relative rounded-3xl p-8 font-mono text-sm text-muted shadow-glow">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />
            </div>
            <p>
              <span className="text-aurora">const</span>{" "}
              <span className="text-sky">student</span> = {"{"}
            </p>
            <p className="pl-4">
              degree: <span className="text-ink">"BSc. ICT"</span>,
            </p>
            <p className="pl-4">
              university: <span className="text-ink">"USJ"</span>,
            </p>
            <p className="pl-4">
              passion: <span className="text-ink">"building things"</span>,
            </p>
            <p className="pl-4">
              status: <span className="text-ink">"open to opportunities"</span>
            </p>
            <p>{"}"}</p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
