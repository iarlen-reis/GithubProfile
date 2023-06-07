import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'

import { useLocalSearchParams } from 'expo-router'
import RepositoryCard from '../../src/components/RepositoryCard'
import { useFetchRepos } from '../../src/hooks/useFetchRepos'
import { FlatList } from 'react-native-gesture-handler'

const Repositories = () => {
  const { getRepos, repos, loading } = useFetchRepos()
  const { profile } = useLocalSearchParams()

  useEffect(() => {
    getRepos(profile.toString())
  }, [profile])

  return (
    <View className="flex-1 bg-secundary">
      {!loading ? (
        <>
          <Text className="my-5 font-title text-base text-white">
            Repositórios de {profile}
          </Text>
          <FlatList
            data={repos}
            keyExtractor={(repo) => String(repo.id)}
            renderItem={({ item }) => <RepositoryCard repository={item} />}
            showsVerticalScrollIndicator={false}
            initialNumToRender={repos.length}
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
