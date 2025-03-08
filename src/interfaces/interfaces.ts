export interface AllRepositoriesProps {
    visibility: string
    language: string
    full_name: string
    description: string
    forks_count: number
    stargazers_count: number
    git_url: string
    topics: string[]
    owner: {
        type: string
    }
}

export interface UserProps {
    login: string
    avatar_url?: string
    name?: string
    location?: string
    bio?: string
    company?: string
    email?: string
    followers: number
    following: number
    public_repos: number
}
