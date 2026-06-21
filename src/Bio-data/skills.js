import {
  SiPython,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss,
  SiDocker,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

// ── Edit your skills here. Add/remove entries freely. ─────────────────────
export const skillGroups = [
  {
    label: "Languages",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#E76F00" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#2965F1" },
    ],
  },
  {
    label: "Tools & DevOps",
    skills: [{ name: "Docker", icon: SiDocker, color: "#2496ED" }],
  },
];
