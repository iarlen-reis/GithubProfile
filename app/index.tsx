import { View } from 'react-native'
import React from 'react'
import Search from '../src/components/Search'
import Details from '../src/components/Details'

export default function Page() {
  return (
    <View className="flex-1 items-center">
      <Search />
      <Details />
    </View>
  )
}
