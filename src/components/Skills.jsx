import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-space">
      <div className="container-wide">
        <SectionHeading comment="// skills" title="What I work with" />

        <div className="skill-groups">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.1}>
              <p className="skill-group-label">{group.label}</p>
              <div className="skill-list">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -6, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="skill-pill"
                    >
                      <Icon size={22} style={{ color: skill.color }} />
                      <span className="skill-name">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
