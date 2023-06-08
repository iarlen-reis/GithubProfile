import {
  View,
  Text,
  ActivityIndicator,
  VirtualizedList,
  TouchableOpacity,
} from 'react-native'
import React from 'react'

import { useLocalSearchParams, useRouter } from 'expo-router'
import RepositoryCard from '../../src/components/RepositoryCard'
import { useFetchRepos } from '../../src/hooks/useFetchRepos'

import { AntDesign, Ionicons } from '@expo/vector-icons'

const Repositories = () => {
  const { profile } = useLocalSearchParams()
  const { repos, loading } = useFetchRepos(profile.toString())
  const router = useRouter()

  const getItemCount = () => repos.length

  const getItem = (data, index) => data[index]

  const renderItem = ({ item }) => <RepositoryCard repository={item} />

  const handleToBack = () => {
    router.back()
  }

  if (loading)
    return <ActivityIndicator size={40} className="flex-1 bg-secundary" />

  return (
    <View className="flex-1 bg-secundary">
      {repos.length > 0 ? (
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
        <View className="mt-[50%] items-center justify-center">
          <View className="items-center justify-center">
            <AntDesign name="addfolder" size={45} color="#FFF" />
            <Text className="mt-2 w-52 text-center font-title text-base text-white">
              Nenhum repositório encontrado.
            </Text>
          </View>
          <TouchableOpacity
            className="mt-4 flex-row items-center justify-center rounded-lg bg-link px-6 py-2"
            onPress={handleToBack}
          >
            <Ionicons name="arrow-back-circle-sharp" size={30} color="#FFF" />
            <Text className="ml-2 font-body text-sm text-white">Voltar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default Repositories
