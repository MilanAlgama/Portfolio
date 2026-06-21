import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";

export default function About() {
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <section id="about" className="section-space">
      <div className="container-wide">
        <SectionHeading comment="// about" title="Who I am" />

        <div className="about-grid">
          <Reveal className="avatar-wrap">
            <div className="avatar-shell">
              <div className="avatar-glow" />
              <div className="avatar-circle">
                {initials}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="bio-card">
            {profile.bio.map((para, i) => (
              <p
                key={i}
                className={`bio-text ${i !== profile.bio.length - 1 ? "paragraph-space" : ""}`}
              >
                {para}
              </p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
