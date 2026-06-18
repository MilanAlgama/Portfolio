function Projects() {
  const projects = [
    {
      title: 'DevOps Portfolio',
      description: 'A React portfolio website connected with GitHub Actions CI/CD pipeline.'
    },
    {
      title: 'CI/CD Calculator Lab',
      description: 'A Java-based lab project used to understand GitHub Actions workflow.'
    },
    {
      title: 'Smart Parking System',
      description: 'A full stack project idea for vehicle location tracking and slot reservation.'
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;