import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import RepoList from './components/RepoList'

function App() {
  return (
    <main className="portfolio">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <RepoList />
    </main>
  )
}

export default App
