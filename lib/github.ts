export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  created_at: string
  updated_at: string
  pushed_at: string
}

export interface GitHubUser {
  login: string
  name: string
  bio: string | null
  public_repos: number
  followers: number
  following: number
  created_at: string
}

export async function fetchGitHubUser(username: string): Promise<GitHubUser | null> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching GitHub user:", error)
    return null
  }
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const repos: GitHubRepo[] = await response.json()

    // Filter out forks and sort by stars and recent activity
    return repos
      .filter((repo) => !repo.name.includes("fork"))
      .sort((a, b) => {
        // Prioritize repos with more stars and recent activity
        const aScore = a.stargazers_count * 2 + new Date(a.pushed_at).getTime() / 1000000000
        const bScore = b.stargazers_count * 2 + new Date(b.pushed_at).getTime() / 1000000000
        return bScore - aScore
      })
      .slice(0, 6) // Return top 6 repos
  } catch (error) {
    console.error("Error fetching GitHub repos:", error)
    return []
  }
}
