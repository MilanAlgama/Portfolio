import Reveal from "./Reveal";

export default function SectionHeading({ comment, title }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="eyebrow">{comment}</p>
      <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
    </Reveal>
  );
}
