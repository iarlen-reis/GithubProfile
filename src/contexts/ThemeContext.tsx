import { ReactNode, createContext, useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { useColorScheme } from 'nativewind'

interface IThemeContext {}

type ColorSchemeSystem = 'light' | 'dark' | 'system'

interface IChildren {
  children: ReactNode
}

const ThemeContext = createContext<IThemeContext>({})

export const ThemeProvider = ({ children }: IChildren) => {
  const { setColorScheme, colorScheme } = useColorScheme()

  useEffect(() => {
    const fetchTheme = async () => {
      const themeSaved = await AsyncStorage.getItem('@devfinder/theme2')

      if (themeSaved !== null) {
        setColorScheme(themeSaved as ColorSchemeSystem)
        console.log(themeSaved)
      } else {
        setColorScheme('light')
      }
    }
    fetchTheme()
  }, [setColorScheme])

  useEffect(() => {
    const saveTheme = async () => {
      await AsyncStorage.setItem('@devfinder/theme2', colorScheme)
    }
    saveTheme()
  }, [colorScheme])

  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => {
  return useContext(ThemeContext)
}
