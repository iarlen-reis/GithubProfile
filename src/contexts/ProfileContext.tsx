import React, { ReactNode, createContext, useContext, useState } from 'react'
import { api } from '../services/api'

interface IProfile {
  login: string
  name: string
  bio: string
  location: string
  avatar_url: string
  blog: string
  twitter_username: string
  public_repos: number
  followers: number
  following: number
  created_at: string
  company: string
}

interface IProfileContext {
  profile: IProfile | null
  loading: boolean
  error: boolean
  getProfile: (name: string) => void
}

interface IChildren {
  children: ReactNode
}
export const ProfileContext = createContext<IProfileContext>({
  profile: null,
  loading: false,
  error: false,
  getProfile: () => {},
})

export const ProfileProvider = ({ children }: IChildren) => {
  const [profile, setProfile] = useState<IProfile | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const getProfile = async (name: string) => {
    try {
      setLoading(true)
      setError(false)
      const data = await api.get<IProfile>(`/${name}`)

      setProfile(data.data)
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ProfileContext.Provider
      value={{
        profile,
        loading,
        error,
        getProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfileContext = () => {
  return useContext(ProfileContext)
}
