const groups = [
  {
    title: 'Languages',
    tags: ['Python', 'JavaScript', 'SQL', 'R'],
  },
  {
    title: 'ML / NLP',
    tags: ['PyTorch', 'Scikit-learn', 'Transformers', 'Prompt Engineering'],
  },
  {
    title: 'Viz / Statistics',
    tags: ['Tableau', 'Power BI', 'Seaborn', 'Hypothesis Testing'],
  },
  {
    title: 'Business',
    tags: ['Product Strategy', 'Stakeholder Management', 'Roadmapping'],
  },
  {
    title: 'Tools',
    tags: ['Git', 'Jupyter', 'VS Code', 'Figma'],
  },
]

function Skills() {
  return (
    <section className="card" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {groups.map((group) => (
          <article key={group.title}>
            <h3>{group.title}</h3>
            <ul className="tags">
              {group.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
