const projects = [
  {
    title: 'LLM Originality Probe',
    description:
      'Built an evaluation framework to assess novelty and originality in LLM-generated content using statistical and semantic checks.',
  },
  {
    title: 'Employee Attrition Analysis',
    description:
      'Developed predictive models to identify attrition risk drivers and translated findings into retention-focused recommendations.',
  },
  {
    title: 'Financial News Sentiment Analyzer',
    description:
      'Created an NLP pipeline for sentiment extraction from financial news to support market and risk insights.',
  },
]

function Projects() {
  return (
    <section className="card" id="projects">
      <h2>Projects & Research</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
