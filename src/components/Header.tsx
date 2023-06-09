import React from 'react'
import { View, Text } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useColorScheme } from 'nativewind'

const Header = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme()

  const handleTheme = () => {
    toggleColorScheme()
  }

  return (
    <View className="flex-row items-center justify-between px-6 ">
      <Text className="font-title text-2xl text-textLight dark:text-white">
        devfinder
      </Text>
      <View className="flex-row items-center justify-between gap-4">
        <Text
          className="font-body text-textLight dark:text-white"
          onPress={handleTheme}
        >
          {colorScheme === 'dark' ? 'LIGHT' : 'DARK'}
        </Text>
        {colorScheme === 'dark' ? (
          <Feather name="sun" size={24} color="#FFF" />
        ) : (
          <Ionicons name="moon" size={24} color="#4B6A9B" />
        )}
      </View>
    </View>
  )
}

export default Header
