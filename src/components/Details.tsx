import React from 'react'
import { View, Image, Text } from 'react-native'

import { AntDesign, Ionicons, Feather, FontAwesome } from '@expo/vector-icons'

import ProfileImage from '../assets/profileImage.png'

const Details = () => {
  return (
    <View className="mt-4  w-full  rounded-2xl bg-primary px-6 py-8">
      <View className="w-full flex-row">
        <View className="mr-5">
          <Image
            source={ProfileImage}
            alt="profile image"
            className="h-[70px] w-[70px] rounded-[35px]"
          />
        </View>
        <View className="-space-y-1.5">
          <Text className="font-title text-base text-white">The Octocat</Text>
          <Text className="font-body text-link">@octocat</Text>
          <Text className="font-body text-sm text-white">
            Joined 25 Jan 2011
          </Text>
        </View>
      </View>
      <View className="mt-8 w-full">
        <Text className="font-body text-sm text-white">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </Text>
      </View>
      <View className="mt-10 w-full flex-row items-center justify-center space-x-7 rounded-xl bg-secundary px-4 py-5">
        <View className="items-center gap-1">
          <Text className="font-body text-xs text-white">Repos</Text>
          <Text className="font-title text-base text-white">8</Text>
        </View>
        <View className="items-center gap-1">
          <Text className="font-body text-xs text-white">Followers</Text>
          <Text className="font-title text-base text-white">3938</Text>
        </View>
        <View className="items-center gap-1">
          <Text className="font-body text-xs text-white">Following</Text>
          <Text className="font-title text-base text-white">9</Text>
        </View>
      </View>
      <View className="mt-6">
        <View className="mb-4 flex-row gap-5">
          <Ionicons name="location-sharp" size={24} color="#FFF" />
          <Text className="font-body text-sm text-white">San Francisco</Text>
        </View>
        <View className="mb-4 flex-row gap-5">
          <Feather name="link" size={24} color="#FFF" />
          <Text className="font-body text-sm text-white">
            https://github.blog
          </Text>
        </View>
        <View className="mb-4 flex-row gap-5">
          <AntDesign name="twitter" size={24} color="#FFF" />
          <Text className="font-body text-sm text-white">Not Available</Text>
        </View>
        <View className="mb-4 flex-row gap-5">
          <FontAwesome name="building-o" size={24} color="#FFF" />
          <Text className="font-body text-sm text-white">@github</Text>
        </View>
      </View>
    </View>
  )
}

export default Details
