import { useEffect, useState } from 'react'

const API_URL = 'https://api.github.com/users/ridhi-png/repos'

function RepoList() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function fetchRepos() {
      try {
        const response = await fetch(API_URL, { signal: controller.signal })
        if (!response.ok) {
          throw new Error('Unable to load repositories right now.')
        }
        const data = await response.json()
        setRepos(data)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
    return () => controller.abort()
  }, [])

  return (
    <section className="card" id="repos">
      <h2>GitHub Repositories</h2>
      {loading && <p>Loading repositories...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <ul className="repo-list">
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {repo.name}
              </a>
              <p>{repo.description || 'No description provided.'}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default RepoList
