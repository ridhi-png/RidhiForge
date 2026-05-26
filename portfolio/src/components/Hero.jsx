const links = [
  { label: 'GitHub', href: 'https://github.com/ridhi-png' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ridhi-png/' },
  { label: 'Leetcode', href: 'https://leetcode.com/ridhi-png/' },
  { label: 'Email', href: 'mailto:ridhi.png@gmail.com' },
]

function Hero() {
  return (
    <section className="card hero" id="hero">
      <div className="hero-copy">
        <p className="eyebrow">Portfolio</p>
        <h1>Ridhi</h1>
        <p className="subtitle">AI/ML Enthusiast • LLM Researcher • Project Leader</p>
        <p className="contact">IIT Jodhpur, Rajasthan • Open to AI Research & Product roles</p>
        <div className="actions">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <img
        className="avatar"
        src="https://avatars.githubusercontent.com/ridhi-png"
        alt="Ridhi avatar"
        loading="lazy"
      />
    </section>
  )
}

export default Hero
