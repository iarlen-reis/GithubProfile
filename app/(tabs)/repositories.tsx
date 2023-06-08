import { View, Text, ActivityIndicator, VirtualizedList } from 'react-native'
import React from 'react'

import { useLocalSearchParams } from 'expo-router'
import RepositoryCard from '../../src/components/RepositoryCard'
import { useFetchRepos } from '../../src/hooks/useFetchRepos'

const Repositories = () => {
  const { profile } = useLocalSearchParams()
  const { repos, loading } = useFetchRepos(profile.toString())

  const getItemCount = () => repos.length

  const getItem = (data, index) => data[index]

  const renderItem = ({ item }) => <RepositoryCard repository={item} />

  return (
    <View className="flex-1 bg-secundary">
      {!loading ? (
        <>
          <Text className="my-5 font-title text-base text-white">
            Repositórios de {profile}
          </Text>
          <VirtualizedList
            data={repos}
            getItemCount={getItemCount}
            getItem={getItem}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            initialNumToRender={5}
          />
        </>
      ) : (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size={30} />
        </View>
      )}
    </View>
  )
}

export default Repositories
