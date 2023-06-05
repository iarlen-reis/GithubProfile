import { View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

export default function Page() {
  return (
    <View>
      <Redirect href="/home" />
    </View>
  )
}
