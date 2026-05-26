const achievements = [
  'Presented research-oriented AI ideas in academic and project forums.',
  'Led collaborative teams and delivered project milestones on time.',
  'Built end-to-end analytics and NLP prototypes for real-world use cases.',
]

const certifications = [
  'Machine Learning Specialization',
  'Data Visualization and Storytelling',
  'Project Management Foundations',
]

function Achievements() {
  return (
    <section className="card" id="achievements">
      <h2>Achievements & Certifications</h2>
      <div className="two-col">
        <div>
          <h3>Achievements</h3>
          <ul>
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Certifications</h3>
          <ul>
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Achievements
