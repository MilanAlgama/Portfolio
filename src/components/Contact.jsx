import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, Copy } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — link still works as a fallback
    }
  };

  return (
    <section id="contact" className="section-space">
      <div className="centered-container">
        <SectionHeading
          comment="// contact"
          title="Let's build something together"
        />

        <Reveal delay={0.1}>
          <p className="contact-copy">
            Open to internships, collaborations, and good conversations about
            tech. Reach out — I usually reply within a day.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="contact-card">
          <div className="contact-email">
            <Mail size={18} className="contact-icon" />
            {profile.email}
          </div>
          <button
            onClick={copyEmail}
            className="copy-button"
          >
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? "Copied!" : "Copy email"}
          </button>
        </Reveal>

        <Reveal delay={0.3} className="contact-socials">
          <motion.a
            whileHover={{ y: -4 }}
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="contact-social-link"
          >
            <FaGithub size={20} />
          </motion.a>
          <motion.a
            whileHover={{ y: -4 }}
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="contact-social-link"
          >
            <FaLinkedin size={20} />
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
