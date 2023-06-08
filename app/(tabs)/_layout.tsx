import { Tabs } from 'expo-router'
import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { FavoriteProvider } from '../../src/contexts/FavoriteContext'
import { ProfileProvider } from '../../src/contexts/ProfileContext'

import { useColorScheme } from 'nativewind'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const TabLayout = () => {
  const queryClient = new QueryClient()
  const { colorScheme } = useColorScheme()

  const color = colorScheme === 'dark' ? '#141D2F' : '#F6F8FF'

  return (
    <View className="flex-1 bg-backgroundLight dark:bg-secundary">
      <QueryClientProvider client={queryClient}>
        <ProfileProvider>
          <FavoriteProvider>
            <Tabs
              screenOptions={{
                headerShown: false,
                tabBarActiveBackgroundColor: 'transparent',
                tabBarItemStyle: {
                  backgroundColor: color,
                },
                tabBarStyle: {
                  backgroundColor: color,
                  borderTopColor: color,
                },
                tabBarShowLabel: false,
              }}
            >
              <Tabs.Screen
                name="home"
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Feather name="home" color={color} size={size} />
                  ),
                }}
              />
              <Tabs.Screen
                name="favorites"
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Feather name="heart" color={color} size={size} />
                  ),
                }}
              />
              <Tabs.Screen name="repositories" options={{ href: null }} />
            </Tabs>
          </FavoriteProvider>
        </ProfileProvider>
      </QueryClientProvider>
    </View>
  )
}

export default TabLayout
