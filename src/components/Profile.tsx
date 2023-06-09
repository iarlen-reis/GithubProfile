import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { addEllipsis } from '../utils/addEllipsis'
import { formateData } from '../utils/formateDate'
import { useRouter } from 'expo-router'
import { useFavoriteContext } from '../contexts/FavoriteContext'
import { useColorScheme } from 'nativewind'

import {
  AntDesign,
  Ionicons,
  Feather,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'

interface IProfile {
  login: string
  name: string
  bio: string
  location: string
  avatar_url: string
  blog: string
  twitter_username: string
  public_repos: number
  followers: number
  following: number
  created_at: string
  company: string
}

interface IProfileProps {
  profile: IProfile
}

const Profile = ({ profile }: IProfileProps) => {
  const router = useRouter()
  const { addToFavorite, favorites } = useFavoriteContext()
  const { colorScheme } = useColorScheme()

  const handleAddFavorite = () => {
    const data = {
      name: profile.name,
      avatar_url: profile.avatar_url,
      login: profile.login,
    }

    addToFavorite(data)
  }

  const handleRepositories = () => {
    router.push({
      pathname: '/repositories',
      params: { profile: profile.login },
    })
  }

  const colorInfo = colorScheme === 'dark' ? '#FFF' : '#4B6A9B'

  const isFavorite =
    profile && favorites.find((item) => item.login === profile.login)

  return (
    <View>
      <View className="w-full flex-row">
        <View className="mr-5">
          <Image
            source={{ uri: profile.avatar_url }}
            alt={profile.name}
            className="h-[70px] w-[70px] rounded-[35px]"
          />
        </View>
        <View className="space-y-1.5">
          <Text className="font-title text-base capitalize text-titleLight dark:text-white">
            {profile.name ? profile.name : profile.login}
          </Text>
          <Text className="font-body text-link">@{profile.login}</Text>
          <Text className="font-body text-sm text-linkLight dark:text-white">
            Entrou {formateData(profile.created_at)}
          </Text>
        </View>
      </View>
      {profile.bio && (
        <View className="mt-8 w-full">
          <Text className="text-center font-body text-sm text-linkLight dark:text-white">
            {addEllipsis(profile.bio)}
          </Text>
        </View>
      )}
      <View className="mt-6 w-full flex-row items-center justify-center rounded-xl bg-backgroundLight p-5 dark:bg-secundary">
        <View className="mr-4 items-center gap-1">
          <Text className="font-body text-xs text-linkLight dark:text-white">
            Repos
          </Text>
          <Text className="font-title text-base text-titleLight dark:text-white">
            {profile.public_repos}
          </Text>
        </View>
        <View className="mr-4 items-center gap-1">
          <Text className="font-body text-xs text-linkLight dark:text-white">
            Seguidores
          </Text>
          <Text className="font-title text-base text-titleLight dark:text-white">
            {profile.followers}
          </Text>
        </View>
        <View className="items-center gap-1">
          <Text className="font-body text-xs text-linkLight dark:text-white">
            Seguindo
          </Text>
          <Text className="font-title text-base text-titleLight dark:text-white">
            {profile.following}
          </Text>
        </View>
      </View>
      <View className="mt-4 w-full">
        <View className="mb-4 w-full flex-row gap-5">
          <Ionicons name="location-sharp" size={24} color={colorInfo} />
          <Text className="font-body text-sm capitalize text-linkLight dark:text-white">
            {profile.location
              ? profile.location
              : 'Nenhuma localização definida.'}
          </Text>
        </View>
        <View className="mb-4 w-full flex-row gap-5">
          <Feather name="link" size={24} color={colorInfo} />
          <Text className="w-full font-body text-xs text-linkLight dark:text-white">
            {profile.blog ? profile.blog : 'Nenhum site definido.'}
          </Text>
        </View>
        <View className="mb-4 flex-row gap-5">
          <AntDesign name="twitter" size={24} color={colorInfo} />
          <Text className="font-body text-sm text-linkLight dark:text-white">
            {profile.twitter_username
              ? profile.twitter_username
              : 'Nenhum twitter vinculado.'}
          </Text>
        </View>
        <View className="mb-4 flex-row gap-5">
          <FontAwesome name="building-o" size={24} color={colorInfo} />
          <Text className="font-body text-sm text-linkLight dark:text-white">
            {profile.company ? profile.company : 'Nenhuma empresa vinculada.'}
          </Text>
        </View>
        <TouchableOpacity
          className="mt-2 flex-row items-center justify-center  rounded-lg bg-link p-2"
          onPress={handleRepositories}
        >
          <MaterialCommunityIcons
            name="source-repository"
            size={24}
            color="#FFF"
          />
          <Text className="ml-1 font-body text-white">Repositórios</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        className="absolute right-3 top-2"
        onPress={handleAddFavorite}
      >
        {isFavorite ? (
          <MaterialIcons name="favorite" size={24} color="#8E0000" />
        ) : (
          <MaterialIcons name="favorite-outline" size={24} color="#8E0000" />
        )}
      </TouchableOpacity>
    </View>
  )
}

export default Profile
