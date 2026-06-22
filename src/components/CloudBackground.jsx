// Ambient "night sky over clouds" backdrop: drifting blurred aurora blobs
// + a quiet field of twinkling stars. This is the page's signature visual —
// everything else stays calm so this can do the talking.
const stars = Array.from({ length: 60 }, (_, i) => {
  const drift = (i * 37) % 100;
  const sparkle = (i * 53) % 100;

  return {
    id: i,
    top: drift,
    left: sparkle,
    size: (i % 3) + 1,
    delay: (i % 5) * 0.8,
  };
});

export default function CloudBackground() {

  return (
    <div
      aria-hidden="true"
      className="sky-background"
    >
      {/* star field */}
      {stars.map((s) => (
        <span
          key={s.id}
          className="twinkle-star"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      {/* drifting aurora / cloud blobs */}
      <div className="cloud-blob-one" />
      <div className="cloud-blob-two" />
      <div className="cloud-blob-three" />
      <div className="cloud-blob-four" />

      {/* subtle vignette so content stays readable */}
      <div className="background-vignette" />
    </div>
  );
}
