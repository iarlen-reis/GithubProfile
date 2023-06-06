import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { useProfileContext } from '../contexts/ProfileContext'

const Search = () => {
  const [search, setSearch] = useState<string>('')
  const { getProfile } = useProfileContext()

  const handleProfile = () => {
    if (!search) return

    getProfile(search.toLowerCase())

    setSearch('')
  }
  return (
    <View className="relative mt-5 w-full flex-row items-center">
      <Feather
        name="search"
        color="#0079FF"
        size={30}
        style={{ position: 'absolute', left: 10, zIndex: 5 }}
      />
      <TextInput
        placeholder="Procure um usuário..."
        className="w-full rounded-2xl bg-primary px-[45] py-[18] font-body text-[12px] text-white"
        placeholderTextColor="#FFF"
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <TouchableOpacity
        className="absolute right-2 rounded-xl bg-link px-4 py-3"
        onPress={handleProfile}
      >
        <Text className="font-title text-sm text-white">Search</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Search
