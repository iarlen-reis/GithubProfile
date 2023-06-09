import { View, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Search from '../../src/components/Search'
import Details from '../../src/components/Details'

const Home = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-backgroundLight px-6 dark:bg-secundary ">
        <Search />
        <Details />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Home
