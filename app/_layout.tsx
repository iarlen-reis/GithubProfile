import React from 'react'
import { View, StatusBar } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import {
  useFonts,
  SpaceMono_400Regular,
  SpaceMono_700Bold,
} from '@expo-google-fonts/space-mono'
import Header from '../src/components/Header'

const Layout = () => {
  const [hasLoaderFonts] = useFonts({
    SpaceMono_400Regular,
    SpaceMono_700Bold,
  })

  if (!hasLoaderFonts) {
    return <SplashScreen />
  }

  return (
    <View className="flex-1 bg-secundary px-6 pb-2 pt-11">
      <StatusBar barStyle="light-content" translucent={true} />
      <Header />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </View>
  )
}

export default Layout
