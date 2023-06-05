import { View } from 'react-native'
import React from 'react'
import Search from '../../src/components/Search'
import Details from '../../src/components/Details'

const home = () => {
  return (
    <View className="flex-1 bg-secundary">
      <Search />
      <Details />
    </View>
  )
}

export default home
