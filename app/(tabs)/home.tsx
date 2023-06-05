import { View } from 'react-native'
import React from 'react'
import Search from '../../src/components/Search'
import Details from '../../src/components/Details'
import { ProfileProvider } from '../../src/contexts/ProfileContext'

const home = () => {
  return (
    <View className="flex-1 bg-secundary">
      <ProfileProvider>
        <Search />
        <Details />
      </ProfileProvider>
    </View>
  )
}

export default home
