import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ProfileCard from '../../src/components/ProfileCard'
import { useFavoriteContext } from '../../src/contexts/FavoriteContext'

const Favorites = () => {
  const { favorites } = useFavoriteContext()

  console.log(favorites)

  return (
    <View className="flex-1 bg-secundary">
      <Text className="mt-5 font-title text-lg text-white">
        Seus Perfis favoritos
      </Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.login}
        renderItem={({ item }) => (
          <ProfileCard profile={item} key={item.login} />
        )}
      />
    </View>
  )
}

export default Favorites
