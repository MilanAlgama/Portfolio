import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../Bio-data/profile";

export default function About() {
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading comment="// about" title="Who I am" />

        <div className="grid items-start gap-10 md:grid-cols-[260px_1fr]">
          <Reveal className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-aurora-gradient opacity-40 blur-2xl" />
              <div className="glass-strong relative flex h-44 w-44 items-center justify-center rounded-full text-4xl font-display font-bold text-gradient">
                {initials}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="glass glow-edge rounded-2xl p-8">
            {profile.bio.map((para, i) => (
              <p
                key={i}
                className={`text-muted leading-relaxed ${
                  i !== profile.bio.length - 1 ? "mb-4" : ""
                }`}
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
