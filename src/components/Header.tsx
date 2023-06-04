import React from 'react'
import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'

const Header = () => {
  return (
    <View className="flex-row items-center justify-between">
      <Text className="font-title text-2xl text-white">devfinder</Text>
      <View className="flex-row items-center justify-between gap-4">
        <Text className="font-body text-white">LIGHT</Text>
        <Feather name="sun" size={24} color="#FFF" />
      </View>
    </View>
  )
}

export default Header
