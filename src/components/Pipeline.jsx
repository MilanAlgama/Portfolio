function Pipeline() {
  return (
    <section id="pipeline" className="section">
      <h2>CI/CD Pipeline</h2>

      <div className="pipeline-box">
        <div>Code</div>
        <span>→</span>
        <div>GitHub</div>
        <span>→</span>
        <div>GitHub Actions</div>
        <span>→</span>
        <div>Build</div>
        <span>→</span>
        <div>Deploy</div>
      </div>

      <p>
        This portfolio will use GitHub Actions to automatically build and deploy
        the React application whenever new code is pushed to the main branch.
      </p>
    </section>
  );
}

export default Pipeline;