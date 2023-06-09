import React from 'react'
import { View, Text, Pressable } from 'react-native'
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
      <Pressable
        className="flex-row items-center justify-between gap-4"
        onPress={handleTheme}
      >
        <Text className="font-body text-textLight dark:text-white">
          {colorScheme === 'dark' ? 'LIGHT' : 'DARK'}
        </Text>
        {colorScheme === 'dark' ? (
          <Feather name="sun" size={24} color="#FFF" />
        ) : (
          <Ionicons name="moon" size={24} color="#4B6A9B" />
        )}
      </Pressable>
    </View>
  )
}

export default Header
