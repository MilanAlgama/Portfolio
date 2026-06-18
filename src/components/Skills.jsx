function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Git',
    'GitHub',
    'GitHub Actions',
    'CI/CD',
    'Docker Basics'
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;