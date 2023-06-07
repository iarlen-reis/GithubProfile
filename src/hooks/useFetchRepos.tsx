import { useState } from 'react'
import { api } from '../services/api'

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
  getRepos: (profile: string) => void
  loading: boolean
}

export const useFetchRepos = (): IUseFetchRepos => {
  const [repos, setRepos] = useState<IRepo[]>()
  const [loading, setLoading] = useState(true)

  const getRepos = async (profile: string) => {
    try {
      setLoading(true)
      const data = (await api.get<IRepo[]>(`/${profile}/repos`)).data

      setRepos(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return { getRepos, repos, loading }
}
