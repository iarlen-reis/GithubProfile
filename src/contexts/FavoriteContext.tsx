import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface IFavorite {
  name: string
  avatar_url: string
  login: string
}

interface IFavoriteContext {
  favorites: IFavorite[]
  addToFavorite: (profile: IFavorite) => void
}

interface IChildren {
  children: React.ReactNode
}

const FavoriteContext = createContext<IFavoriteContext>({
  favorites: [],
  addToFavorite: () => {},
})

export const FavoriteProvider: React.FC<IChildren> = ({ children }) => {
  const [favorites, setFavorites] = useState<IFavorite[]>()

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('favorites')
        if (storedFavorites !== null) {
          setFavorites(JSON.parse(storedFavorites))
        } else {
          setFavorites([])
        }
      } catch (error) {
        console.error('Error retrieving favorites from AsyncStorage:', error)
      }
    }

    fetchFavorites()
  }, [])

  useEffect(() => {
    const saveFavorites = async () => {
      try {
        if (favorites)
          await AsyncStorage.setItem('favorites', JSON.stringify(favorites))
      } catch (error) {
        console.error('Error saving favorites to AsyncStorage:', error)
      }
    }

    saveFavorites()
  }, [favorites])

  const addToFavorite = (profile: IFavorite) => {
    const itemExists = favorites.some((item) => item.login === profile.login)

    if (itemExists) {
      setFavorites(favorites.filter((item) => item.login !== profile.login))
      return
    }

    setFavorites((prevFavorites) => [...prevFavorites, profile])
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}

export const useFavoriteContext = (): IFavoriteContext => {
  return useContext(FavoriteContext)
}
