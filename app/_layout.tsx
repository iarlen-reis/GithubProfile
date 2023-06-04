import React from 'react'
import { View, Text } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import {
  useFonts,
  SpaceMono_400Regular,
  SpaceMono_700Bold,
} from '@expo-google-fonts/space-mono'

const Layout = () => {
  const [hasLoaderFonts] = useFonts({
    SpaceMono_400Regular,
    SpaceMono_700Bold,
  })

  if (!hasLoaderFonts) {
    return <SplashScreen />
  }

  return (
    <View className="flex-1 px-4 pb-2 pt-12">
      <Text>aaa</Text>
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
