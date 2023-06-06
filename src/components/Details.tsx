import React from 'react'
import {
  View,
  Image,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native'

import {
  AntDesign,
  Ionicons,
  Feather,
  FontAwesome,
  MaterialIcons,
} from '@expo/vector-icons'

import ProfileImage from '../assets/profileImage.png'
import { useProfileContext } from '../contexts/ProfileContext'
import { formateData } from '../utils/formateDate'
import { useFavoriteContext } from '../contexts/FavoriteContext'
import { addEllipsis } from '../utils/addEllipsis'
import { formateName } from '../utils/formateName'

const Details = () => {
  const { loading, profile, error } = useProfileContext()
  const { addToFavorite, favorites } = useFavoriteContext()

  profile.name = formateName(profile.name)

  const handleAddFavorite = () => {
    const data = {
      name: profile.name,
      avatar_url: profile.avatar_url,
      login: profile.login,
    }

    addToFavorite(data)
  }

  if (loading) return <ActivityIndicator size={40} className="mt-[50%]" />

  const isFavorite =
    profile && favorites.find((item) => item.login === profile.login)

  return (
    <View className="relative  mt-4 w-full rounded-2xl bg-primary  px-6 py-8 pb-2">
      {profile ? (
        <>
          <View className="w-full flex-row ">
            <View className="mr-5">
              <Image
                source={{ uri: profile.avatar_url }}
                alt={profile.name}
                className="h-[70px] w-[70px] rounded-[35px]"
              />
            </View>
            <View className="-space-y-1.5">
              <Text className="font-title text-base text-white">
                {profile.name ? profile.name : profile.login}
              </Text>
              <Text className="font-body text-link">@{profile.login}</Text>
              <Text className="font-body text-sm text-white">
                Entrou {formateData(profile.created_at)}
              </Text>
            </View>
          </View>
          {profile.bio && (
            <View className="mt-8 w-full">
              <Text className="font-body text-sm text-white">
                {addEllipsis(profile.bio)}
              </Text>
            </View>
          )}
          <View className="mt-10 w-full flex-row items-center justify-center space-x-7 rounded-xl bg-secundary px-4 py-5">
            <View className="items-center gap-1">
              <Text className="font-body text-xs text-white">Repos</Text>
              <Text className="font-title text-base text-white">
                {profile.public_repos}
              </Text>
            </View>
            <View className="items-center gap-1">
              <Text className="font-body text-xs text-white">Seguidores</Text>
              <Text className="font-title text-base text-white">
                {profile.followers}
              </Text>
            </View>
            <View className="items-center gap-1">
              <Text className="font-body text-xs text-white">Seguindo</Text>
              <Text className="font-title text-base text-white">
                {profile.following}
              </Text>
            </View>
          </View>
          <View className="mt-6 w-full">
            <View className="mb-4 w-full flex-row gap-5">
              <Ionicons name="location-sharp" size={24} color="#FFF" />
              <Text className="font-body text-sm text-white">
                {profile.location
                  ? profile.location
                  : 'Nenhuma localização definida.'}
              </Text>
            </View>
            <View className="mb-4 w-full flex-row gap-5">
              <Feather name="link" size={24} color="#FFF" />
              <Text className="w-full font-body text-xs text-white">
                {profile.blog ? profile.blog : 'Nenhum site definido.'}
              </Text>
            </View>
            <View className="mb-4 flex-row gap-5">
              <AntDesign name="twitter" size={24} color="#FFF" />
              <Text className="font-body text-sm text-white">
                {profile.twitter_username
                  ? profile.twitter_username
                  : 'Nenhum twitter vinculado.'}
              </Text>
            </View>
            <View className="mb-4 flex-row gap-5">
              <FontAwesome name="building-o" size={24} color="#FFF" />
              <Text className="font-body text-sm text-white">
                {profile.company
                  ? profile.company
                  : 'Nenhuma empresa vinculada.'}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            className="absolute right-3 top-2"
            onPress={handleAddFavorite}
          >
            {isFavorite ? (
              <MaterialIcons name="favorite" size={24} color="#8E0000" />
            ) : (
              <MaterialIcons
                name="favorite-outline"
                size={24}
                color="#8E0000"
              />
            )}
          </TouchableOpacity>
        </>
      ) : (
        <View className="items-center justify-center">
          <Image
            source={ProfileImage}
            alt="profile image"
            className="h-[70px] w-[70px] rounded-[35px]"
          />
          <Text className="mt-5 font-title text-white">
            Pesquise por um usuário.
          </Text>
        </View>
      )}
      {error && (
        <View>
          <Text className="font-title text-white">Sim, error.</Text>
        </View>
      )}
    </View>
  )
}

export default Details
