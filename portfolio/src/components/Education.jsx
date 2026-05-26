const coursework = [
  'Machine Learning',
  'Natural Language Processing',
  'Statistics for Data Science',
  'Data Visualization',
  'Optimization',
  'Business Analytics',
]

function Education() {
  return (
    <section className="card" id="education">
      <h2>Education</h2>
      <p>
        <strong>Indian Institute of Technology (IIT) Jodhpur</strong>
      </p>
      <p>Relevant Coursework</p>
      <ul className="tags">
        {coursework.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default Education
