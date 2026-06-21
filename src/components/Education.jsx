import { GraduationCap, School } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="section-space">
      <div className="container-medium">
        <SectionHeading comment="// education" title="Where I've learned" />

        <div className="education-timeline">
          {education.map((item, i) => {
            const Icon = item.type === "School" ? School : GraduationCap;
            return (
              <Reveal key={item.school} delay={i * 0.12} className="education-item">
                <span className="timeline-icon">
                  <Icon size={16} />
                </span>
                <div className="education-card">
                  <p className="education-type">{item.type}</p>
                  <h3 className="education-school">
                    {item.school}
                  </h3>
                  <p className="education-detail">{item.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
