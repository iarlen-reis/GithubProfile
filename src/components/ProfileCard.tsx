import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Feather } from '@expo/vector-icons'
import { useProfileContext } from '../contexts/ProfileContext'
import { useRouter } from 'expo-router'

interface IProfile {
  name: string
  avatar_url: string
  login: string
}

interface IProfileCard {
  profile: IProfile
}

const ProfileCard = ({ profile }: IProfileCard) => {
  const { getProfile } = useProfileContext()
  const router = useRouter()

  const handleProfile = () => {
    getProfile(profile.login)

    router.push('/home')
  }
  return (
    <View className="mt-4 w-full flex-row items-center justify-between rounded-md bg-primary p-2">
      <View className="flex-row items-center">
        <Image
          source={{ uri: profile.avatar_url }}
          alt="profile"
          className="mr-2 h-[50px] w-[50px] rounded-[25px]"
        />
        <View>
          <Text className="font-title text-sm text-white">
            {profile.name ? profile.name : profile.login}
          </Text>
          <Text className="font-body text-xs text-white">@{profile.login}</Text>
        </View>
      </View>
      <TouchableOpacity
        className="h-10 w-10 items-center justify-center rounded-lg bg-link"
        onPress={handleProfile}
      >
        <Feather name="search" size={30} color="#FFF" />
      </TouchableOpacity>
    </View>
  )
}

export default ProfileCard
