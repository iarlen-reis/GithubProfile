import { api } from '../services/api'
import { useQuery } from '@tanstack/react-query'

interface IRepo {
  id: number
  name: string
  description: string
  html_url: string
  forks: number
  stargazers_count: number
  language: string
}

interface IUseFetchRepos {
  repos: IRepo[]
  loading: boolean
}

const fetcherRepos = async (profile: string) => {
  const response = await api.get<IRepo[]>(`/${profile}/repos`)

  return response.data
}

export const useFetchRepos = (profile: string): IUseFetchRepos => {
  const { data: repos, isLoading: loading } = useQuery(
    ['repos', profile],
    () => fetcherRepos(profile),
    { staleTime: 60000 * 60 * 10 },
  )
  return { repos, loading }
}
