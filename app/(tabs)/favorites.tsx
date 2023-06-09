import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ProfileCard from '../../src/components/ProfileCard'
import { useFavoriteContext } from '../../src/contexts/FavoriteContext'
import { Fontisto } from '@expo/vector-icons'

const Favorites = () => {
  const { favorites } = useFavoriteContext()

  return (
    <View className="flex-1 bg-backgroundLight px-6 dark:bg-secundary">
      {favorites.length > 0 ? (
        <>
          <Text className="my-5 font-title text-lg text-linkLight dark:text-white">
            Seus Perfis favoritos
          </Text>
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.login}
            renderItem={({ item }) => (
              <ProfileCard profile={item} key={item.login} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </>
      ) : (
        <View className="items-center justify-center">
          <Fontisto
            name="favorite"
            size={45}
            color="#8E0000"
            style={{ marginTop: '50%' }}
          />
          <Text className="mt-5 text-center font-title text-base text-linkLight dark:text-white">
            Nenhum perfil adicionado aos favoritos.
          </Text>
        </View>
      )}
    </View>
  )
}

export default Favorites
