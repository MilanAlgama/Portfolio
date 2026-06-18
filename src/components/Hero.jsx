function Hero() {
  return (
    <section id="home" className="section hero">
      <p className="intro">Hello, I'm</p>

      <h1>Milan Harsha</h1>

      <h3>ICT Undergraduate | DevOps Learner</h3>

      <p className="hero-text">
        I am building this portfolio as part of my DevOps assignment to demonstrate
        React development, Git version control, GitHub Actions, and CI/CD pipelines.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn primary">View Projects</a>
        <a href="#pipeline" className="btn secondary">View Pipeline</a>
      </div>
    </section>
  );
}

export default Hero;