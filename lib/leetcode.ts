export interface LeetCodeStats {
  totalSolved: number
  totalQuestions: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  acceptanceRate: number
  ranking: number
  contributionPoints: number
  reputation: number
}

export interface LeetCodeSubmission {
  title: string
  titleSlug: string
  timestamp: string
  statusDisplay: string
  lang: string
  difficulty: string
}

// Note: LeetCode doesn't have an official public API, so we'll use a mock implementation
// In a real scenario, you might use a third-party service or web scraping
export async function fetchLeetCodeStats(username: string): Promise<LeetCodeStats | null> {
  try {
    // Mock data based on typical LeetCode profile
    // In production, you would integrate with a LeetCode API service
    const mockStats: LeetCodeStats = {
      totalSolved: 150,
      totalQuestions: 2500,
      easySolved: 75,
      mediumSolved: 60,
      hardSolved: 15,
      acceptanceRate: 65.5,
      ranking: 125000,
      contributionPoints: 1250,
      reputation: 850,
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return mockStats
  } catch (error) {
    console.error("Error fetching LeetCode stats:", error)
    return null
  }
}

export async function fetchRecentSubmissions(username: string): Promise<LeetCodeSubmission[]> {
  try {
    // Mock recent submissions data
    const mockSubmissions: LeetCodeSubmission[] = [
      {
        title: "Two Sum",
        titleSlug: "two-sum",
        timestamp: "2024-01-15T10:30:00Z",
        statusDisplay: "Accepted",
        lang: "python3",
        difficulty: "Easy",
      },
      {
        title: "Binary Tree Inorder Traversal",
        titleSlug: "binary-tree-inorder-traversal",
        timestamp: "2024-01-14T15:45:00Z",
        statusDisplay: "Accepted",
        lang: "python3",
        difficulty: "Easy",
      },
      {
        title: "Longest Substring Without Repeating Characters",
        titleSlug: "longest-substring-without-repeating-characters",
        timestamp: "2024-01-13T09:20:00Z",
        statusDisplay: "Accepted",
        lang: "python3",
        difficulty: "Medium",
      },
      {
        title: "Median of Two Sorted Arrays",
        titleSlug: "median-of-two-sorted-arrays",
        timestamp: "2024-01-12T14:10:00Z",
        statusDisplay: "Accepted",
        lang: "python3",
        difficulty: "Hard",
      },
    ]

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    return mockSubmissions
  } catch (error) {
    console.error("Error fetching recent submissions:", error)
    return []
  }
}
