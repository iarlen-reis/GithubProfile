import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React, { memo } from 'react'

import { FontAwesome, Entypo } from '@expo/vector-icons'

import { useColorScheme } from 'nativewind'

interface IRepository {
  id: number
  name: string
  stargazers_count: number
  forks: number
  language: string
  description: string
  html_url: string
}

interface IRepositoryCard {
  repository: IRepository
}

const RepositoryCard = ({ repository }: IRepositoryCard) => {
  const handleToRepository = () => {
    Linking.openURL(repository.html_url)
  }

  const { colorScheme } = useColorScheme()

  const colorInfo = colorScheme === 'dark' ? '#FFF' : '#4B6A9B'

  return (
    <View className=" mb-5 w-full rounded-lg bg-white p-3 pb-5 dark:bg-primary">
      <View className="items-center justify-center">
        <Text className="flex-wrap text-center font-title text-lg text-linkLight dark:text-white">
          {repository.name}
        </Text>
      </View>
      <View className=" mt-2 flex-row items-center justify-center">
        <View className="flex-row">
          <FontAwesome name="code-fork" size={24} color={colorInfo} />
          <Text className="ml-2 mr-4 font-title text-linkLight dark:text-white">
            Fork: {repository.forks}
          </Text>
        </View>
        <View className="flex-row">
          <Entypo name="star-outlined" size={24} color={colorInfo} />
          <Text className="ml-2 font-title text-linkLight dark:text-white">
            Star: {repository.stargazers_count}
          </Text>
        </View>
      </View>
      <View className="mt-4">
        <Text className="text-center font-body text-xs text-linkLight dark:text-white">
          {repository.description}
        </Text>
      </View>
      <View className="mt-4 flex-row items-center justify-center">
        {repository.language && (
          <View className="flex-row items-center">
            <FontAwesome name="gears" size={20} color={colorInfo} />
            <Text className="ml-2 mr-1 font-body text-linkLight dark:text-white">
              Linguagem:
            </Text>
          </View>
        )}
        <Text className="font-title text-linkLight dark:text-white">
          {repository.language}
        </Text>
      </View>
      <View className="mt-4 items-center justify-center">
        <TouchableOpacity
          className="items-center justify-center rounded-md bg-link px-4 py-3"
          onPress={handleToRepository}
        >
          <Text className="font-body text-xs text-white">Ver repositório</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default memo(RepositoryCard)
