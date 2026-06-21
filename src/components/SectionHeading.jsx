import Reveal from "./Reveal";

export default function SectionHeading({ comment, title }) {
  return (
    <Reveal className="section-title-space">
      <p className="eyebrow">{comment}</p>
      <h2 className="section-title">{title}</h2>
    </Reveal>
  );
}
