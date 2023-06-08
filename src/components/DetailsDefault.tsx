import { View, Text, Image } from 'react-native'
import React from 'react'

import ProfileImage from '../assets/profileImage.png'

const DetailsDefault = () => {
  return (
    <View className="items-center justify-center">
      <Image
        source={ProfileImage}
        alt="profile image"
        className="h-[70px] w-[70px] rounded-[35px]"
      />
      <Text className="mt-5 font-title text-textLight dark:text-white">
        Pesquise por um usuário!
      </Text>
    </View>
  )
}

export default DetailsDefault
