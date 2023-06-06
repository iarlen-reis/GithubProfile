import { Tabs } from 'expo-router'
import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { FavoriteProvider } from '../../src/contexts/FavoriteContext'
import { ProfileProvider } from '../../src/contexts/ProfileContext'

const TabLayout = () => {
  return (
    <View className="flex-1 bg-secundary">
      <ProfileProvider>
        <FavoriteProvider>
          <Tabs
            screenOptions={{
              headerShown: false,
              tabBarActiveBackgroundColor: 'transparent',
              tabBarItemStyle: { backgroundColor: '#141D2F' },
              tabBarStyle: {
                backgroundColor: 'transparent',
                borderTopColor: '#141D2F',
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
          </Tabs>
        </FavoriteProvider>
      </ProfileProvider>
    </View>
  )
}

export default TabLayout
